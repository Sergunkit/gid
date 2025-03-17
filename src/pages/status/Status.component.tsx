import * as React from 'react';

// import { useLocation, useNavigate, useRouteError } from 'react-router';

// import { Badge, Button, Loader, Page } from '@/ui';

// import { getStatusData } from './Status.utils';

// import './Status.styles.css';

/**
 * Компонент `Status` отображает страницу с базовой информацией об ошибке,
 * включая код ошибки, заголовок и описание.
 */
export function Status() {
  const location = useLocation();
  const navigate = useNavigate();
  const error = useRouteError();
  const code: number | undefined = location.state?.code;
  const { color, title, description } = getStatusData(code);
  const back = {
    title: 'На главную',
    href: '/',
  };

  function handleNavigate() {
    if (code === 401 || code === 403) {
      window.location.replace('/auth');
    } else if (!error) {
      navigate('/', { viewTransition: true });
    }
  }

  React.useLayoutEffect(() => {
    if (!code) {
      navigate('/');
    }
  }, [location]);

  if (!code) {
    return <Loader page />;
  }

  return (
    <div className="page main">
      <Page
        title={`${code?.toString() ?? '404'} ошибка`}
        back={back}
      >
        <div className="status-page">
          <Badge
            variant={color}
            title={code?.toString() ?? '404'}
            size="large"
          />
          <div className="status-page-title">{title}</div>
          <div className="status-page-description">{description}</div>
          <Button
            variant="filled"
            onClick={handleNavigate}
          >
            На главную
          </Button>
        </div>
      </Page>
    </div>
  );
}
