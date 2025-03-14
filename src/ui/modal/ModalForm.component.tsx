import * as React from 'react';

import './ModalForm.styles.css';

type ModalFooterProps = {
  gap?: number;
  children: React.ReactNode;
};

/**
 * Компонент `ModalForm` отображает форму в модальном окне.
 *
 * @param gap - Расстояние между элементами формы.
 * @param children - Содержимое формы.
 */
export function ModalForm({ gap = 12, children }: ModalFooterProps) {
  return (
    <div
      className="modal-form"
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
}
