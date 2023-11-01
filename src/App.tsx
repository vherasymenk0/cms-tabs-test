import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Layout, { layoutLoader } from 'src/components/Layout'
import Homepage from 'src/pages/HomePage'
import NotFoundPage from 'src/pages/NotFoundPage'
import TabItem from 'src/components/TabItem'
import { ROUTE_PATHS } from 'src/constants/routePaths.constant'
import NotFoundRedirect from 'src/components/NotFoundRedirect'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE_PATHS.root} element={<Layout />} loader={layoutLoader}>
      <Route index path={ROUTE_PATHS.root} element={<Homepage />} />
      <Route path={`${ROUTE_PATHS.tabs}/:id`} element={<TabItem />} />
      <Route path={ROUTE_PATHS.notFound} element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundRedirect />} />
    </Route>
  )
)

const App: React.FC = () => <RouterProvider router={router} />

export default App
