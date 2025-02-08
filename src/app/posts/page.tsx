// src/app/posts/page.tsx
import { Suspense } from 'react';
import { ApiService } from '@/lib/api-service';
import { Post } from '@/types/api';

async function PostList() {
  const { data: posts } = await ApiService.getPosts();

  return (
    <div className="container text-center mx-auto py-8 px-8">
      <h1 className="text-3xl font-bold mb-6">Posts (Server-Side Rendered)</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <div 
            key={post.id} 
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.body.slice(0, 1000)}...</p> {/* Show more text here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PostsPage() {
  return (
    <Suspense fallback={<div>Loading posts...</div>}>
      <PostList />
    </Suspense>
  );
}
