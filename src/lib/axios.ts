import axios from 'axios'

const key = process.env.YOUTUBE_API_KEY
const baseURL = 'https://www.googleapis.com/youtube/v3'

if (!key) {
  throw new Error('YOUTUBE_API_KEY environment variable is not set')
}

export default axios.create({
  baseURL,
  params: {
    key,
  },
})
