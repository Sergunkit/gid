import React, { useState, useEffect, useRef } from 'react';

type CollapseProps = {
  opened: boolean;
  timeout: number;
  children: React.ReactNode;
};

const Collapse: React.FC<CollapseProps> = ({ opened, timeout, children }) => {
  const [maxHeight, setMaxHeight] = useState<number | string>(opened ? 'none' : 0);
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (opened) {
      const contentHeight = el.current?.scrollHeight || 0;
      setMaxHeight(contentHeight);
    } else {
      setMaxHeight(0);
    }
  }, [opened, timeout]);

  return (
    <div
      className="collapse"
      style={{
        overflow: 'hidden',
        maxHeight: maxHeight,
        transition: `max-height ${timeout}ms ease`,
      }}
    >
      <div ref={el}>{children}</div>
    </div>
  );
};

export { Collapse };
