import { hiddenStyles, styleKeys } from './Textarea.constants';

type SizingProps = Extract<
  (typeof styleKeys)[number],
  keyof CSSStyleDeclaration
>;
type SizingStyle = Pick<CSSStyleDeclaration, SizingProps>;

export type SizingData = {
  styles: SizingStyle;
  padding: number;
  border: number;
};

let hiddenTextarea: HTMLTextAreaElement | null = null;

const getSizingData = (node: HTMLElement): SizingData => {
  const style = window.getComputedStyle(node);
  const styles = Object.fromEntries(
    styleKeys.map(key => [key, style[key]]),
  ) as Pick<CSSStyleDeclaration, SizingProps>;

  const paddingBottom = parseFloat(styles.paddingBottom);
  const paddingTop = parseFloat(styles.paddingTop);
  const borderBottom = parseFloat(styles.borderBottomWidth);
  const borderTop = parseFloat(styles.borderTopWidth);

  return {
    styles,
    padding: paddingBottom + paddingTop,
    border: borderBottom + borderTop,
  };
};

const forceHiddenStyles = (node: HTMLElement) => {
  Object.keys(hiddenStyles).forEach(key => {
    node.style.setProperty(
      key,
      hiddenStyles[key as keyof typeof hiddenStyles],
      'important',
    );
  });
};

const getHeight = (node: HTMLElement, borders: number): number => {
  return node.scrollHeight + borders;
};

export function calculateHeight(
  node: HTMLTextAreaElement,
  minRows: number,
  maxRows: number,
): number {
  const { styles, padding, border } = getSizingData(node);
  const value = node.value || 'x';

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tabindex', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    forceHiddenStyles(hiddenTextarea);
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  }

  Object.keys(styles).forEach(_key => {
    const key = _key as keyof typeof styles;

    hiddenTextarea!.style[key] = styles[key] as any;
  });

  // forceHiddenStyles(hiddenTextarea);

  hiddenTextarea.value = value;
  let height = getHeight(hiddenTextarea, border);

  // Double set and calc due to Firefox bug:
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1795904
  hiddenTextarea.value = value;
  height = getHeight(hiddenTextarea, border);

  // measure height of a textarea with a single row
  hiddenTextarea.value = 'x';
  const rowHeight = hiddenTextarea.scrollHeight - padding;

  let minHeight = rowHeight * minRows;

  minHeight = minHeight + padding + border;
  height = Math.max(minHeight, height);

  let maxHeight = rowHeight * maxRows;

  maxHeight = maxHeight + padding + border;
  height = Math.min(maxHeight, height);

  return height;
}
