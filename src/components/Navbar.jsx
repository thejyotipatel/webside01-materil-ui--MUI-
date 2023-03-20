import {
  Chat,
  ChatBubble,
  ChatBubbleOutline,
  Mail,
  Notifications,
} from '@mui/icons-material'
import {
  AppBar,
  Badge,
  Box,
  Button,
  InputBase,
  Toolbar,
  Typography,
} from '@mui/material'

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

        <Button>user red</Button>
      </Toolbar>
    </AppBar>
  )
}
