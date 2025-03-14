// import React, { useState } from "react";
// import style from "styled-jsx/style";

    
const Button: React.FC<{ onClick: () => void, children: string}> = ({ onClick, children }) => {  
    return (  
      <div style={{ padding: '20px' }}>
        <button
          type='button'
          onClick={onClick}
          style={{
            marginBottom: '16px',
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {children}
        </button>
      </div>
    );
  };
  
  export  { Button };
  