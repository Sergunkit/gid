import * as React from 'react';

import { NavLink } from 'react-router';

// import logo from '../../../../assets/logo.png';
import { Collapse } from '../../../../indexUI.ts';

import { isActiveLink } from './Link.utils.ts';

import './Link.styles.css';

type LinkProps = {
  text: string;
  href?: string;
  icon?: React.ReactNode;
  current?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function Link({
  children,
  current,
  href = '',
  icon,
  onClick,
  text,
}: LinkProps) {
  const [opened, setOpened] = React.useState(false);
  const active = isActiveLink(href, current);
  const withChildren = !!children;

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!href || withChildren) {
      event.preventDefault();
    }

    onClick?.(event);

    if (withChildren) {
      setOpened(value => !value);
    }
  }

  return (
    <>
      <NavLink
        className={`link-item${active ? ' active' : ''}`}
        to={href}
        viewTransition
        onClick={handleClick}
      >
        {icon && <span className="link-icon">{icon}</span>}
        <span className="link-text">{text}</span>
        {withChildren && (
          <span
            className="link-chevron"
            style={{ transform: `rotate(${opened ? 0 : -90}deg)` }}
          >
            {/* <AccordionChevron /> */}
          </span>
        )}
      </NavLink>
      {withChildren && (
        <Collapse in={opened}>
          <span className="link-children">{children}</span>
        </Collapse>
      )}
    </>
  );
}
