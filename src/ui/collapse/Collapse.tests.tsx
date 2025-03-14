import { render, screen } from '@testing-library/react';

import { Collapse } from '@/ui';

import '@testing-library/jest-dom';

describe('Collapse Component', () => {
  it('renders children when open', () => {
    render(
      <Collapse in={true}>
        <div data-testid="child">Content</div>
      </Collapse>,
    );

    const child = screen.getByTestId('child');

    expect(child).toBeVisible();
  });

  it('does not render children when closed', () => {
    render(
      <Collapse in={false}>
        <div data-testid="child">Content</div>
      </Collapse>,
    );

    const child = screen.queryByTestId('child');

    expect(child).not.toBeVisible();
  });

  it('applies correct styles when open', () => {
    render(
      <Collapse in={true}>
        <div data-testid="child">Content</div>
      </Collapse>,
    );

    const collapseElement = screen.getByText('Content').parentElement;

    expect(collapseElement).toHaveStyle('opacity: 1');
    expect(collapseElement).not.toHaveStyle('display: none');
  });

  it('applies correct styles when closed', () => {
    render(
      <Collapse in={false}>
        <div data-testid="child">Content</div>
      </Collapse>,
    );

    const collapseElement = screen.getByText('Content').parentElement;

    expect(collapseElement).toHaveStyle('opacity: 0');
    expect(collapseElement).toHaveStyle('display: none');
  });
});
