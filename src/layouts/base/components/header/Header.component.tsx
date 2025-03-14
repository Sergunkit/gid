import { Link } from 'react-router';

// import { useAuth } from '@/auth';
import { Avatar, Burger, Input, NotificationPanel } from '../../../../indexUI.ts';
import { getFullName, User } from '../../../../indexUtils.ts';


import './Header.styles.css';

type HeaderProps = {
  opened: boolean;
  onToggle: (value: boolean) => void;
};

export function Header({ opened, onToggle }: HeaderProps) {
  // const { user } = useAuth();
  const name = getFullName(User[1]);
  const enableSearch = false;

  return (
    <div className="header">
      {enableSearch && (
        <div className="header-search">
          <Input placeholder="Поиск" />
        </div>
      )}
      <div className="header-notification">
        <NotificationPanel items={[]} />
      </div>
      <div className="header-avatar">
        <Link to="/profile">
          <Avatar
            src={User[1]?.avatar}
            name={name}
          />
        </Link>
      </div>
      <div className="header-toggle">
        <Burger
          defaultOpened={opened}
          onClick={onToggle}
        />
      </div>
    </div>
  );
}
