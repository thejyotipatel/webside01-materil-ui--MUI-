import {
  ChatBubbleOutlineOutlined,
  Circle,
  Favorite,
  FileUploadOutlined,
  KeyboardArrowDown,
  Loop,
} from '@mui/icons-material'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
const Post = ({
  userImage,
  name,
  userName,
  timestamp,
  text,
  tags,
  image,
  chat,
  retweet,
  like,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        gap: '.5em',
        width: '100%',
      }}
    >
      <Avatar aria-label='recipe'>{userImage}</Avatar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box>
          <Box
            display={'flex'}
            justifyContent='space-between'
            alignItems={'center'}
            width='100%'
          >
            <Stack direction='row' alignItems={'center'} spacing='0.2em'>
              <Typography variant='body2' fontWeight={800} color='text.peimary'>
                {name}
              </Typography>
              <Typography
                variant='body2'
                fontWeight='700'
                color='text.secondary'
              >
                @{userName}
              </Typography>
              <Circle
                sx={{ width: '5px', fontWeight: '600', color: '#a39494' }}
              />
              <Typography
                fontWeight='700'
                variant='body2'
                color='text.secondary'
              >
                {timestamp}
              </Typography>
            </Stack>
            <IconButton aria-label='settings'>
              <KeyboardArrowDown
                sx={{
                  position: 'absolute',
                  width: '20px',
                  height: '20px',
                  '&:hover, &:focus': {
                    color: '#1976d2',
                    '& svg': {
                      color: '#1976d2',
                    },
                  },
                }}
              />
            </IconButton>
          </Box>
          <Box
            display={'flex'}
            justifyContent='space-between'
            flexDirection={'row'}
            alignItems={'center'}
            // width='100%'
          >
            <Typography
              variant='body2'
              paddingBottom={1}
              textAlign={'start'}
              fontWeight={600}
              color='text'
              component={'p'}

              // display={'grid'}
            >
              {text}
              {tags.map((item, i) => {
                return (
                  <Typography
                    fontWeight={600}
                    paddingLeft={'0.5em'}
                    component={'a'}
                    href='#'
                    variant='body2'
                    paddingBottom={1}
                    textAlign={'start'}
                    color='#1976d2'
                    key={i}
                  >
                    #{item}
                  </Typography>
                )
              })}
            </Typography>
          </Box>
        </Box>
        {image && (
          <Box
            component='img'
            height='250px'
            width={'100%'}
            // m={'0 1em 0 0'}
            src={image}
            alt='Paella dish'
            marginBottom={1}
            borderRadius={'10px'}
          />
        )}
        <Box
          sx={{
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'start',
            // width: '50%',
            justifyContent: 'start',
            gap: '1em',
          }}
        >
          <IconButton
            aria-label='chat'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.2em',
            }}
          >
            <ChatBubbleOutlineOutlined
              sx={{
                width: '18px',
                height: '18px',
                '&:hover, &:focus': {
                  color: '#1976d2',
                  '& svg': {
                    color: '#1976d2',
                  },
                },
              }}
            />
            <Typography
              variant='body2'
              // paddingBottom={1}
              // textAlign={'start'}
              color='text.secondary'
              // fontWeight={500}
              fontSize={'15px'}
            >
              {chat}
            </Typography>
          </IconButton>
          <IconButton
            aria-label='retweet'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.2em',
            }}
          >
            <Loop
              sx={{
                width: '18px',
                height: '18px',
                '&:hover, &:focus': {
                  color: '#1976d2',
                  '& svg': {
                    color: '#1976d2',
                  },
                },
              }}
            />
            <Typography
              variant='body2'
              // paddingBottom={1}
              // textAlign={'start'}
              color='text.secondary'
              // fontWeight={500}
              fontSize={'15px'}
            >
              {retweet}
            </Typography>
          </IconButton>
          <IconButton
            aria-label='add to favorites'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.2em',
            }}
          >
            <Favorite
              sx={{
                width: '18px',
                height: '18px',
                '&:hover, &:focus': {
                  color: '#1976d2',
                  '& svg': {
                    color: '#1976d2',
                  },
                },
              }}
            />
            <Typography
              variant='body2'
              color='text.secondary'
              fontSize={'15px'}
            >
              {like}
            </Typography>
          </IconButton>
          <IconButton aria-label='upload'>
            <FileUploadOutlined
              sx={{
                width: '18px',
                height: '18px',
                '&:hover, &:focus': {
                  color: '#1976d2',
                  '& svg': {
                    color: '#1976d2',
                  },
                },
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}
export default Post
