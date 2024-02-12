import { Beer } from './types'

const apiUrl = 'https://api.punkapi.com/v2/beers'
// ?page=2&per_page=12

const per_page = 8

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const getBeers = async (page: number | string) => {
  await wait(3000)
  const response = await fetch(`${apiUrl}?page=${page}&per_page=${per_page}`, {
    next: {
      revalidate: 30, // 30 sec
    },
  })
  if (!response.ok) throw new Error('Failed to fetch beers')

  const data = await response.json()

  return data as Beer[]
}
