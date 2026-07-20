"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/Input.js";
import { Select, Textarea } from "@/components/ui/Select.js";
import { Button } from "@/components/ui/Button.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { SkeletonBlock } from "@/components/ui/Skeleton.js";
import { useMyEmployerProfile, useUpdateEmployerProfile } from "@/lib/hooks/useEmployerProfile.js";
import { useToast } from "@/components/ui/Toast.js";

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "500+"];

export function EmployerProfileForm() {
  const { data: profile, isLoading } = useMyEmployerProfile();
  const update = useUpdateEmployerProfile();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    defaultValues: { companyName: "", industry: "", companySize: "", website: "", location: "", description: "" },
  });

  useEffect(() => {
    if (profile) reset(profile);
  }, [profile, reset]);

  const onSubmit = (values) =>
    update.mutate(values, {
      onSuccess: () => toast({ title: "Profile saved", variant: "success" }),
      onError: (err) => toast({ title: "Couldn't save profile", description: err.message, variant: "error" }),
    });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <SkeletonBlock className="h-12 w-full" />
        <SkeletonBlock className="h-12 w-full" />
        <SkeletonBlock className="h-32 w-full" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <GlassPanel className="flex flex-col gap-5 p-5">
        <Input
          label="Company name"
          placeholder="Acme Co"
          error={errors.companyName?.message}
          {...register("companyName", { required: "Company name is required" })}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Industry" placeholder="e.g. Software" {...register("industry")} />
          <Select label="Company size" {...register("companySize")}>
            <option value="">Prefer not to say</option>
            {COMPANY_SIZES.map((size) => (
              <option key={size} value={size}>{size} employees</option>
            ))}
          </Select>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Website"
            placeholder="https://example.com"
            error={errors.website?.message}
            {...register("website", {
              pattern: { value: /^https?:\/\/[^\s]+$/i, message: "Must start with http:// or https://" },
            })}
          />
          <Input label="Location" placeholder="e.g. Dhaka" {...register("location")} />
        </div>
        <Textarea label="About the company" placeholder="What does your company do?" {...register("description")} />
      </GlassPanel>

      {update.isError && <p className="text-sm text-danger">{update.error.message}</p>}
      {update.isSuccess && !isDirty && <p className="text-sm text-path">Profile saved.</p>}

      <Button type="submit" loading={isSubmitting || update.isPending} className="self-start">
        Save profile
      </Button>
    </form>
  );
}
