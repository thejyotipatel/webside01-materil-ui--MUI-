import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { Box, Container, Stack } from '@mui/material'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <Navbar />
      <Stack direction={'row'} spacing={2} justifyContent='center'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
