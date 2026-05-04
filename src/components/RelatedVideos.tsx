import { getRelatedVideos } from '@/lib/videos'
import VideoCard from '@/components/VideoCard'

export default async function RelatedVideos({
  categoryId,
}: {
  categoryId: string
}) {
  const videos = await getRelatedVideos(categoryId)
  return (
    <div className="w-md sticky top-[20px] self-start">
      <h2 className="text-2xl">Related Video</h2>
      <ul className="flex flex-col gap-4 mt-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} orientation="horizontal" />
        ))}
      </ul>
    </div>
  )
}
