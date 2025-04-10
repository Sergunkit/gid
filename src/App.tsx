import React from "react";
import './App.css';
// import { BaseLayout } from './index.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
