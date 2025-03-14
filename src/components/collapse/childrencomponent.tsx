import React from 'react';

const ChildrenComponent: React.FC = () => {
  return (
    <div
      style={{
        color: 'black',
        padding: '16px',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <h3>Пример содержимого:</h3>
      <ul>
        <li>Элемент списка 1</li>
        <li>Элемент списка 2</li>
        <li>Элемент списка 3</li>
        <li>Элемент списка 4</li>
      </ul>
      <p>
        Это дополнительный текст для проверки работы компонента
        <strong> Collapse</strong>.
      </p>
    </div>
  );
};

export { ChildrenComponent };
