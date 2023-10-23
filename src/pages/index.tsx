import Editor from '@/components/editor'
import Navbar from '@/components/navbar'
import Results from '@/components/result'
import { getQueryData } from '@/util/query';
import { useState } from 'react'


export default function Home() {
  const [queryData, setQueryData] = useState<object[]>(getQueryData(''));

  const updateQueryData = (query: string) => {
    const data = getQueryData(query);
    setQueryData(data);
  }

  return (
    <main className='h-screen max-h-screen flex gap-3'>
      <Navbar active='' />
      <div className='flex flex-col w-5/6 py-2 gap-3'>
        <Editor updateQueryData={updateQueryData} />
        <Results data={queryData} />
      </div>
    </main>
  )
}
