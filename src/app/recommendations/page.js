import { RecommendationsPageContent } from "@/components/recommendations/RecommendationsPageContent.js";

export const metadata = {
  title: "Your recommendations - Pathlume",
  description: "Opportunities ranked by skill fit, location, preferred type, and your activity.",
};

export default function RecommendationsPage() {
  return <RecommendationsPageContent />;
}
