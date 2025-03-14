import * as React from 'react';

import { Link, useNavigate } from 'react-router';
import { IconChevronLeft } from '@tabler/icons-react';

// import type { GenericError } from '@/api';

import { PageContent } from './PageContent.component.tsx';
import { PageEmpty } from './PageEmpty.component.tsx';
import { PagePanel } from './PagePanel.component.tsx';

import './Page.styles.css';

type PageProps = {
  title: string;
  seoTitle?: string;
  panel?: React.ReactNode;
  children?: React.ReactNode;
  back?: {
    title: string;
    href: string;
  };
  isEmpty?: boolean;
  isLoading?: boolean;
  error?: Error | null;
};

/**
 * Компонент `Page` отображает базовую структуру страницы
 * приложения с заголовком и содержимым.
 *
 * @param title - Название страницы.
 * @param seoTitle - SEO-заголовок страницы.
 * @param back - Навигация на предыдущую страницу.
 * @param isEmpty - Флаг отсутствия данных.
 * @param isLoading - Флаг загрузки данных.
 * @param error - Ошибка в загрузке данных.
 * @param panel - Панель фильтров страницы.
 * @param children - Содержимое страницы.
 */
export function Page({
  title,
  seoTitle,
  back,
  isEmpty,
  isLoading,
  error,
  panel,
  children,
}: PageProps) {
  const navigate = useNavigate();
  const pageTitle = `${seoTitle ?? title} :: ГИД.Люди`;

  React.useEffect(() => {
    if (!error) return;

    const code = error.error_code;
    const params = {
      state: { code },
      viewTransition: true,
      replace: true,
    };

    if (code === 401 || code === 403) {
      window.location.replace('/auth');
    } else {
      navigate('/error', params);
    }
  }, [error]);

  return (
    <>
      <title>{pageTitle}</title>
      <div className="page-header-left">
        {back && (
          <Link
            className="page-header-back"
            to={back.href}
          >
            <IconChevronLeft
              size={20}
              stroke={1.5}
            />
            <span>{back.title}</span>
          </Link>
        )}
        <h1 className="page-header-title">{title}</h1>
      </div>
      <div className="page-content">
        {panel}
        <PageContent
          data={children}
          isLoading={isLoading}
          isEmpty={isEmpty}
        />
      </div>
    </>
  );
}

Page.Empty = PageEmpty;
Page.Panel = PagePanel;
