import React from 'react';

interface TraceProps {
  name: string;
  children: React.ReactNode;
}

export default function Trace({ name, children }: TraceProps) {
  console.log("Render route:", name);
  return <>{children}</>;
}