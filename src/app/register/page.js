import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard.js";
import { RegisterForm } from "@/components/auth/RegisterForm.js";
import { SocialLoginButton } from "@/components/auth/SocialLoginButton.js";

export const metadata = { title: "Create account - Pathlume" };

export default function RegisterPage() {
  return (
    <AuthCard
      eyebrow="Get started"
      title="Create your account"
      subtitle="Takes about two minutes. No credit card, ever."
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="text-path hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <RegisterForm />

      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">or</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <SocialLoginButton />
    </AuthCard>
  );
}
