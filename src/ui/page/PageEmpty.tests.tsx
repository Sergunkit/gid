import { IconUsers } from '@tabler/icons-react';
import { render, screen } from '@testing-library/react';

import { PageEmpty } from './PageEmpty.component';

describe('UI/Page/PagePanel', () => {
  it('Отображает компонент PagePanel', () => {
    const text = 'Текст тестового сообщения';
    const childrenText = 'Дополнительное содержимое';
    const children = <div>Дополнительное содержимое</div>;
    const { container } = render(
      <PageEmpty
        icon={IconUsers}
        text={text}
      >
        {children}
      </PageEmpty>,
    );
    const textElement = screen.getByText(text);
    const childrenTextElement = screen.getByText(childrenText);
    const iconElement = container.querySelector('.tabler-icon-users')!;

    expect(textElement).toBeInTheDocument();
    expect(childrenTextElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
