import * as React from 'react';

import { Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

type ClearableInputProps = {
  placeholder?: string;
  value?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (value: string) => void;
};

/**
 * Отображает поле ввода с возможностью очистки значения.
 *
 * @param placeholder - Текст-заполнитель поля.
 * @param initialValue - Начальное значение.
 * @param onKeyDown - Обработчик события нажатия клавиши.
 * @param onChange - Обработчик события изменения значения.
 */
export function ClearableInput({
  placeholder,
  value: initialValue,
  onKeyDown,
  onChange,
}: ClearableInputProps) {
  const [value, setValue] = React.useState<string>(initialValue ?? '');
  const Clear = Input.ClearButton;
  const rightSection = value !== '' && <Clear onClick={() => handleChange()} />;

  function handleChange(event?: React.ChangeEvent<HTMLInputElement>) {
    const value = event?.currentTarget.value ?? '';

    setValue(value);
    onChange?.(value);
  }

  return (
    <Input
      value={value}
      placeholder={placeholder}
      leftSectionPointerEvents="none"
      leftSection={<IconSearch size={16} />}
      rightSection={rightSection}
      rightSectionPointerEvents="auto"
      onKeyDown={onKeyDown}
      onChange={handleChange}
    />
  );
}
