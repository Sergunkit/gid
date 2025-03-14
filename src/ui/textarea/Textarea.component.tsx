import * as React from 'react';

import { IconCheck, IconX } from '@tabler/icons-react';

import { useClickOutside } from '../../indexHooks.ts';
import { Loader } from '../../indexUI.ts';

import { calculateHeight } from './Textarea.utils.ts';

import './Textarea.styles.css';

type TextareaProps = {
  value?: string;
  placeholder?: string;
  'aria-label'?: string;
  autosize?: boolean;
  minRows?: number;
  maxRows?: number;
  loading?: boolean;
  disabled?: boolean;
  onSubmit?: (value: string) => void;
};

type TextareaRef = {
  focus: () => void;
  blur: () => void;
};

/**
 * Компонент `Textarea` представляет собой текстовое поле
 * для ввода большого количества текста.
 *
 * @param value - Содержимое текстового поля.
 * @param placeholder - Текст-заполнитель текстового поля.
 * @param ariaLabel - Атрибут `aria-label` текстового поля.
 * @param autosize - Динамическая высота текстового поля.
 * @param minRows - Минимальное количество строк текстового поля.
 * @param maxRows - Максимальное количество строк текстового поля.
 * @param loading - Состояние загрузки текстового поля.
 * @param disabled - Блокировка редактирования текста.
 * @param onSubmit - Обработчик отправки содержимого текстового поля.
 * @param ref - Ссылка на DOM-элемент текстового поля.
 */
function TextareaComponent(
  {
    value = '',
    placeholder,
    'aria-label': ariaLabel,
    minRows = 1,
    maxRows = 6,
    autosize = false,
    loading = false,
    disabled = false,
    onSubmit,
  }: TextareaProps,
  ref: React.Ref<TextareaRef>,
) {
  const [controls, setControls] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<string>(value);
  const controlRef = React.useRef<HTMLTextAreaElement | null>(null);
  const heightRef = React.useRef<number>(0);
  const rootRef: React.RefObject<HTMLDivElement | null> = useClickOutside(
    () => {
      setControls(false);
    },
  );
  const minRowHeight = minRows * 20;

  const resizeTextarea = React.useCallback(() => {
    const node = controlRef.current!;
    const height = calculateHeight(node, minRows, maxRows);

    if (!height || !autosize) {
      return;
    }

    if (heightRef.current !== height) {
      heightRef.current = height;
      node.style.setProperty('height', `${height}px`, 'important');
    }
  }, [autosize, maxRows, minRows]);

  const handleResizeListeners = () => {
    if (window) {
      window.addEventListener('resize', resizeTextarea);
    }

    return () => window.removeEventListener('resize', resizeTextarea);
  };

  React.useEffect(() => {
    if (value !== content) {
      setContent(value);
    }
  }, [value]);

  React.useLayoutEffect(resizeTextarea);
  React.useLayoutEffect(handleResizeListeners, [resizeTextarea]);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    resizeTextarea();
    setContent(event.target.value);
  }

  function handleCancel() {
    controlRef.current?.blur();
    setContent(value);
    setControls(false);

    if (controlRef.current) {
      controlRef.current.value = value;
    }
  }

  function handleSubmit() {
    onSubmit?.(content);
    setControls(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Escape') {
      handleCancel();
    }
  }

  React.useImperativeHandle(
    ref,
    () => ({
      focus: () => controlRef.current?.focus(),
      blur: () => controlRef.current?.blur(),
    }),
    [],
  );

  return (
    <div
      ref={rootRef}
      className={`textarea${controls ? ' textarea-focused' : ''}`}
    >
      {loading && (
        <Loader
          size={24}
          page
        />
      )}
      <textarea
        ref={controlRef}
        className="textarea-content"
        style={{ minHeight: `${minRowHeight + 14}px` }}
        defaultValue={content}
        aria-label={ariaLabel}
        placeholder={placeholder}
        rows={minRows}
        disabled={disabled}
        onChange={handleChange}
        onFocus={() => setControls(true)}
        onKeyDown={handleKeyDown}
      />
      {!disabled && (
        <div className="textarea-controls">
          <button
            type="button"
            className="textarea-button"
            onClick={handleCancel}
          >
            <IconX />
          </button>
          <button
            type="submit"
            className="textarea-button"
            onClick={handleSubmit}
          >
            <IconCheck />
          </button>
        </div>
      )}
    </div>
  );
}

export const Textarea = React.forwardRef(TextareaComponent);
Textarea.displayName = 'Textarea';
