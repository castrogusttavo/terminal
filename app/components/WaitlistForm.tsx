'use client';

import { useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Erro ao enviar o e-mail:', errorData.error);
        return;
      }

      const data = await response.json();
      console.log('E-mail enviado com sucesso:', data);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <form
      className='flex flex-col md:flex-row gap-2.5 mt-4'
      onSubmit={handleSubmit}
    >
      <input
        className='border border-borders text-base py-3 px-4 bg-card rounded-sm transition-all duration-200 placeholder:text-accent outline-none focus:border-accent focus:ring-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,0.1)]'
        type='email'
        id='email'
        required
        placeholder='alan.turing@code.com'
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className='bg-card border border-borders text-white pointer text-base py-2 px-4 text-center transition-all duration-200 rounded-sm font-medium hover:bg-hover hover:border-accent'
        type='submit'
      >
        Enviar link
      </button>
    </form>
  );
}
