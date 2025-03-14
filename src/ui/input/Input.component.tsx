import './Input.styles.css';

type InputProps = {
  name?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
  width?: number;
};

/**
 * Компонент `Input` позволяет вводить текст в поле ввода,
 * вызывая обработчик события при изменении значения.
 *
 * @param name - Имя поля.
 * @param width - Ширина поля.
 * @param value - Значение поля.
 * @param placeholder - Заполнитель поля.
 * @param onChange - Обработчик события изменения значения.
 *
 */
export function Input({
  name,
  width,
  onChange,
  placeholder,
  value,
}: InputProps) {
  return (
    <div className="form-input-wrapper">
      <input
        type="text"
        className="form-input"
        name={name}
        placeholder={placeholder}
        value={value}
        style={{ width: width ? `${width}px` : '100%' }}
        onChange={event => onChange?.(event.target.value)}
      />
    </div>
  );
}
