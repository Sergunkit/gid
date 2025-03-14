import * as React from 'react';

import { Icon, IconProps } from '@tabler/icons-react';

export type MenuEntry = {
  url: string;
  title: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
};
