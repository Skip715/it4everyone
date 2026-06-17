import Image from 'next/image'

export default function Logo({ size = 52 }: { size?: number }) {
  return (
    <div className="flex items-center">
      <Image
        src="/logo.jpg"
        alt="IT4Everyone Ltd — Your Dell Specialist"
        width={size * 2.2}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  )
}
