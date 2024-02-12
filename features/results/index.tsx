import { FC } from 'react'

import { getBeers } from './api'
import { BeerCard } from './componnets/card'
import { BeerPagination } from './componnets/pagination'

export const BeerResults: FC<BeerResultsProps> = async ({ searchParams }) => {
  const pageNumber = Number(searchParams.page ?? '1')
  const beers = await getBeers(pageNumber ?? 1)
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {beers.map((beer) => (
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
