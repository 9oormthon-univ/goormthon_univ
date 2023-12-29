// Router.jsx
import { GoormLoader } from '@goorm-dev/gds-components';
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './@components/layout/Layout';

// 레이지 로딩 적용
const About = lazy(() => import('./@pages/about/About'));
const Project = lazy(() => import('./@pages/project/Project'));
const Recruit = lazy(() => import('./@pages/recruit/Recruit'));
const Apply = lazy(() => import('./@pages/apply/Apply'));
const NotFound = lazy(() => import('./@pages/errors/NotFound'));

// GoormLoader 컴포넌트에 전달할 props 설정
const loaderProps = {
  color: 'blue', // 예시 색상
  lottieProps: {
    // Lottie 관련 props 설정
    loop: true,
  },
};

// 라우터 생성
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout 컴포넌트를 사용
    children: [
      {
        index: true,
        element: <Suspense fallback={<GoormLoader {...loaderProps} />}>{React.createElement(About)}</Suspense>,
      },

      {
        path: 'project',
        element: <Suspense fallback={<GoormLoader {...loaderProps} />}>{React.createElement(Project)}</Suspense>,
      },
      {
        path: 'recruit',
        element: <Suspense fallback={<GoormLoader {...loaderProps} />}>{React.createElement(Recruit)}</Suspense>,
      },
      {
        path: 'apply',
        element: <Suspense fallback={<GoormLoader {...loaderProps} />}>{React.createElement(Apply)}</Suspense>,
      },
      { path: '*', element: <Suspense fallback={<div>Loading...</div>}>{React.createElement(NotFound)}</Suspense> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
