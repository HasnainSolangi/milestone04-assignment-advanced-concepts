// src/lib/api-service.ts
import axios from 'axios';
import { Post, User, ApiResponse } from '@/types/api';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Manually created English posts
const ENGLISH_POSTS: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "The Future of Web Development",
    body: "Web development continues to evolve rapidly, with frameworks like Next.js leading the way in creating more efficient and performant web applications. Developers are increasingly focusing on server-side rendering and improved user experiences."
  },
  {
    id: 2,
    userId: 1,
    title: "Exploring React and TypeScript",
    body: "React has transformed how we build user interfaces, and TypeScript adds robust typing to JavaScript. Together, they provide a powerful development environment that catches errors early and improves code quality."
  },
  {
    id: 3,
    userId: 1,
    title: "Understanding Server-Side Rendering",
    body: "Server-side rendering (SSR) is a technique that renders web pages on the server, improving initial load times and providing better SEO. Next.js has made SSR more accessible and easier to implement for developers."
  },
  {
    id: 4,
    userId: 1,
    title: "The Importance of Web Performance",
    body: "Performance is crucial in modern web applications. Techniques like code splitting, lazy loading, and optimized rendering can significantly improve user experience and engagement."
  },
  {
    id: 5,
    userId: 1,
    title: "Next.js: A Modern Web Framework",
    body: "Next.js offers developers a comprehensive solution for building React applications. With features like automatic code splitting, server-side rendering, and easy deployment, it has become a go-to framework for many developers."
  }
];

export const ApiService = {
  async getPosts(): Promise<ApiResponse<Post[]>> {
    try {
      // Return our predefined English posts
      return {
        data: ENGLISH_POSTS,
        status: 200
      };
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  async getUsers(): Promise<ApiResponse<User[]>> {
    try {
      const response = await axios.get<User[]>(`${BASE_URL}/users?_limit=5`);
      return {
        data: response.data,
        status: response.status
      };
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
};