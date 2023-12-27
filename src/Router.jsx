// Router.jsx
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Layout from './@components/layout/Layout';

// 레이지 로딩 적용
const About = lazy(() => import('./@pages/about/About'));
const Project = lazy(() => import('./@pages/Project'));
const Recruit = lazy(() => import('./@pages/recruit/Recruit'));
const NotFound = lazy(() => import('./@pages/errors/NotFound'));

// 라우터 생성
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout 컴포넌트를 사용
    children: [
      { index: true, element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(About)}</Suspense> },
      {
        path: 'project',
        element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(Project)}</Suspense>,
      },
      {
        path: 'recruit',
        element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(Recruit)}</Suspense>,
      },
      { path: '*', element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(NotFound)}</Suspense> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
