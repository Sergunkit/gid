import * as React from 'react';

import { useLocation } from 'react-router';
import { IconHierarchy2 } from '@tabler/icons-react';
import { IconLogout } from '@tabler/icons-react';
import { IconUsers } from '@tabler/icons-react';

// import { useAuth } from '@/auth';
import { useDisclosure } from '../../../../indexHooks.ts';
import { Button, Modal } from '../../../../indexUI.ts';

import { Link } from '../link/Link.component.tsx';
import { Logo } from '../logo/Logo.component.tsx';

import './Navigation.styles.css';

type NavigationProps = {
  opened: boolean;
  onToggle: (value: boolean) => void;
};

export function Navigation({ opened, onToggle }: NavigationProps) {
  const { pathname } = useLocation();
  const logout = () => {};
  const [modalOpened, { open, close }] = useDisclosure(false);

  function handleKeyDown(event: { key: string }) {
    if (opened && event.key === 'Escape') {
      onToggle(!opened);
    }
  }

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    document.addEventListener('keydown', handleKeyDown, { signal });

    return () => {
      controller.abort();
    };
  }, [opened]);

  React.useEffect(() => {
    onToggle(false);
  }, [pathname]);

  return (
    <header
      className={`navigation${opened ? ' opened' : ''}`}
      onKeyDown={handleKeyDown}
    >
      <div className="navigation-list">
        <Logo />
        <nav className="navigation-top">
          <Link
            href="/employees"
            text="Сотрудники"
            icon={<IconUsers />}
            current={pathname}
          />
          <Link
            href="/structure"
            text="Структура"
            icon={<IconHierarchy2 />}
            current={pathname}
          >
            <Link
              href="/structure-projects"
              text="Проектная"
              current={pathname}
            />
            <Link
              href="/structure-functional"
              text="Функциональная"
              current={pathname}
            />
          </Link>
        </nav>
        <div className="navigation-bottom">
          <button
            className="navigation-item"
            onClick={open}
          >
            <IconLogout className="navigation-item-icon" />
            <span className="navigation-item-text">Выход</span>
          </button>
          <Modal
            opened={modalOpened}
            title="Выход из приложения"
            onClose={close}
          >
            <p>Вы действительно хотите выйти из приложения?</p>
            <Modal.Footer>
              <Button
                variant="default"
                onClick={close}
              >
                Отмена
              </Button>
              <Button
                variant="light"
                color="red"
                onClick={logout}
              >
                Выйти
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </header>
  );
}
