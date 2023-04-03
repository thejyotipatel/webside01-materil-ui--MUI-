import {
  Search,
  SettingsOutlined,
  TimeToLeaveRounded,
} from '@mui/icons-material'
import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Link,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import img2 from '../assets/02.jpg'

const TrendForYouData = [
  {
    id: 0,
    title: 'BreakingNews',
    airticlAbout: 'Space',
    airticlDesc: 'Lorem ipsum dolor sit amet conse ctetur, adipi sicing elit',
    airticlImage: img2,
    totleAboutTweet: '10,034',
  },
  {
    id: 1,
    title: 'WorldNews',
    tweets: '124',
    totleAboutTweet: '5,034',
  },
  {
    id: 2,
    title: 'InternationalCatDay',
    airticlAbout: 'Animals',
    airticlDesc: 'Lorem ipsum dolor sit amet consec tetur',
    airticlImage: img2,
    totleAboutTweet: '2,123',
  },
  {
    id: 3,
    title: 'GreatestOfAllTime',
    tweets: '100',
    totleAboutTweet: '14,224',
  },
]

const TweetInput = styled(Input)({
  // border: 'none',
  // color: 'white',
  width: '100%',
  marginBottom: '0.5em',
  // borderColor: 'transparent',
  // ':before': {
  //   borderBottom: 'none',
  //   borderColor: 'transparent',
  // },
})

export default function Rightbar() {
  return (
    <Box position={'sticky'} top='0' width='inherit'>
      <Box backgrouncolor='#f5f8fa' width='100%'>
        <TweetInput
          placeholder="What's happening?"
          type='search'
          id='search'
          sx={{
            width: '100%',
            border: 'none',
          }}
        />

        <Box bgcolor='#f5f8fa' p={1} my={2}>
          <Box
            borderBottom='2px solid #e6ecf0'
            display={'flex'}
            justifyContent='space-between'
            alignItems={'center'}
            // width='100%'
            paddingY={1}
          >
            <Typography
              component='h1'
              variant='body2'
              // padding={1}
              fontSize={'22px'}
              textAlign={'start'}
              fontWeight={600}
              color='text.primary'
            >
              Trends for you
            </Typography>
            <IconButton aria-label='refress'>
              <SettingsOutlined
                sx={{
                  color: '#1976d2',
                }}
              />
            </IconButton>
          </Box>
          {TrendForYouData.map((item) => {
            const {
              id,
              title,
              airticlAbout,
              airticlDesc,
              airticlImage,
              totleAboutTweet,
              tweets,
            } = item
            return (
              <Box
                key={id}
                marginY={1}
                bgcolor='transparent'
                borderBottom='2px solid #e6ecf0'
                display={'flex'}
                flexDirection='column'
                gap={'0.2em'}
                alignItems={'flex-start'}
                pb={2}
              >
                <Typography
                  component='p'
                  variant='body2'
                  fontSize={'14px'}
                  textAlign={'start'}
                  fontWeight={600}
                  color='text.secondary'
                >
                  Trending worldwide
                </Typography>
                <Link
                  href='#'
                  sx={{
                    textDecoration: 'none',
                    color: 'black',
                    fontSize: '18px',
                  }}
                  textAlign={'start'}
                  fontWeight={800}
                >
                  #{title}
                </Link>
                {airticlAbout && airticlDesc && totleAboutTweet && (
                  <Box
                    border='2px solid #e6ecf0'
                    display={'flex'}
                    borderRadius={'10px'}
                    justifyContent='stretch'
                    flexDirection='row'
                    height={'100px'}
                    overflow='hidden'
                    marginY={1}
                  >
                    <Typography
                      component='p'
                      variant='body2'
                      padding={1}
                      fontSize={'16px'}
                      fontWeight={600}
                      display={'flex'}
                      flexDirection='column'
                      justifyContent='space-evenly'
                      textAlign={'justify'}
                    >
                      <Typography
                        component='span'
                        variant='body2'
                        textAlign={'start'}
                        fontWeight={600}
                        color='text.secondary'
                        fontSize={'18px'}
                      >
                        {airticlAbout}
                      </Typography>
                      {airticlDesc}
                    </Typography>
                    <Box
                      component='img'
                      sx={{
                        overflow: 'hidden',
                      }}
                      width={'100%'}
                      maxWidth='100px'
                      src={airticlImage}
                      alt='Paella dish'
                    />
                  </Box>
                )}
                {tweets && (
                  <Typography
                    component='p'
                    variant='body2'
                    fontSize={'16px'}
                    textAlign={'start'}
                    fontWeight={600}
                    color='text.secondary'
                  >
                    {tweets}K Tweets
                  </Typography>
                )}

                {totleAboutTweet && (
                  <Typography
                    component='p'
                    variant='body2'
                    fontSize={'14px'}
                    textAlign={'start'}
                    fontWeight={600}
                    color='text.secondary'
                  >
                    {totleAboutTweet} pople are Tweeting about this
                  </Typography>
                )}
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}
