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
        {/* <Route path='add-Client' element={<AddClient />}>
          <Route index element={<Profile />} />
          <Route path='payment' element={<Payment />} />
          <Route path='modules' element={<Modules />} />
          <Route path='theme' element={<Theme />} />
          <Route path='success' element={<Success />} />
        </Route> */}

        {/* <Route path='hotals'>
        <Route index element={<SearchHotels />} />
        <Route path=':hotelId' element={<Hotel/>} />
      </Route>  */}
      </Route>
      {/* <Route path='login' element={<Login />} /> */}
    </>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
