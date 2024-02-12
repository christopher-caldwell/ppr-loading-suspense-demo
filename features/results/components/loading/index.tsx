import { FC } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const loadingData = new Array(10).fill(0)
export const LoadingFallback: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {loadingData.map((beer) => (
        <Card key={beer} className="display-flex">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-4" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-4" />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-28" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
