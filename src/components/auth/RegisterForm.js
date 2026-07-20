"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useAuthMutations } from "@/lib/hooks/useAuth.js";
import { Input } from "@/components/ui/Input.js";
import { Select } from "@/components/ui/Select.js";
import { Button } from "@/components/ui/Button.js";
import { useToast } from "@/components/ui/Toast.js";

export function RegisterForm({ redirectTo = "/explore" }) {
  const { register: registerMutation } = useAuthMutations();
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { role: "student" } });

  const password = watch("password");

  const onSubmit = async (values) => {
    try {
      await registerMutation.mutateAsync(values);
      toast({ title: "Account created", description: "Welcome to Pathlume.", variant: "success" });
      router.push(redirectTo);
    } catch (err) {
      setError("root", { message: err.message || "Could not create your account." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      <Input
        label="Full name"
        placeholder="Jordan Rahman"
        error={errors.name?.message}
        {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name is too short" } })}
      />
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
        placeholder="At least 8 characters"
        error={errors.password?.message}
        {...register("password", {
          required: "Password is required",
          minLength: { value: 8, message: "Use at least 8 characters" },
        })}
      />
      <Input
        label="Confirm password"
        type="password"
        placeholder="Re-enter your password"
        error={errors.confirmPassword?.message}
        {...register("confirmPassword", {
          required: "Confirm your password",
          validate: (value) => value === password || "Passwords don't match",
        })}
      />
      <Select label="I am a..." error={errors.role?.message} {...register("role", { required: true })}>
        <option value="student">Student, looking for opportunities</option>
        <option value="employer">Employer, posting opportunities</option>
      </Select>

      {errors.root && <p className="text-xs text-danger">{errors.root.message}</p>}

      <Button type="submit" className="mt-1 w-full" loading={isSubmitting}>
        Create account
      </Button>
    </form>
  );
}
