import * as React from 'react';

import { Outlet } from 'react-router';

// import {  } from '@/auth';
// import { LoaduseAuther } from '@/ui';

import { Header } from './components/index.ts';
import { Navigation } from './components/index.ts';

import './BaseLayout.style.css';

/**
 * Корневой компонент, отображающий основной макет приложения.
 */
export function BaseLayout() {
  const [opened, setOpened] = React.useState(false);
  // const navigate = useNavigate();
  // const { isAuthenticated, isLoading } = useAuth();

  // React.useEffect(() => {
  //   if (!isAuthenticated && !isLoading) {
  //     navigate('/auth', { viewTransition: true });
  //   }
  // }, [isAuthenticated, isLoading]);

  // if (isLoading || !isAuthenticated) {
  //   return <Loader page />;
  // }

  return (
    <div className="layout">
      <Navigation
        opened={opened}
        onToggle={setOpened}
      />
      <main className="main">
        <article className="page">
          <div className="page-header-right">
            <Header
              opened={opened}
              onToggle={setOpened}
            />
          </div>
          <Outlet />
        </article>
      </main>
    </div>
  );
}
