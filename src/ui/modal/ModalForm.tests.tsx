import { render, screen } from '@testing-library/react';

import { ModalForm } from './ModalForm.component';

describe('UI/Modal/ModalForm', () => {
  it('Отображает компонент ModalForm', () => {
    const contentText = 'Содержимое контейнера модальной формы';

    render(<ModalForm>{contentText}</ModalForm>);
    const content = screen.getByText(contentText);
    const modalForm = document.querySelector('.modal-form');
    const { gap } = getComputedStyle(modalForm!);

    expect(content).toBeInTheDocument();
    expect(modalForm).toBeInTheDocument();
    expect(gap).toBe('12px');
  });
});
