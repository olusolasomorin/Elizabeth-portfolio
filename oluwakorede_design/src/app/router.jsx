import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import { RootLayout } from './RootLayout'

// Secondary pages are code-split so the home page loads as fast as possible.
const WorkPage = lazy(() => import('@/pages/WorkPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ProjectPage = lazy(() => import('@/pages/ProjectPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function PageFallback() {
  return <div className="min-h-screen bg-paper" aria-busy="true" />
}

const withSuspense = (Page) => (
  <Suspense fallback={<PageFallback />}>
    <Page />
  </Suspense>
)

/*
 * Route map. When the admin dashboard is added, mount it here as a separate
 * branch, e.g. { path: '/admin/*', lazy: () => import('@/admin/routes') },
 * so none of its code ships with the public site.
 */
export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work', element: withSuspense(WorkPage) },
      { path: 'work/:slug', element: withSuspense(ProjectPage) },
      { path: 'services', element: withSuspense(ServicesPage) },
      { path: 'about', element: withSuspense(AboutPage) },
      { path: '*', element: withSuspense(NotFoundPage) },
    ],
  },
])
