import { Video } from '@/types/videos'
import Link from 'next/link'
import Image from 'next/image'

interface VideoCardProps {
  video: Video
  orientation?: 'horizontal' | 'vertical'
}

export default function VideoCard({
  video,
  orientation = 'vertical',
}: VideoCardProps) {
  const isVertical = orientation === 'vertical'

  return (
    <li className="w-full">
      <Link
        href={`/video/${video.id}`}
        className={isVertical ? 'flex flex-col' : 'flex items-start gap-4'}
      >
        <Image
          className={
            (isVertical ? 'w-full max-h-48' : 'w-32') + ' object-cover mb-4'
          }
          src={video.snippet?.thumbnails?.medium?.url}
          alt={video.snippet?.title}
          width={320}
          height={120}
        />
        <h2>{video.snippet?.title}</h2>
      </Link>
    </li>
  )
}
