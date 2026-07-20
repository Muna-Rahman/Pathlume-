import { OpportunityDetailContent } from "@/components/details/OpportunityDetailContent.js";

export const metadata = { title: "Opportunity details - Pathlume" };

export default function OpportunityDetailPage({ params }) {
  return <OpportunityDetailContent id={params.id} />;
}
