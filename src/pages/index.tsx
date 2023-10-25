import Editor from '@/components/editor'
import Results from '@/components/result'
import MainWrapper from '@/layout/main-wrapper';
import { getQueryData } from '@/util/query';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex';
import 'react-reflex/styles.css'
import { useTheme } from 'next-themes';

export default function Home() {
  const router = useRouter();
  const { theme } = useTheme();
  const [initialQuery, setInitialQuery] = useState<string>('SELECT * FROM products;');
  const [queryData, setQueryData] = useState<object[]>(getQueryData(''));

  const updateQueryData = (query: string) => {
    if (query) {
      const data = getQueryData(query);
      toast.success('Query executed successfully', { theme: theme === "dark" ? "dark" : "light" });
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
      <ReflexContainer orientation='horizontal'>
        <ReflexElement minSize={250} >
          <Editor defaultQuery={initialQuery} updateQueryData={updateQueryData} />
        </ReflexElement>
        <ReflexSplitter className='gutter' />
        <ReflexElement minSize={300}>
          <Results data={queryData} />
        </ReflexElement>
      </ReflexContainer>
    </MainWrapper>
  )
}
