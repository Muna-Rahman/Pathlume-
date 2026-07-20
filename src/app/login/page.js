import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard.js";
import { LoginForm } from "@/components/auth/LoginForm.js";
import { SocialLoginButton } from "@/components/auth/SocialLoginButton.js";
import { DemoLoginButtons } from "@/components/auth/DemoLoginButtons.js";

export const metadata = { title: "Log in - Pathlume" };

export default function LoginPage() {
  return (
    <AuthCard
      eyebrow="Welcome back"
      title="Log in to Pathlume"
      subtitle="Pick up right where you left off."
      footer={
        <>
          New here?{" "}
          <Link href="/register" className="text-path hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />

      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">or</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="flex flex-col gap-3">
        <SocialLoginButton />
        <DemoLoginButtons />
      </div>
    </AuthCard>
  );
}
