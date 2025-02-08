// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/" className="text-xl font-bold text-blue-600">
            API - SSR - SSG - Authentication
          </Link>
        </div>
        <div className="ml-auto flex space-x-6">
          <Link href="/posts" className="text-gray-600 hover:text-blue-600">
            Posts
          </Link>
          {session && (
            <Link href="/dashboard" className="text-gray-600 hover:text-blue-600">
              Dashboard
            </Link>
          )}
        </div>

        {/* The login/logout button container */}
        <div className="ml-6">
          {session ? (
            <button 
              onClick={() => signOut({ callbackUrl: '/login' })}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link 
              href="/login" 
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
