import Image from 'next/image'
import Button from '@/components/Button'
import CardTextured from '@/components/CardTextured'

export default function LoginForm() {
  return (
    <CardTextured className="col-span-4 pb-10">
      <h3 className="font-philosopher mb-6 flex items-center justify-center gap-x-4 text-xl font-bold">
        <Image src="/gem.png" alt="" width={24} height={16} />
        Account Panel
        <Image src="/gem.png" alt="" width={24} height={16} />
      </h3>
      <form action="" className="gap1-y-5 flex flex-col">
        <div className="relative bg-[#00000030]">
          <span className="absolute right-0 bottom-[-4px] left-0 h-[4px] bg-[url('/btn/btn-border-b.svg')]"></span>
          <input
            type="text"
            className="font-philosopher w-full py-4 text-center"
            placeholder="Username"
          />
        </div>
        <div className="relative bg-[#00000030]">
          <span className="absolute right-0 bottom-[-4px] left-0 h-[4px] bg-[url('/btn/btn-border-b.svg')]"></span>
          <input
            type="text"
            className="font-philosopher w-full py-4 text-center"
            placeholder="Password"
          />
        </div>
        <div className="mt-10 flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <a href="" className="text-sm">
              Lost password?
            </a>
            <a href="" className="text-sm text-[#78B9FF]">
              Registration
            </a>
          </div>
          <Button variant="default">Log in</Button>
        </div>
      </form>
    </CardTextured>
  )
}
