import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from './indexLC.ts'
import { ButtonCollapse } from './index.ts';
// import { Boundary } from '@/pages';
// import { Employees } from '@/pages';
// import { Profile } from '@/pages';
// import { Structure } from '@/pages';
// import { TeamDetail } from '@/pages';
// import { TeamList } from '@/pages';
// import { Welcome } from '@/pages';
// import { Status } from '@/pages';
// import { FormApplication } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />, 
  },
]);
