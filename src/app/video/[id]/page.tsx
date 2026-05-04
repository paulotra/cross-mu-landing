import { getVideoById } from '@/lib/videos'
import VideoPlayer from '@/components/VideoPlayer'
import VideoComments from '@/components/VideoComments'
import RelatedVideos from '@/components/RelatedVideos'

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const video = await getVideoById(id)
  return (
    <div className="p-10 flex flex-col">
      <div className="flex gap-6">
        {video ? (
          <>
            <div className="w-full flex flex-col gap-6">
              <h1 className="text-2xl">{video.snippet.title}</h1>
              <VideoPlayer id={id} />
              <VideoComments id={id} />
            </div>
            <RelatedVideos categoryId={video.snippet.categoryId} />
          </>
        ) : (
          <p>Video not found</p>
        )}
      </div>
    </div>
  )
}
