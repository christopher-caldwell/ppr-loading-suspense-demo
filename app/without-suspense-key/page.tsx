import { Suspense } from 'react'
import { NextPage } from 'next'

import { BeerResults, LoadingFallback } from '@/features/results'

const DoesNotHaveKeyPage: NextPage<HomeProps> = ({ searchParams }) => {
  return (
    <>
      <p className="my-5">
        This page <strong>does not</strong> have a key on {'<Suspense />'}, making it a PPR page. Interestingly, if I
        wrap the word "Suspense" in a "pre" html tag, it causes a hydration issue. I am unsure if it's related, and
        doesn't matter to much.
      </p>
      <p className="border-b-2 pb-5 my-5">The content below this line is wrapped in a suspense.</p>
      <Suspense fallback={<LoadingFallback />}>
        {/* <BeerResults searchParams={searchParams} /> */}
      </Suspense>
    </>
  )
}

type HomeProps = {
  searchParams: Record<string, string>
}

export default DoesNotHaveKeyPage
