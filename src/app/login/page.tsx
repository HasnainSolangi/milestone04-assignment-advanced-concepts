// src/app/login/page.tsx
'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);  // State to handle error messages
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Attempt to sign in using next-auth credentials provider
    const result = await signIn('credentials', {
      redirect: false,
      username,
      password
    });

    if (result?.error) {
      // Set the error state to show the error message when login fails
      setError('Invalid username or password');
    } else {
      // Redirect to dashboard on successful login
      setError(null);  // Clear any previous error
      router.push('/dashboard');
    }
  };

  const handleGithubLogin = () => {
    signIn('github', { callbackUrl: '/dashboard' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {/* Display error message */}
          {error && <div className="text-red-500 text-center mb-4">{error}</div>}
          
          <input 
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <div className="text-center">
          <button 
            onClick={handleGithubLogin}
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800"
          >
            Sign In with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
