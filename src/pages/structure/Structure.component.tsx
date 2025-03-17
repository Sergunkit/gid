import { useParams } from 'react-router';

// import type { GenericError } from '@/api';
// import { useStructure } from '@/api';
// import { useStructuresTree } from '@/api';
// import { Page } from '@/ui';

// import { StructureElement } from './Structure.element';
// import { StructureTree } from './Structure.tree';

import './Structure.styles.css';

/**
 * Компонент `Structure` отображает страницу структуры компании.
 */
export function Structure({ type = 'functional' }: { type: string }) {
  const { id = '' } = useParams();
  const { data, isLoading, error } = useStructure(id);
  const isFunctional = type === 'functional';
  const title = `${isFunctional ? 'Функциональная' : 'Проектная'} структура`;
  const {
    data: tree,
    isLoading: isTreeLoading,
    error: treeError,
  } = useStructuresTree(type);

  return (
    <Page
      title={title}
      isLoading={isTreeLoading}
      isEmpty={!tree?.data.length}
      error={(error ?? treeError) as GenericError}
    >
      <div className="structure">
        <div className="structure-tree">
          <StructureTree
            data={tree?.data}
            type={type}
            isLoading={isTreeLoading || !!treeError}
          />
        </div>
        <div className="structure-content">
          <StructureElement
            data={data?.data}
            isLoading={isLoading || !!error}
          />
        </div>
      </div>
    </Page>
  );
}
