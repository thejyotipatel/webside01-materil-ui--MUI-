import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Collapse,
  Box,
  Stack,
} from '@mui/material'
import image from '../assets/01.jpg'
import {
  MoreVert,
  Favorite,
  Share,
  Loop,
  FileUploadOutlined,
  ChatBubble,
  ChatBubbleOutline,
  KeyboardArrowDown,
  DoneTwoTone,
  Circle,
} from '@mui/icons-material'
const Post = () => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <CardContent>
        <Box
          display={'flex'}
          justifyContent='space-between'
          alignItems={'center'}
          marginBottom='0px'
          width='100%'
        >
          <Stack direction='row' alignItems={'center'} spacing='0.2em'>
            <Avatar aria-label='recipe'>R</Avatar>
            <Typography variant='body2' fontWeight={600} color='text.peimary'>
              Shrimp
            </Typography>
            <Typography variant='body2' fontWeight='500' color='text.secondary'>
              @Shrimpchorizo
            </Typography>
            <Circle
              sx={{ width: '5px', fontWeight: '500', color: '#a39494' }}
            />
            <Typography variant='body2' color='text.secondary'>
              3m
            </Typography>
          </Stack>
          <IconButton aria-label='settings'>
            <KeyboardArrowDown />
          </IconButton>
        </Box>
        <Typography variant='body2' textAlign={'start'} color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <Box
        component='img'
        height='35%'
        width={'90%'}
        padding={'0 1em 0 0'}
        src={image}
        alt='Paella dish'
        borderRadius={'10px'}
      />
      <CardActions
        sx={{
          display: 'flex',
          // flexDirection: 'column',
          alignItems: 'start',
          width: '50%',
          justifyContent: 'space-between',
        }}
      >
        <IconButton aria-label='chat'>
          <ChatBubbleOutline />
        </IconButton>
        <IconButton aria-label='retweet'>
          <Loop />
        </IconButton>
        <IconButton aria-label='add to favorites'>
          <Favorite />
        </IconButton>
        <IconButton aria-label='upload'>
          <FileUploadOutlined />
        </IconButton>
      </CardActions>
    </Card>
  )
}
export default Post
