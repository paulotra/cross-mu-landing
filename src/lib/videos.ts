import { Video, VideoResponse } from '@/types/videos'
import { getBaseUrl } from '@/lib/utils'

// query params
const PART = 'snippet,contentDetails,statistics'
const CHART = 'mostPopular'
const HOME_MAX_RESULTS = '9'
const RELATED_MAX_RESULTS = '8'

export async function getVideos(
  pageToken?: string,
): Promise<{ items: Video[]; nextPageToken?: string }> {
  const params = new URLSearchParams({
    part: PART,
    chart: CHART,
    maxResults: HOME_MAX_RESULTS,
    ...(pageToken && { pageToken }),
  })
  const response = await fetch(`${getBaseUrl()}/api/videos?${params}`)
  const data: VideoResponse = await response.json()
  return { items: data.items, nextPageToken: data.nextPageToken }
}

export async function getRelatedVideos(categoryId: string): Promise<Video[]> {
  const params = new URLSearchParams({
    part: PART,
    chart: CHART,
    maxResults: RELATED_MAX_RESULTS,
    categoryId,
  })
  const response = await fetch(`${getBaseUrl()}/api/videos?${params}`)
  const data: VideoResponse = await response.json()
  return data?.items ?? []
}

export async function getVideoById(id: string): Promise<Video | null> {
  const response = await fetch(`${getBaseUrl()}/api/videos/${id}`)
  const data: VideoResponse = await response.json()
  return data?.items[0] ?? null
}
