import * as React from 'react';

import type { Icon, IconProps } from '@tabler/icons-react';

import './Parameter.styles.css';

type ParameterProps = {
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  children: React.ReactNode;
};

export function Parameter({ icon: Icon, children }: ParameterProps) {
  return (
    <span className="parameter">
      <span className="parameter-icon">
        <Icon
          size={20}
          stroke={1.75}
        />
      </span>
      <span className="parameter-text">{children}</span>
    </span>
  );
}
