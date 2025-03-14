import * as React from 'react';

export type TabItem = {
  id: string;
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
};
