// src/app/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Example validation (Replace with actual authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  }
  
  res.status(405).json({ error: 'Method Not Allowed' });
}
