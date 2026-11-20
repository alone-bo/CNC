import { industryDetails } from '../data/industryDetails'
import { ServiceDataView } from './GenericServicePage'

export function IndustryDetailPage({ slug }: { slug: string }) {
  const data = industryDetails[slug]
  if (!data) return null
  return <ServiceDataView data={data} parentLabel="Industries" parentHref="#/industries" />
}
