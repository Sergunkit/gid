import * as React from 'react';

import { useNavigate } from 'react-router';

import { useAuth } from '@/auth';
import { Button, Loader } from '@/ui';

import './Welcome.style.css';
import logo from '@/assets/logo.png';
import bg from '@/assets/welcome.jpg';

/**
 * Компонент `Welcome` отображает страницу входа в приложение.
 */
export function Welcome() {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, login } = useAuth();

  React.useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate('/');
    }
  }, [isAuthenticated, isLoading]);

  function handleLogin() {
    login({ redirectUri: window.location.origin });
  }

  if (isLoading || isAuthenticated) {
    return <Loader page />;
  }

  return (
    <div className="welcome">
      <title>Добро пожаловать! :: ГИД.Люди</title>
      <div className="welcome-container">
        <div className="welcome-content">
          <img
            className="welcome-logo"
            src={logo}
            alt="ГИД.Люди"
            loading="lazy"
          />
          <div className="welcome-heading">
            ГИД.Люди – цифровая среда для сотрудников и руководителей для
            автоматизации HR-процессов и документооборота.
          </div>
          <div className="welcome-text">
            Уникальная разработка с более 1 млн пользователей
          </div>
          <Button onClick={handleLogin}>Войти</Button>
        </div>
        <img
          className="welcome-bg"
          src={bg}
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  );
}
