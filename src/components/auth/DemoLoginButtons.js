"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthMutations } from "@/lib/hooks/useAuth.js";
import { Button } from "@/components/ui/Button.js";

const DEMO_ROLES = [
  { role: "student", label: "Try as a student" },
  { role: "employer", label: "Try as an employer" },
];

export function DemoLoginButtons({ redirectTo = "/explore" }) {
  const { demo } = useAuthMutations();
  const [pendingRole, setPendingRole] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleClick = async (role) => {
    setError("");
    setPendingRole(role);
    try {
      await demo.mutateAsync(role);
      router.push(redirectTo);
    } catch (err) {
      setError(err.message || "Could not start the demo session.");
    } finally {
      setPendingRole(null);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {DEMO_ROLES.map(({ role, label }) => (
          <Button
            key={role}
            type="button"
            variant="outline"
            size="sm"
            loading={pendingRole === role}
            disabled={demo.isPending}
            onClick={() => handleClick(role)}
          >
            {label}
          </Button>
        ))}
      </div>
      {error && <p className="mt-2 text-center text-xs text-danger">{error}</p>}
    </div>
  );
}
