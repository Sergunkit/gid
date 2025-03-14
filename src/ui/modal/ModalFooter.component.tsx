import * as React from 'react';

import './ModalFooter.styles.css';

type ModalFooterProps = {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
};

/**
 * Компонент `ModalFooter` отображает подвал модального окна.
 *
 * @param align - Выравнивание содержимого подвала.
 * @param children - Содержимое подвала.
 */
export function ModalFooter({ align = 'right', children }: ModalFooterProps) {
  return <div className={`modal-footer align-${align}`}>{children}</div>;
}
