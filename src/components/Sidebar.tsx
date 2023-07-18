import { Home, Search, Library } from 'lucide-react'
import Playlists from '@/components/Playlists'

export default function Sidebar() {
    return (
        <aside className='w-72 bg-zinc-950 p-6'>
            <div className='flex items-center gap-2 mb-10'>
                <div className='w-3 h-3 bg-red-500 rounded-full' />
                <div className='w-3 h-3 bg-yellow-500 rounded-full' />
                <div className='w-3 h-3 bg-green-500 rounded-full' />
            </div>
            <nav className='space-y-5'>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Home size={24} />
                    Home
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Search size={24} />
                    Search
                </a>
                <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <Library size={24} />
                    Your Library
                </a>
            </nav>
            <Playlists />
        </aside>

    )
}