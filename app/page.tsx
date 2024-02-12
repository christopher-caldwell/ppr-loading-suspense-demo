import { Suspense } from 'react'

import { BeerResults } from '@/features/results'
import { NextPage } from 'next'

const HomePage: NextPage<HomeProps> = ({ searchParams }) => {
  return (
    <div>
      <h1 className="mt-10 text-2xl font-bold">Partial Prerender Suspense Demo</h1>
      <p>
        The API call is set to revalidate after 30 seconds. I have also added an artificial delay of 3 seconds to better
        emphasis the initial load vs subsequent navigation.
      </p>
      <h3 className="mt-5 text-lg font-bold">What I have tried:</h3>
      <ul className="list-disc pl-5">
        <li>
          Calling <pre className="text-red-400 inline">router.refresh()</pre> when navigating. Nothing happens that I can see
        </li>
        <li>
          Adding a key to the <pre className="text-red-400 inline">{'<Suspense />'}</pre> of{' '}
          <pre className="text-red-400 inline">{'JSON.stringify(searchParams)'}</pre>, which fixes the issue in local development,
          but has no effect on the hosted version. This also makes the entire route dynamic, which defeats the purpose
          of it. However, I would take that as a tradeoff if it worked.
        </li>
      </ul>
      <p className="border-b-2  pb-5 mt-5 mb-10">The content below this line is wrapped in a suspense.</p>
      <Suspense key={JSON.stringify(searchParams)} fallback={<p>Loading ...</p>}>
        <BeerResults searchParams={searchParams} />
      </Suspense>
      <p className="mt-100 mb-10 pt-5 mt-10 border-t-2">
        This content below this line is static, and below the suspense
      </p>
    </div>
  )
}

type HomeProps = {
  searchParams: Record<string, string>
}

export default HomePage
