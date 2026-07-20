"use client";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useEffect } from "react";
import { Input } from "@/components/ui/Input.js";
import { Select, Textarea } from "@/components/ui/Select.js";
import { Button } from "@/components/ui/Button.js";
import { TagInput } from "@/components/ui/TagInput.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { OPPORTUNITY_TYPES } from "@/lib/constants/opportunityTypes.js";
import { useMyProfile, useUpdateProfile } from "@/lib/hooks/useProfile.js";
import { SkeletonBlock } from "@/components/ui/Skeleton.js";
import { useToast } from "@/components/ui/Toast.js";

export function StudentProfileForm() {
  const { data: profile, isLoading } = useMyProfile();
  const update = useUpdateProfile();
  const { toast } = useToast();

  const { control, register, handleSubmit, reset, formState: { isSubmitting, isDirty } } = useForm({
    defaultValues: { skills: [], interests: [], experience: [], preferredLocation: "", preferredType: "" },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "experience" });

  useEffect(() => {
    if (profile) {
      reset({
        skills: profile.skills || [],
        interests: profile.interests || [],
        experience: (profile.experience || []).map((exp) => ({
          ...exp,
          startDate: exp.startDate ? String(exp.startDate).slice(0, 10) : "",
          endDate: exp.endDate ? String(exp.endDate).slice(0, 10) : "",
        })),
        preferredLocation: profile.preferredLocation || "",
        preferredType: profile.preferredType || "",
      });
    }
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
        <Controller
          control={control}
          name="skills"
          render={({ field }) => (
            <TagInput label="Skills" value={field.value} onChange={field.onChange} placeholder="e.g. react, python..." tone="path" />
          )}
        />
        <Controller
          control={control}
          name="interests"
          render={({ field }) => (
            <TagInput label="Interests" value={field.value} onChange={field.onChange} placeholder="e.g. frontend, data..." tone="nebula" />
          )}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Preferred location" placeholder="e.g. Sylhet" {...register("preferredLocation")} />
          <Select label="Preferred type" {...register("preferredType")}>
            <option value="">No preference</option>
            {OPPORTUNITY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </Select>
        </div>
      </GlassPanel>

      <GlassPanel className="flex flex-col gap-5 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-xs uppercase tracking-wide text-ink-muted">Experience</h3>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => append({ title: "", organization: "", description: "", startDate: "", endDate: "" })}
          >
            + Add experience
          </Button>
        </div>

        {fields.length === 0 && <p className="text-sm text-ink-faint">No experience added yet.</p>}

        {fields.map((field, index) => (
          <div key={field.id} className="flex flex-col gap-3 rounded-xl border border-white/[0.06] p-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input label="Title" placeholder="e.g. Software Intern" {...register(`experience.${index}.title`)} />
              <Input label="Organization" placeholder="e.g. Acme Co" {...register(`experience.${index}.organization`)} />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Input label="Start date" type="date" {...register(`experience.${index}.startDate`)} />
              <Input label="End date" type="date" {...register(`experience.${index}.endDate`)} />
            </div>
            <Textarea label="Description" placeholder="What did you work on?" {...register(`experience.${index}.description`)} />
            <Button type="button" variant="ghost" size="sm" className="self-start text-danger" onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
        ))}
      </GlassPanel>

      {update.isError && <p className="text-sm text-danger">{update.error.message}</p>}
      {update.isSuccess && !isDirty && <p className="text-sm text-path">Profile saved.</p>}

      <Button type="submit" loading={isSubmitting || update.isPending} className="self-start">
        Save profile
      </Button>
    </form>
  );
}
