"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuthMutations } from "@/lib/hooks/useAuth.js";
import { Input } from "@/components/ui/Input.js";
import { Button } from "@/components/ui/Button.js";
import { useToast } from "@/components/ui/Toast.js";

export function LoginForm({ redirectTo = "/explore" }) {
  const { login } = useAuthMutations();
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await login.mutateAsync(values);
      toast({ title: "Welcome back", variant: "success" });
      router.push(redirectTo);
    } catch (err) {
      setError("root", { message: err.message || "Invalid email or password." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <Input
        label="Email"
        type="email"
        placeholder="you@university.edu"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
        })}
      />
      <Input
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        {...register("password", { required: "Password is required" })}
      />

      {errors.root && <p className="text-xs text-danger">{errors.root.message}</p>}

      <Button type="submit" className="mt-1 w-full" loading={isSubmitting}>
        Log in
      </Button>
    </form>
  );
}
