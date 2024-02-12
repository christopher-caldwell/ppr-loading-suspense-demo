import { Suspense } from 'react'
import { NextPage } from 'next'

import { BeerResults, LoadingFallback } from '@/features/results'

const Page: NextPage<HomeProps> = ({ searchParams }) => {
  return (
    <>
      <Suspense key={JSON.stringify(searchParams)} fallback={<LoadingFallback />}>
        <p className="mb-5">
          This page <strong>does</strong> have a key on <pre className="text-red-400 inline">{'<Suspense />'}</pre>,
          making it a Dynamic page
        </p>
        <BeerResults searchParams={searchParams} />
      </Suspense>
    </>
  )
}

type HomeProps = {
  searchParams: Record<string, string>
}

export default Page
