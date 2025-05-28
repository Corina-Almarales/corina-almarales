'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <h1>¡Ups! Algo salió mal.</h1>
        <p>{error.message}</p>
        <button onClick={reset}>Reintentar</button>
      </body>
    </html>
  );
}
