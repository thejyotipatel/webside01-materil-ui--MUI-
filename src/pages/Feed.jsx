import {
  AlignHorizontalLeft,
  AutoAwesomeOutlined,
  EmojiEmotionsOutlined,
  GifBoxOutlined,
  PhotoCameraBackOutlined,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Button,
  createTheme,
  IconButton,
  Input,
  Stack,
  styled,
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

const TweetInput = styled(Input)({
  border: 'none',
  width: '100%',
  marginBottom: '0.5em',
  borderColor: 'transparent',
  ':before': {
    borderBottom: 'none',
    borderColor: 'transparent',
  },
})
export default function Feed() {
  return (
    <>
      <Box position={'sticky'} top='0' bgcolor={'white'} zIndex='2'>
        <Box
          display={'flex'}
          justifyContent='space-between'
          alignItems={'center'}
          p={1}
          border='1px solid #e6ecf0'
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
            <AutoAwesomeOutlined
              sx={{
                color: '#1976d2',
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent='flex-start'
        alignItems={'start'}
        gap='0.5em'
        p={1}
        border='1px solid #e6ecf0'
      >
        <Avatar aria-label='recipe' src={img2}>
          G
        </Avatar>
        <Box width={'100%'} sx={{ border: 0 }}>
          <TweetInput
            placeholder="What's happening?"
            type='search'
            id='search'
          />
          <Stack direction={'row'} justifyContent='space-between'>
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'start',
                  p: 0,
                }}
              >
                <IconButton aria-label='chat' p='0'>
                  <PhotoCameraBackOutlined
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
                  <AlignHorizontalLeft
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
                },
              }}
            >
              tweet
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box borderTop='10px solid #e6ecf0' bgcolor={'inherit'}>
        {postData.map((post) => {
          return (
            <Box key={post.id} p={1} border='1px solid #e6ecf0'>
              <Post {...post} />
            </Box>
          )
        })}
      </Box>
    </>
  )
}
