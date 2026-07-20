import { Hero } from "@/components/landing/Hero.js";
import { HowItWorks } from "@/components/landing/HowItWorks.js";
import { FeaturedOpportunities } from "@/components/landing/FeaturedOpportunities.js";
import { Categories } from "@/components/landing/Categories.js";
import { Statistics } from "@/components/landing/Statistics.js";
import { ResumePreview } from "@/components/landing/ResumePreview.js";
import { Testimonials } from "@/components/landing/Testimonials.js";
import { FAQ } from "@/components/landing/FAQ.js";
import { Newsletter } from "@/components/landing/Newsletter.js";

export const metadata = {
  title: "Pathlume - Find your next step",
  description:
    "Pathlume matches students with internships and early-career opportunities worth applying to. Get ranked recommendations, resume gap analysis, and honest matching - no noise.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedOpportunities />
      <Categories />
      <Statistics />
      <ResumePreview />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  );
}
