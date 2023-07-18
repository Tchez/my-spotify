import { ChevronLeft, ChevronRight } from 'lucide-react'
import Playlist from '@/components/Playlist'
import playlistsMock from '@/mocks/playlistsMock.json'
import Song from '@/components/Song'

interface PlaylistProps {
  name: string,
  src: string,
  altImage: string,
}

interface SongProps {
  name: string,
  src: string,
  altImage: string,
  href?: string,
  description?: string,
}

export default async function Home() {
  return (
    <>
      <div className='flex items-center gap-4'>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronLeft size={24} />
        </button>
        <button className='rounded-full bg-black/40 p-1'>
          <ChevronRight size={24} />
        </button>
      </div>
      <h1 className='font-semibold text-3xl mt-10'>Made for Marco Antônio</h1>

      <div className='grid grid-cols-3 gap-4 mt-4'>
        {playlistsMock[0].map((playlist: PlaylistProps) => (
          <Playlist key={playlist.name} {...playlist} />
        ))}
      </div>

      <h2 className='font-semibold text-2xl mt-10'>Most listened songs</h2>

      <div className='grid grid-cols-5 gap-4 mt-4'>
        {playlistsMock[1].map((song: SongProps) => (
          <Song key={song.name} {...song} />
        ))}
      </div>
    </>
  )
}
