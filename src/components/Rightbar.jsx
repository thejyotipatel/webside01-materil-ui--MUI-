import { Search, SettingsOutlined } from '@mui/icons-material'
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
export default function Rightbar() {
  return (
    <Box position={'sticky'} top='0' width='inherit'>
      <Box backgrouncolor='#f5f8fa' width='100%'>
        {/* <FormControl
          sx={{
            width: '100%',
            borderRadius: '50%',
          }}
          > */}
        <TextField
          sx={{
            width: '100%',
            border: 'none',
          }}
          id='search'
          type='text'
          placeholder='Search Twitter'
          fullWidth
          width='100%'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            ),
          }}
        />
        {/* </FormControl> */}

        <Box borderBottom='2px solid #e6ecf0'>
          <Box
            borderBottom='2px solid #e6ecf0'
            display={'flex'}
            justifyContent='space-between'
            alignItems={'center'}
            // width='100%'
            padding='0 1em 1em 1em'
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
              <SettingsOutlined
                sx={{
                  color: '#1976d2',
                }}
              />
            </IconButton>
            <Box>
              <Typography
                component='p'
                variant='body2'
                // fontSize={'22px'}
                textAlign={'start'}
                fontWeight={600}
                color='text.secondary'
              >
                Trending worldwide
              </Typography>
              <Link
                href='#'
                // component='h1'
                // variant='body2'
                textDecoration='none'
                sx={{
                  textDecoration: 'none',
                  color: 'black',
                  fontSize: '18px',
                }}
                textAlign={'start'}
                fontWeight={800}
              >
                #Trendsforyou
              </Link>
              <Box>
                <Typography
                  component='p'
                  variant='body2'
                  // fontSize={'22px'}
                  textAlign={'start'}
                  fontWeight={600}
                >
                  <Typography
                    component='span'
                    variant='body2'
                    // fontSize={'22px'}
                    textAlign={'start'}
                    fontWeight={600}
                    color='text.secondary'
                  >
                    Space
                  </Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </Typography>
                <Box
                  component='img'
                  // height='250px'
                  width={'100%'}
                  // m={'0 1em 0 0'}
                  src={img2}
                  alt='Paella dish'
                  marginBottom={1}
                  borderRadius={'10px'}
                />
                <Typography
                  component='p'
                  variant='body2'
                  // fontSize={'22px'}
                  textAlign={'start'}
                  fontWeight={600}
                  color='text.secondary'
                >
                  7634588 pople are Tweeting about this
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
