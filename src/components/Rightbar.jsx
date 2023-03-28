import { Settings } from '@mui/icons-material'
import { Box, Typography, IconButton } from '@mui/material'
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
export default function Rightbar() {
  return (
    <Box position={'fixed'}>
      <Box backgrouncolor='#f5f8fa' width='100%'>
        <Box
          borderBottom='10px solid #e6ecf0'
          display={'flex'}
          justifyContent='space-between'
          alignItems={'center'}
          width='100%'
          p={1}
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
            Trends for you
          </Typography>
          <IconButton aria-label='refress'>
            <Settings
              sx={{
                color: '#1976d2',
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}
