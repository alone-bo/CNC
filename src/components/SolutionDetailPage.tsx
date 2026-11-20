import { solutionDetails } from '../data/solutions'
import { ServiceDataView } from './GenericServicePage'

export function SolutionDetailPage({ slug }: { slug: string }) {
  const data = solutionDetails[slug]
  if (!data) return null
  return <ServiceDataView data={data} parentLabel="Solutions" parentHref="#/solutions" />
}
