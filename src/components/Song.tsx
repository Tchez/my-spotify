import Image from 'next/image'

interface SongProps {
    name: string,
    src: string,
    altImage: string,
    href?: string,
    description?: string,
}

export default function Song({ name, description, src, altImage, href }: SongProps) {
    return (
        <a href={href ? href : '#'} className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <Image
                src={src}
                width={104}
                height={104}
                alt={altImage}
                className='w-full'
            />
            <strong className='font-semibold'>{name}</strong>
            <span className='text-sm text-zinc-400'>{description}</span>
        </a>
    )
}