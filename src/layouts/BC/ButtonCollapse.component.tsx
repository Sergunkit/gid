import { useState } from 'react';
import  { Collapse }  from '../../index.ts';
import { ChildrenComponent } from '../../index.ts';
import { Button } from '../../index.ts';
// import { BaseLayout } from "@/layouts";


const ButtonCollapse: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <div style={{ padding: '20px' }}>
      <Button onClick={toggleCollapse}>
        {isOpen ? 'Скрыть содержимое' : 'Показать содержимое'}
      </Button>
      <Collapse opened={isOpen} timeout={200}>
        <ChildrenComponent />
      </Collapse>
    </div>
  );
};

export  { ButtonCollapse };
