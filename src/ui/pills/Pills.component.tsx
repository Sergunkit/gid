import * as React from 'react';

import { IconX } from '@tabler/icons-react';

import type { Pill } from '../../indexUI.ts';
import { getUniqueItemsById } from '../../indexUtils.ts';

import './Pills.styles.css';

type PillsProps = {
  value: Pill[];
  maximum?: number;
  editable?: boolean;
  onChange?: (data: Pill[]) => void;
};

/**
 * Компонент `Pills` отображает список текстовых меток
 * с возможностью добавления и удаления меток.
 *
 * @param editable - Возможность редактирования списка меток.
 * @param maximum - Максимальное количество отображаемых меток.
 * @param value - Массив меток.
 * @param onChange - Функция обработки события изменения значения.
 */
export function Pills({
  editable = false,
  maximum,
  value,
  onChange,
}: PillsProps) {
  const [items, setItems] = React.useState<Pill[]>(value);
  const visibleTags = maximum ? items.slice(0, maximum) : items;
  const tags = getUniqueItemsById<Pill>(visibleTags);

  function handleRemove(id: number) {
    const result = items.filter(item => item.id !== id);

    onChange?.(result);
    setItems(result);
  }

  function handleAdd(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const value = event.currentTarget.value;

      if (value.length < 2) {
        return;
      }

      const result = items.concat([
        {
          id: items.length,
          name: value,
        },
      ]);

      onChange?.(result);
      setItems(result);
      event.currentTarget.value = '';
    }
  }

  return (
    <div className="pill-group">
      {tags.map(item => (
        <div
          key={item.id}
          className="pill"
        >
          <span className="pill-text">{item.name}</span>
          {editable && (
            <button
              className="pill-remove"
              onClick={() => handleRemove(item.id)}
            >
              <IconX
                size={12}
                stroke={1.5}
              />
            </button>
          )}
        </div>
      ))}
      {maximum && !editable && items.length > maximum && (
        <div className="pill">
          <span className="pill-text">+{items.length - maximum}</span>
        </div>
      )}
      {editable && (
        <input
          type="text"
          className="pill-input"
          placeholder="Добавить"
          spellCheck="false"
          onKeyDown={handleAdd}
        />
      )}
    </div>
  );
}
