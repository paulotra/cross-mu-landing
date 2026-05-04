export default function VideoPlayer({ id }: { id: string }) {
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
      ></iframe>
    </div>
  )
}
