import Editor from '@/components/editor'
import Navbar from '@/components/navbar'
import Results from '@/components/result'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='flex flex-col gap-3'>
      <Navbar />
      <Editor />
      <Results />
    </main>
  )
}
