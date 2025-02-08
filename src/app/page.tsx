// src/app/page.tsx
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
              Next.js Advanced Concepts
            </h1>
            <p className="text-xl text-gray-600 text-center mb-8">
              Milestone 4: Exploring Server-Side Rendering, API Integration, and Authentication
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-4 flex-grow">
                  Server-Side Rendering
                </h2>
                <p className="text-blue-600 mb-4 flex-grow">
                  Fetch and display data from JSONPlaceholder API using server-side rendering.
                </p>
                <Link 
                  href="/posts" 
                  className="w-full text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition mt-auto"
                >
                  View Posts
                </Link>
              </div>

              <div className="flex flex-col bg-green-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-800 mb-4 flex-grow">
                  Authentication
                </h2>
                <p className="text-green-600 mb-4 flex-grow">
                  {session ? 
                    `Welcome, ${session.user.name || 'User'}!` : 
                    'Implement secure login with NextAuth.js'
                  }
                </p>
                {session ? (
                  <Link 
                    href="/dashboard" 
                    className="w-full text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition mt-auto"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <Link 
                    href="/login" 
                    className="w-full text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition mt-auto"
                  >
                    Login
                  </Link>
                )}
              </div>

              <div className="flex flex-col bg-purple-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-purple-800 mb-4 flex-grow">
                  API Integration
                </h2>
                <p className="text-purple-600 mb-4 flex-grow">
                  Explore how to fetch and display data from external APIs.
                </p>
                <Link 
                  href="/dashboard" 
                  className="w-full text-center bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition mt-auto"
                >
                  View Users
                </Link>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-500">
                This project demonstrates advanced Next.js concepts including:
              </p>
              <div className="flex justify-center space-x-4 mt-4 text-gray-600">
                <span>✓ Server-Side Rendering</span>
                <span>✓ API Integration</span>
                <span>✓ Authentication</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}