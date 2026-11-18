import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/router'
import { ContentProvider } from '@/context/ContentProvider'

export default function App() {
  return (
    <ContentProvider>
      <RouterProvider router={router} />
    </ContentProvider>
  )
}
