'use client'

import InfiniteScroll from 'react-infinite-scroll-component'
import VideoCard from '@/components/VideoCard'
import { Video } from '@/types/videos'
import { useState } from 'react'
import { getVideos } from '@/lib/videos'

interface VideoGridProps {
  initialVideos: Video[]
  initialNextPageToken?: string
}

export default function VideoGrid({
  initialVideos,
  initialNextPageToken,
}: VideoGridProps) {
  const [videos, setVideos] = useState<Video[]>(initialVideos)
  const [nextPageToken, setNextPageToken] = useState(initialNextPageToken)

  async function loadMore() {
    try {
      const nextVideos = await getVideos(nextPageToken)
      setVideos((prev) => [...prev, ...nextVideos.items])
      setNextPageToken(nextVideos.nextPageToken)
    } catch (error) {
      console.error('Error loading more videos:', error)
    }
  }

  return (
    <InfiniteScroll
      dataLength={videos.length}
      next={loadMore}
      hasMore={!!nextPageToken}
      loader={<p className="text-center mt-4">Loading...</p>}
      endMessage={<p className="text-center mt-4">No more videos</p>}
    >
      <ul className="grid grid-cols-3 gap-4 cursor-pointer">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </InfiniteScroll>
  )
}
