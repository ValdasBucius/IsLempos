import React from 'react';

export default function Container({ children }) {
  return <div className="font-roboto w-full min-h-screen bg-zinc-900 text-stone-300">{children}</div>;
}
