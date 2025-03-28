import * as React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useClickOutside } from '@/hooks';

type UseClickOutsideProps = {
  handler: () => void;
  events?: string[] | null;
  nodes?: (HTMLElement | null)[];
};

function Target({ handler, events, nodes }: UseClickOutsideProps) {
  const ref = useClickOutside<HTMLDivElement>(handler, events, nodes);

  return (
    <div
      ref={ref}
      data-testid="target"
    />
  );
}

describe('hooks/use-click-outside', () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  it('calls `handler` function when clicked outside target (no `events` given)', async () => {
    const handler = vi.fn();

    render(
      <>
        <Target handler={handler} />
        <div data-testid="outside-target" />
      </>,
    );

    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');

    expect(handler).toHaveBeenCalledTimes(0);

    await userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(0);

    await userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(1);

    await userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(2);

    await userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('calls `handler` only on given `events`', async () => {
    const handler = vi.fn();
    const events = ['keydown'];

    render(
      <>
        <Target
          handler={handler}
          events={events}
        />
        <div data-testid="outside-target" />
      </>,
    );

    const target = screen.getByTestId('target');
    const outsideTarget = screen.getByTestId('outside-target');

    await userEvent.click(target);
    await userEvent.click(outsideTarget);
    expect(handler).toHaveBeenCalledTimes(0);

    await userEvent.type(target, '{enter}');
    await userEvent.type(outsideTarget, '{enter}');
    expect(handler).toHaveBeenCalledTimes(2);
  });

  it('ignores clicks outside the given `nodes`', async () => {
    const handler = vi.fn();

    function Wrapper() {
      const [ignore, setIgnore] = React.useState<HTMLDivElement | null>(null);

      return (
        <>
          <Target
            handler={handler}
            nodes={[ignore]}
          />
          <div
            ref={setIgnore}
            data-testid="ignore-clicks"
          />
        </>
      );
    }

    render(
      <div>
        <Wrapper />
      </div>,
    );

    const ignoreClicks = screen.getByTestId('ignore-clicks');

    await userEvent.click(ignoreClicks);
    expect(handler).toHaveBeenCalledTimes(0);

    const target = screen.getByTestId('target');

    await userEvent.click(target);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
