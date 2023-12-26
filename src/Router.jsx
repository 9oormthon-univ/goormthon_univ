import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// 레이지 로딩 적용
const About = lazy(() => import('./@pages/About'));
const Project = lazy(() => import('./@pages/Project'));
const Recruit = lazy(() => import('./@pages/Recruit'));
const NotFound = lazy(() => import('./@pages/errors/NotFound'));

// 라우터 생성
const router = createBrowserRouter([
  { path: '/', element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(About)}</Suspense> },
  { path: '/project', element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(Project)}</Suspense> },
  { path: '/recruit', element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(Recruit)}</Suspense> },
  { path: '*', element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(NotFound)}</Suspense> },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
