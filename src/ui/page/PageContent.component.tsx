import * as React from 'react';

import { IconBarrierBlock } from '@tabler/icons-react';

import { Loader } from '../../indexUI.ts';

import { PageEmpty } from './PageEmpty.component.tsx';

type PageContentProps = {
  data?: React.ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
};

export function PageContent({
  data,
  isLoading = false,
  isEmpty = false,
}: PageContentProps) {
  if (isLoading) {
    return <Loader page />;
  }

  if (isEmpty) {
    return (
      <PageEmpty
        icon={IconBarrierBlock}
        text="Нет данных для отображения"
      />
    );
  }

  return data;
}
