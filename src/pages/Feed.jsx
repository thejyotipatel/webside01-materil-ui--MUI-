import {
  StarBorderPurple500,
  Chat,
  ChatBubble,
  ChatBubbleOutlined,
  ChatBubbleOutlineOutlined,
  Circle,
  Favorite,
  FileUploadOutlined,
  KeyboardArrowDown,
  Loop,
  Face,
  Face2,
  EmojiEmotions,
  EmojiEmotionsOutlined,
  GraphicEqOutlined,
  GifBoxOutlined,
  AlbumOutlined,
  PhotoAlbumOutlined,
  Album,
  AlbumRounded,
  PhotoAlbum,
  PhotoAlbumRounded,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import img1 from '../assets/01.jpg'
import img2 from '../assets/02.jpg'
import Post from '../components/Post'
const postData = [
  {
    id: 1,
    userImage: 'M',
    name: 'Maya',
    userName: 'Maya_Comeday96',
    timestamp: '3m',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.`,
    tags: ['story', 'foryou'],
    image: img1,
    chat: 9,
    like: 3,
    retweet: 4,
  },
  {
    id: 2,
    userImage: 'J',
    name: 'Jone',
    userName: 'jonesmith234',
    timestamp: '9m',
    text: `Add 1 cup of frozen peas along with the mussels, if you like.`,
    tags: ['Cup', 'Mussels'],
    image: null,
    chat: 9,
    like: 3,
    retweet: 0,
  },
  {
    id: 3,
    userImage: 'M',
    name: 'Moha',
    userName: 'Mohahani_fact',
    timestamp: '1h',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. `,
    tags: ['dish', 'foryou'],
    image: img1,
    chat: 9,
    like: 3,
    retweet: 4,
  },
  {
    id: 4,
    userImage: 'M',
    name: 'Moha',
    userName: 'Mohahani_fact',
    timestamp: '1h',
    text: `This impressive paella is a perfect party dish and a fun meal to cook together with your guests. `,
    tags: [],
    image: img2,
    chat: 9,
    like: 3,
    retweet: 4,
  },
]
export default function Feed() {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent='space-between'
        alignItems={'center'}
        width='100%'
        p={1}
        border='1px solid rgba(0, 0, 0, 0.12)'
      >
        <Typography
          component='h1'
          variant='body2'
          padding={1}
          fontSize={'22px'}
          textAlign={'start'}
          fontWeight={600}
          color='text.primary'
        >
          Home
        </Typography>
        <IconButton aria-label='refress' sx={{ marginRight: '0.5em' }}>
          <StarBorderPurple500
            sx={{
              color: '#1976d2',
            }}
          />
        </IconButton>
      </Box>
      <Box
        display={'flex'}
        justifyContent='flex-start'
        alignItems={'center'}
        gap='0.5em'
        p={1}
        border='1px solid rgba(0, 0, 0, 0.12)'
        borderBottom='10px solid rgba(0, 0, 0, 0.12)'
      >
        <Avatar aria-label='recipe' src={img2}>
          G
        </Avatar>
        <Box width={'100%'}>
          <TextField
            margin='none'
            fullWidth
            name='search'
            placeholder="What's happening?"
            type='search'
            id='search'
            padding='none'
          />
          <Stack direction={'row'} justifyContent='space-between'>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'start',
                }}
              >
                <IconButton aria-label='chat'>
                  <PhotoAlbumRounded
                    sx={{
                      width: '20px',
                      height: '20px',
                      color: '#1976d2',
                    }}
                  />
                </IconButton>
                <IconButton aria-label='retweet'>
                  <GifBoxOutlined
                    sx={{
                      width: '20px',
                      height: '20px',
                      color: '#1976d2',
                    }}
                  />
                </IconButton>
                <IconButton aria-label='add to favorites'>
                  <GraphicEqOutlined
                    sx={{
                      width: '20px',
                      height: '20px',
                      color: '#1976d2',
                    }}
                  />
                </IconButton>
                <IconButton aria-label='upload'>
                  <EmojiEmotionsOutlined
                    sx={{
                      width: '20px',
                      height: '20px',
                      color: '#1976d2',
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Button
              sx={{
                borderRadius: '2em',
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#07b4ff',
                textTransform: 'capitalize',
                p: '0.3em 1em',
                fontWeight: '600',
                '&:hover, &:focus': {
                  backgroundColor: 'rgba(7, 181, 255, 0.863)',
                  // color: 'black',
                  // opacity: '0.8',
                },
              }}
            >
              tweet
            </Button>
          </Stack>
        </Box>
      </Box>
      {postData.map((post) => {
        return (
          <Box key={post.id} p={1} border='1px solid rgba(0, 0, 0, 0.12)'>
            <Post {...post} />
          </Box>
        )
      })}
    </>
  )
}
