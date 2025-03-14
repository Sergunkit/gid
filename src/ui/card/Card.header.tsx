import * as React from 'react';

import { Link } from 'react-router';

import './Card.header.css';

type CardHeaderProps = {
  size?: 'sm' | 'md';
  title: string;
  subtitle?: string;
  additional?: React.ReactNode;
  url?: string;
  state?: Record<string, unknown>;
};

export function CardHeader({
  size = 'md',
  title,
  subtitle,
  additional,
  url,
  state,
}: CardHeaderProps) {
  const className = `card-header card-header-${size}`;
  const content = (
    <>
      <span className="card-header-left">
        <span className="card-title">{title}</span>
        {subtitle && <span className="card-subtitle">{subtitle}</span>}
      </span>
      {additional && (
        <span className="card-header-right">
          <span className="card-additional">{additional}</span>
        </span>
      )}
    </>
  );

  if (url) {
    return (
      <Link
        className={className}
        to={url}
        state={state}
      >
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
}
