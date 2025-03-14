import { Link } from 'react-router';

import './Logo.style.css';
import logo from '../../../../assets/logo.png';

/**
 * Отображает логотип приложения в виде статичного блока.
 */
export function Logo() {
  return (
    <div className="logo">
      <Link
        className="logo-link"
        to="/"
      >
        <img
          role="banner"
          className="logo-image"
          src={logo}
          alt="ГИД.Люди"
          loading="lazy"
        />
      </Link>
    </div>
  );
}
