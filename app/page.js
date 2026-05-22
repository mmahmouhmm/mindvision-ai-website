'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message) return;

    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data.reply);
    } catch (error) {
      setResponse('Something went wrong.');
    }

    setLoading(false);
  }

  return (
    <main className="container">
      <div className="hero">

