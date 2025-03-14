import { render, screen } from '@testing-library/react';

import { PagePanel } from './PagePanel.component';

describe('UI/Page/PagePanel', () => {
  it('Отображает компонент PagePanel', () => {
    const contentText = 'Содержимое дополнительной панели страницы';

    render(<PagePanel>{contentText}</PagePanel>);
    const content = screen.getByText(contentText);
    const panel = document.querySelector('.page-panel');
    const { gap } = getComputedStyle(panel!);

    expect(content).toBeInTheDocument();
    expect(panel).toBeInTheDocument();
    expect(gap).toBe('12px');
  });
});
