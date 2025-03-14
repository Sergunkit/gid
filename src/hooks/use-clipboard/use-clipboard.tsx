import * as React from 'react';

const isNavigatorAvailable = typeof navigator !== 'undefined';
const isClipboardAvailable = typeof navigator.clipboard !== 'undefined';
const isClipboardSupported = isNavigatorAvailable && isClipboardAvailable;

/**
 * Предоставляет функциональность для копирования текстовых данных
 * в буфер обмена, возвращая состояние результата операции.
 */
export function useClipboard(timeout = 2000) {
  const [error, setError] = React.useState<Error | null>(null);
  const [copied, setCopied] = React.useState(false);
  const [copyTimeout, setCopyTimeout] = React.useState<number | null>(null);

  function handleCopyResult(value: boolean) {
    window.clearTimeout(copyTimeout!);
    setCopyTimeout(window.setTimeout(() => setCopied(!value), timeout));
  }

  async function copy(value: string) {
    const text = value.trim();

    try {
      if (!isClipboardSupported || !text) {
        setCopied(false);
        await Promise.reject(new Error('Не удалось скопировать текст'));
      }

      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);
    } catch (error) {
      setCopied(false);
      setError(error as Error);
    }
  }

  function reset() {
    setCopied(false);
    setError(null);
    window.clearTimeout(copyTimeout!);
  }

  React.useEffect(() => {
    if (copied) {
      handleCopyResult(copied);
    }
  }, [copied]);

  return {
    copy,
    reset,
    copied,
    error,
  };
}
