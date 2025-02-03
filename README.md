# Milestone 4 - Assignment - Next.js Advanced Concepts.

## Overview
This project demonstrates advanced Next.js concepts including:
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- API Integration
- Authentication with NextAuth.js
- Protected Routes

## Features
- Fetch posts from JSONPlaceholder API
- GitHub and Credentials Authentication
- Protected Dashboard
- Responsive Design with Tailwind CSS

## Prerequisites
- Node.js (v18+)
- npm or yarn

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env.local` with:
   ```
   NEXTAUTH_SECRET=your_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Login Credentials
- Username: Hasnain
- Password: nain@6246

## Technologies
- Next.js 14
- TypeScript
- Tailwind CSS
- NextAuth.js
- Axios

## Project Structure

```
milestone4-advanced-concepts-nextjs/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   └── posts/
│   │   ├── dashboard/
│   │   ├── login/
│   │   └── layout.tsx
│   ├── components/
│   ├── lib/
│   └── types/
├── .env.local
├── next.config.mjs
└── tailwind.config.js

```

- `/src/app`: Page components
- `/src/components`: Reusable UI components
- `/src/lib`: Services and utilities
- `/src/types`: TypeScript type definitions