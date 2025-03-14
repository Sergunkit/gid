import { render, screen } from '@testing-library/react';

import { ModalFooter } from './ModalFooter.component';

describe('UI/Modal/ModalFooter', () => {
  it('Отображает компонент ModalFooter', () => {
    const contentText = 'Содержимое подвала модального окна';

    render(<ModalFooter>{contentText}</ModalFooter>);
    const content = screen.getByText(contentText);
    const modal = document.querySelector('.modal-footer');

    expect(content).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('align-right');
  });
});
