import * as React from 'react';

type CardContentProps = {
  className?: string;
  children: React.ReactNode;
};

export function CardContent({ className, children }: CardContentProps) {
  return (
    <div className={`card-content${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  );
}
