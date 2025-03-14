import * as React from 'react';

import './Burger.styles.css';

type BurgerProps = {
  label?: string;
  defaultOpened?: boolean;
  onClick?: (value: boolean) => void;
};

/**
 * Компонент `Burger` отображает кнопку вызова выпадающего меню,
 * в виде крестика или иконки "бургер".
 *
 * @param onClick - Обработчик нажатия кнопки.
 * @param defaultOpened - Начальное состояние кнопки.
 * @param label - Текстовое описание кнопки.
 */
export function Burger({
  onClick,
  defaultOpened = false,
  label = 'Открыть меню',
}: BurgerProps) {
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [opened, setOpened] = React.useState<boolean>(defaultOpened);

  const handleClick = () => {
    setOpened(!opened);
    onClick?.(!opened);
  };

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  React.useEffect(() => {
    if (loaded) {
      setOpened(defaultOpened);
    }
  }, [defaultOpened]);

  return (
    <button
      type="button"
      className="burger"
      aria-label={label}
      onClick={handleClick}
    >
      <span
        className="burger-icon"
        data-opened={opened || undefined}
      />
    </button>
  );
}
