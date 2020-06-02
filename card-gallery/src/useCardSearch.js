import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useCardSearch(query, page) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [cards, setCards] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setCards([])
  }, [query])

  useEffect(() => {
    setError(false)
    setLoading(true)
    let cancel
    axios({
      method: 'GET',
      url: 'https://api.elderscrollslegends.io/v1/cards',
      params: { name: query, pageSize: 20, page: page },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        setCards((prevCards) => {
          return [...prevCards, ...response.data.cards]
        })
        setLoading(false)
        setHasMore(response.data.cards.length > 0)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        setError(true)
        console.log(err)
      })
    return () => cancel()
  }, [query, page])
  return { loading, error, cards, hasMore }
}
