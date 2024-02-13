import { Suspense } from 'react'
import { NextPage } from 'next'

import { BeerResults, LoadingFallback } from '@/features/results'

const DoesHaveKeyPage: NextPage<HomeProps> = ({ searchParams }) => {
  return (
    <>
      <p className="my-5">
        This page <strong>does</strong> have a key on {'<Suspense />'}, making it a Dynamic page. Interestingly, if I
        wrap the word "Suspense" in a "pre" html tag, it causes a hydration issue. I am unsure if it's related, and
        doesn't matter to much.
      </p>
      <p className="border-b-2 pb-5 my-5">The content below this line is wrapped in a suspense.</p>

      <BeerResults searchParams={searchParams} />
    </>
  )
}

type HomeProps = {
  searchParams: Record<string, string>
}

export default DoesHaveKeyPage
