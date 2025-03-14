import { useState } from 'react';
import  { Collapse }  from '../../indexLC.ts';
import { ChildrenComponent } from '../../indexLC.ts';
import { Button } from '../../indexLC.ts';
// import { BaseLayout } from "@/layouts";


const ButtonCollapse: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
