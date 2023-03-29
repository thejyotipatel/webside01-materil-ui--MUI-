import {
  Download,
  Person,
  Search,
  BookmarkAddOutlined,
  Explore,
  Home,
  Label,
  ListAltRounded,
  MessageRounded,
  MoreHorizRounded,
  Notifications,
  Twitter,
  TagOutlined,
  Tag,
  EmailOutlined,
  BookmarkBorderOutlined,
} from '@mui/icons-material'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  InputAdornment,
  Link,
  Avatar,
  styled,
} from '@mui/material'
// import { Link, Navigate, Link } from 'react-router-dom'

// import { InboxIcon, DraftsIcon } from '@mui/icons-material'
const ListLink = styled(ListItem)({
  cursor: 'pointer',
  color: 'black',
  textTransform: 'capitalize',
  '& .MuiListItemText-root .MuiTypography-root': {
    // '& svg': {
    fontWeight: '600',
    fontSize: '18px',
  },
  '&:hover, &:focus': {
    color: '#1976d2',

    '& svg': {
      color: '#1976d2',
    },
  },
  '& svg:not(:first-of-type)': {
    color: 'black',
    width: '50px',
    height: '50px',
  },
})
// import { InboxIcon, DraftsIcon } from '@mui/icons-material'
const TweetButton = styled(ListItemButton)({
  borderRadius: '2em',
  color: 'white',
  textAlign: 'center',
  width: '100%',
  backgroundColor: '#1976d2',
  '&:hover, &:focus': {
    backgroundColor: 'rgba(25, 118, 210, 0.808)',
    // color: 'black',
    // opacity: '0.8',
  },
})
const Sidebars = () => {
  return (
    <Box position={'sticky'} top='0' width='inherit'>
      <List
        sx={{
          padding: ' 0 1em 1em 1em',
          // position: 'fixed',
        }}
      >
        <ListLink>
          <Link>
            <Twitter sx={{ fontSize: '3em' }} />
          </Link>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <Home sx={{ fontSize: '2em', color: 'black' }} />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <Tag sx={{ fontSize: '2em', color: 'black' }} />
          </ListItemIcon>
          <ListItemText>Explore</ListItemText>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <Notifications sx={{ fontSize: '2em', color: 'black' }} />
          </ListItemIcon>
          <ListItemText>Notifications</ListItemText>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <EmailOutlined sx={{ fontSize: '2em', color: 'black' }} />
          </ListItemIcon>
          <ListItemText>Message</ListItemText>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <BookmarkBorderOutlined sx={{ fontSize: '2em', color: 'black' }} />
          </ListItemIcon>
          <ListItemText>Bookmarks</ListItemText>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <ListAltRounded sx={{ fontSize: '2em', color: 'black' }} />
          </ListItemIcon>
          <ListItemText>Lists</ListItemText>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <Avatar sx={{ width: '28px ', height: '28px' }} />
          </ListItemIcon>
          <ListItemText>profile</ListItemText>
        </ListLink>
        <ListLink>
          <ListItemIcon>
            <MoreHorizRounded sx={{ fontSize: '2em', color: 'black' }} />
          </ListItemIcon>
          <ListItemText>More</ListItemText>
        </ListLink>
        <ListLink>
          <TweetButton>
            <ListItemText>tweet</ListItemText>
          </TweetButton>
        </ListLink>
      </List>
    </Box>
  )
}
export default Sidebars
