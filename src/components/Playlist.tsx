import { Play } from 'lucide-react'
import Image from 'next/image'

interface PlaylistProps {
    name: string,
    src: string,
    altImage: string,
    href?: string,
}

export default function Playlist({ name, src, altImage, href }: PlaylistProps) {
    return (
        <a href={
            href
                ? href
                : '#'
        } className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
            <div className='w-28 h-28 relative'>
                <Image
                    src={src}
                    layout="fill"
                    alt={altImage}
                />
            </div>
            <strong>{name}</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
            </button>
        </a>
    )
}