import { EditOpportunityPageContent } from "@/components/manage/EditOpportunityPageContent.js";

export const metadata = {
  title: "Edit opportunity - Pathlume",
  description: "Update the details of your posted opportunity.",
};

export default function EditOpportunityPage({ params }) {
  return <EditOpportunityPageContent id={params.id} />;
}
