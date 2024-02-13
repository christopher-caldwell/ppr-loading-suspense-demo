'use client'
import { FC, useEffect, useState } from 'react'

import getBeers from './api'
import { BeerPagination, BeerCard, LoadingFallback } from './components'
import { Beer } from './api/types'

export const BeerResults: FC<BeerResultsProps> = async ({ searchParams }) => {
  const pageNumber = Number(searchParams.page ?? '1')
  const [{ data, isLoading }, setReqStatus] = useState<{ isLoading: boolean; data: Beer[] }>({
    isLoading: true,
    data: [],
  })
  useEffect(() => {
    setReqStatus((current) => ({ ...current, isLoading: true }))
    getBeers(pageNumber)
      .then((data) => {
        // set state
        setReqStatus((current) => ({ ...current, isLoading: false, data }))
      })
      .catch((error) => {
        setReqStatus((current) => ({ ...current, isLoading: false }))
        console.error('Error fetching beers', error)
      })
  }, [pageNumber])
  if (isLoading) return <LoadingFallback />
  if (!data) return <p>There was an error fetching the data</p>

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {data.map((beer) => (
          <BeerCard key={beer.id} {...beer} />
        ))}
      </div>
      <BeerPagination page={pageNumber} />
    </>
  )
}

type BeerResultsProps = {
  searchParams: Record<string, string>
}

export { LoadingFallback } from './components'
