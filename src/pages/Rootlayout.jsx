import { Box, Grid, Paper, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Rightbar from '../components/Rightbar'
import Sidebars from '../components/Sidebars'

const Rootlayout = () => {
  return (
    <Grid
      component='main'
      bgcolor={'#e6ecf0'}
      sx={{ height: '100vh', width: { sm: '100%', md: '95%' } }}
      marginInline='auto'
    >
      <Stack
        direction={'row'}
        container={'true'}
        justifyContent='space-between'
      >
        <Box
          flex={3}
          sx={{ display: { sm: 'none', md: 'block' } }}
          aria-label='main mailbox folders'
          color={'black'}
          bgcolor={'white'}
          justifyContent='center'
          p='1'
        >
          <Sidebars />
        </Box>
        <Box variant='outlined' flex='6' bgcolor={'white'}>
          <Outlet />
        </Box>
        <Box
          bgcolor={'white'}
          flex='4'
          p={2}
          sx={{ display: { sm: 'none', md: 'block' } }}
        >
          <Rightbar />
        </Box>
      </Stack>
    </Grid>
  )
}
export default Rootlayout
