import Link from "next/link";
import { GlassPanel } from "@/components/ui/GlassPanel.js";

export const metadata = {
  title: "Privacy Policy - Pathlume",
  description: "How Pathlume collects, uses, and protects your data.",
};

const SECTIONS = [
  {
    title: "1. What we collect",
    body: [
      "Account details you provide directly: name, email, password (hashed, never stored in plain text), and role (student or employer).",
      "Profile data you choose to add: skills, interests, experience, preferred location/type, or company details for employers.",
      "Content you create: opportunity listings, reviews, saved/applied/dismissed interactions, contact messages, and uploaded resumes.",
      "Basic technical data such as request logs, used only for security and reliability, not advertising.",
    ],
  },
  {
    title: "2. How we use it",
    body: [
      "To operate your account: authentication, sessions, and role-based access to student or employer features.",
      "To generate recommendations: our rule-based matching engine compares your profile against opportunity data - it does not send your data to a third-party AI model.",
      "To analyze resumes you upload: extraction happens against a fixed skills taxonomy on our own server; files are stored only to show you your own analysis history.",
      "To respond to messages you send us through the contact form.",
    ],
  },
  {
    title: "3. What we don't do",
    body: [
      "We don't sell your data.",
      "We don't share your profile or resume with employers unless you apply or otherwise interact with their listing.",
      "We don't run third-party advertising trackers on this platform.",
    ],
  },
  {
    title: "4. Data retention & control",
    body: [
      "You can update or clear most profile fields at any time from your Profile page.",
      "You can delete individual saved/applied/dismissed interactions and your own reviews.",
      "Account deletion requests can be sent through the Contact page.",
    ],
  },
  {
    title: "5. Third-party sign-in",
    body: [
      "If you sign in with Google, we receive only the basic profile fields Google shares for authentication (name, email). We don't post on your behalf or access other Google data.",
    ],
  },
  {
    title: "6. Changes to this policy",
    body: [
      "This is a student-project platform built for coursework and portfolio purposes. As features change, this page will be updated to reflect current practice.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <span className="eyebrow">Legal</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.
        This page explains what Pathlume collects and how it's used, in plain language.
      </p>

      <div className="mt-8 flex flex-col gap-5">
        {SECTIONS.map((section) => (
          <GlassPanel key={section.title} className="p-5 md:p-6">
            <h2 className="font-display text-lg font-semibold text-ink">{section.title}</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {section.body.map((line, i) => (
                <li key={i} className="text-sm leading-relaxed text-ink-muted">
                  {line}
                </li>
              ))}
            </ul>
          </GlassPanel>
        ))}
      </div>

      <p className="mt-8 text-xs text-ink-faint">
        Questions about this policy? Reach out through the{" "}
        <Link href="/contact" className="text-path hover:underline">
          Contact page
        </Link>
        .
      </p>
    </div>
  );
}
