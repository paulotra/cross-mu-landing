export default async function Home() {
  return (
    <div className="min-h-[1000px]">
      <section className="relative flex min-h-screen w-full overflow-visible">
        {/* Base background image */}
        <img
          src="/home/hero.png"
          alt=""
          className="absolute inset-0 w-full object-cover object-top-right"
        />

        <div className="flex max-w-1/2 flex-1 items-center justify-center">
          <img src="/logo-emblem.png" alt="" className="relative max-w-[476px]" />
        </div>

        {/* Video overlay — blended on top of background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 mt-20 mr-10 w-[720px]"
          style={{
            maskImage: [
              'linear-gradient(to right, transparent 0%, black 25%)',
              'linear-gradient(to left, transparent 0%, black 10%)',
              'linear-gradient(to top, transparent 0%, black 20%)',
              'linear-gradient(to bottom, transparent 0%, black 10%)',
            ].join(', '),
            maskComposite: 'intersect',
          }}
        >
          <source src="/home/character.mp4" type="video/mp4" />
        </video>
      </section>
      <div className="relative">
        <img src="/bg-strip.png" alt="" className="absolute inset-0 top-[-480px] z-10 w-full" />
      </div>
    </div>
  )
}
