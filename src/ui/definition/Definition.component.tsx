import * as React from 'react';

import './Definition.styles.css';

type DefinitionProps = {
  label: React.ReactNode;
  value: React.ReactNode;
};

/**
 * Компонент `Definition` отображает элемент списка описаний
 * в виде названия термина и его описания.
 *
 * @param label - Название термина.
 * @param value - Описание термина.
 */
export function Definition({ label, value }: DefinitionProps) {
  return (
    <div className="definition">
      <div className="definition-label">{label}</div>
      <div className="definition-value">{value}</div>
    </div>
  );
}
