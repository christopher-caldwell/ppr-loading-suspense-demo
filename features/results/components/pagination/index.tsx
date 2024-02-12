import { FC } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export const BeerPagination: FC<BeerPaginationProps> = ({ page }) => {
  const canGoBack = page > 1
  const prevHref = canGoBack ? { href: '/', query: { page: page - 1 } } : { href: '#' }
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevHref} />
        </PaginationItem>
        {canGoBack ? (
          <PaginationItem>
            <PaginationLink
              href={{
                href: '/',
                query: {
                  page: page - 1,
                },
              }}
            >
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        ) : null}

        <PaginationItem>
          <PaginationLink
            href={{
              href: '/',
              query: {
                page: page,
              },
            }}
            isActive
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={{
              href: '/',
              query: {
                page: page + 1,
              },
            }}
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={{
              href: '/',
              query: {
                page: page + 2,
              },
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

type BeerPaginationProps = {
  page: number
}
