import styled from '@emotion/styled'
import { Chat, Mail, Notifications } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material'

const NavIcons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1em',
})

const UserAvater = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5em',
}))

export default function Navbar() {
  return (
    <AppBar position='sticky'>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Webside01
        </Typography>
        <Typography variant='h6' sx={{ display: { xs: 'block', sm: 'none' } }}>
          Web01
        </Typography>
        <Box bgcolor={'white'} borderRadius={'0.2em'} px={1} width={'40%'}>
          <InputBase placeholder='search...' />
        </Box>
        <NavIcons>
          <Badge
            badgeContent={4}
            color='primary'
            sx={{
              xs: 'none',
              sm: 'block',
            }}
          >
            <Mail color='white' />
          </Badge>
          <Badge
            badgeContent={4}
            color='primary'
            sx={{
              xs: 'none',
              sm: 'block',
            }}
          >
            <Notifications color='white' />
          </Badge>
          <Badge
            badgeContent={4}
            color='primary'
            sx={{
              xs: 'none',
              sm: 'block',
            }}
          >
            <Chat color='white' />
          </Badge>
          <UserAvater
            display={'flex'}
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <Avatar sx={{ width: '30px', height: '30px' }} />
            <Typography variant='span' color='red' textTransform={'capitalize'}>
              user.red
            </Typography>
          </UserAvater>
        </NavIcons>
      </Toolbar>
    </AppBar>
  )
}
