import { memo, useLayoutEffect } from 'react';

import { useLayoutStore } from '@/store';

type FetchPageDataProps = {
  fetchers: (() => void)[];
};

const FetchPageData = ({ fetchers }: FetchPageDataProps) => {
  const setLoading = useLayoutStore((state) => state.setIsLoading);
  console.log('rendering');

  useLayoutEffect(() => {
    (async () => {
      setLoading(true);
      try {
        if (fetchers.length === 0) {
          setLoading(false);
          return;
        }

        fetchers.map((fetcher) => fetcher());
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [fetchers, setLoading]);

  return null;
};

export default memo(FetchPageData);
