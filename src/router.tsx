import { createBrowserRouter } from 'react-router-dom';
import { BaseLayout } from './indexLC.ts'
// import { ButtonCollapse } from './index.ts';
import { Boundary } from './pages/index.ts';
// import { Employees } from '@/pages';
// import { Profile } from '@/pages';
// import { Structure } from '@/pages';
// import { TeamDetail } from '@/pages';
// import { TeamList } from '@/pages';
// import { Welcome } from '@/pages';
// import { Status } from '@/pages';
// import { FormApplication } from './pages/index.ts';
import { JobApplicationForm } from './pages/index.ts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <Boundary />,
    children: [
      // {
  //       index: true,
  //       element: <Profile />,
  //     },
  //     {
  //       path: 'employees',
  //       element: <Employees />,
  //     },
  //     {
  //       path: 'profile/:id?',
  //       element: <Profile />,
  //     },
  //     {
  //       path: 'structure-functional/:id?',
  //       element: <Structure type="functional" />,
  //     },
  //     {
  //       path: 'structure-projects/:id?',
  //       element: <Structure type="projects" />,
  //     },
  //     {
  //       path: 'teams',
  //       element: <TeamList />,
  //     },
  //     {
  //       path: 'teams/:id',
  //       element: <TeamDetail />,
  //     },
      {
        path: '/bid-add',
        element: <JobApplicationForm />,
      },
    ],
  // },
  // {
  //   path: '/auth',
  //   element: <Welcome />,
  // },
  // {
  //   path: '/error',
  //   element: <Status />,
  },
]);
