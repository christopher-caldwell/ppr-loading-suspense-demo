import { FC } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

import { Beer } from '../../api/types'

export const BeerCard: FC<BeerCardProps> = ({ name, description, first_brewed, contributed_by }) => {
  return (
    <Card className="display-flex">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>First Brewed: {first_brewed}</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>
    </Card>
  )
}

type BeerCardProps = Beer
