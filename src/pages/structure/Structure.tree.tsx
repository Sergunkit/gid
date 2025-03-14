import { useParams } from 'react-router';

import type { StructureTreeItem } from '@/api';
import { Loader, Tree } from '@/ui';

type StructureTreeProps = {
  data?: StructureTreeItem[];
  type: string;
  isLoading: boolean;
};

/**
 * Компонент `StructureTree` отображает иерархию
 * структуры компании.
 */
export function StructureTree({
  data = [],
  type,
  isLoading,
}: StructureTreeProps) {
  const { id = '' } = useParams();

  if (isLoading) {
    return <Loader page />;
  }

  return (
    <Tree
      url={`/structure-${type}`}
      items={data}
      current={id}
      showCount
    />
  );
}
