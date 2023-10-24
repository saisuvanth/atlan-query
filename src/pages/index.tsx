import Editor from '@/components/editor'
import Navbar from '@/components/navbar'
import Results from '@/components/result'
import MainWrapper from '@/layout/main-wrapper';
import { getQueryData } from '@/util/query';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';


export default function Home() {
  const router = useRouter();
  const [initialQuery, setInitialQuery] = useState<string>('SELECT * FROM products;');
  const [queryData, setQueryData] = useState<object[]>(getQueryData(''));

  const updateQueryData = (query: string) => {
    if (query) {
      const data = getQueryData(query);
      toast.success('Query executed successfully');
      setQueryData(data);
    }
  }

  useEffect(() => {
    const query = router.query.query as string;
    if (query) {
      setInitialQuery(query);
      updateQueryData(query);
    }
  }, [router.query])

  return (
    <MainWrapper title='SQL Query Editor' content='SQL Query Editor' active=''>
      <Editor defaultQuery={initialQuery} updateQueryData={updateQueryData} />
      <Results data={queryData} />
    </MainWrapper>
  )
}
