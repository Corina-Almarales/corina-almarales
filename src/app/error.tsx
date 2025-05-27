'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>¡Algo salió mal!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Intentar de nuevo</button>
      </body>
    </html>
  );
}
