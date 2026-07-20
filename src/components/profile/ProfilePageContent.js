"use client";

import { ProtectedRoute, useRequireAuth } from "@/components/auth/ProtectedRoute.js";
import { StudentProfileForm } from "@/components/profile/StudentProfileForm.js";
import { EmployerProfileForm } from "@/components/profile/EmployerProfileForm.js";

function ProfileContent() {
  const { user } = useRequireAuth();

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <span className="eyebrow">Your profile</span>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
        {user.role === "employer" ? "Company profile" : "Student profile"}
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        {user.role === "employer"
          ? "Tell students a bit about your company - this shows up wherever you post."
          : "The more complete this is, the better your recommendations get."}
      </p>

      <div className="mt-8">
        {user.role === "employer" ? <EmployerProfileForm /> : <StudentProfileForm />}
      </div>
    </div>
  );
}

export function ProfilePageContent() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}
