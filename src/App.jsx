import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import Feed from './pages/Feed'
import Rootlayout from './pages/Rootlayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'/'} element={<Rootlayout />}>
        <Route index element={<Feed />} />
      </Route>
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
