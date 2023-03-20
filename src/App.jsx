import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Rightbar from './components/Rightbar'
import { Box, Container, CssBaseline, Stack } from '@mui/material'
function App() {
  return (
    <Box>
      {/* <CssBaseline /> */}
      <Navbar />
      <Stack direction={'row'} spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  )
}

export default App
