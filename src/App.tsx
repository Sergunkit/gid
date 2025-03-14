import React from "react";
import './App.css';
// import { BaseLayout } from './index.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

function App() {
  return (
    <>
      <React.StrictMode>
            <RouterProvider router={router} />
      </React.StrictMode>
    </>
  )
}

export default App
