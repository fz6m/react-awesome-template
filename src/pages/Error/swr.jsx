import useSWR from 'swr'

import { fetcher } from '@/utils/swr'

const SwrExample = () => {
  // 3. useSWR async api
  const { data, error } = useSWR(
    '/get_swr',
    fetcher({
      params: {
        key: 'value',
      },
    })
  )

  if (error) return <div>error</div>
  if (!data) return <div>loading...</div>
  return <div>success!</div>
}

export default SwrExample
