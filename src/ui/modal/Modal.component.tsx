import * as React from 'react';

import * as ReactDOM from 'react-dom';
import { IconX } from '@tabler/icons-react';

import { ModalFooter } from './ModalFooter.component';
import { ModalForm } from './ModalForm.component';

import './Modal.styles.css';

type ModalProps = {
  opened?: boolean;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  onOpened?: () => void;
  onClosed?: () => void;
};

/**
 * Компонент `Modal` отображает модальное окно.
 *
 * @param opened - Флаг открытия модального окна.
 * @param title - Заголовок модального окна.
 * @param children - Содержимое модального окна.
 * @param onClose - Обработчик закрытия модального окна.
 * @param onOpened - Обработчик завершения открытия модального окна.
 * @param onClosed - Обработчик завершения закрытия модального окна.
 */
export function Modal({
  opened,
  title,
  children,
  onClose,
  onOpened,
  onClosed,
}: ModalProps) {
  const id = React.useId();

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (opened && event.key === 'Escape') {
      onClose?.();
    }
  }

  function handleTransitionEnd() {
    if (opened) {
      onOpened?.();
    } else {
      onClosed?.();
    }
  }

  return ReactDOM.createPortal(
    <div
      data-portal="true"
      onKeyDown={handleKeyDown}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className={`modal${opened ? ' opened' : ''}`}
        tabIndex={-1}
      >
        <div
          className="modal-overlay"
          onClick={onClose}
        />
        <div className="modal-inner">
          <section
            role="dialog"
            className="modal-content"
            tabIndex={-1}
          >
            <header className="modal-header">
              {title && <div className="modal-title">{title}</div>}
              <button
                className="modal-close"
                onClick={onClose}
              >
                <IconX size={20} />
              </button>
            </header>
            <div className="modal-body">{children}</div>
          </section>
        </div>
      </div>
    </div>,
    document.body,
    id,
  );
}

Modal.Footer = ModalFooter;
Modal.Form = ModalForm;
