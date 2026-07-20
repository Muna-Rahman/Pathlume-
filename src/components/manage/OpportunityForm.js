"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/Input.js";
import { Select, Textarea } from "@/components/ui/Select.js";
import { Button } from "@/components/ui/Button.js";
import { TagInput } from "@/components/ui/TagInput.js";
import { GlassPanel } from "@/components/ui/GlassPanel.js";
import { OPPORTUNITY_TYPES, OPPORTUNITY_STATUS_OPTIONS } from "@/lib/constants/opportunityTypes.js";
import { useOpportunityMutations } from "@/lib/hooks/useOpportunities.js";
import { useToast } from "@/components/ui/Toast.js";

const DEFAULT_VALUES = {
  title: "",
  companyName: "",
  description: "",
  type: "internship",
  location: "",
  remote: false,
  skillsRequired: [],
  tags: [],
  stipend: 0,
  deadline: "",
  applicationUrl: "",
  imageUrl: "",
  status: "active",
};

export function OpportunityForm({ opportunity }) {
  const router = useRouter();
  const { create, update } = useOpportunityMutations();
  const { toast } = useToast();
  const isEditing = Boolean(opportunity);

  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: DEFAULT_VALUES });

  useEffect(() => {
    if (opportunity) {
      reset({
        ...DEFAULT_VALUES,
        ...opportunity,
        deadline: opportunity.deadline ? String(opportunity.deadline).slice(0, 10) : "",
      });
    }
  }, [opportunity, reset]);

  const onSubmit = async (values) => {
    try {
      if (isEditing) {
        await update.mutateAsync({ id: opportunity._id, payload: values });
        toast({ title: "Changes saved", variant: "success" });
      } else {
        await create.mutateAsync(values);
        toast({ title: "Opportunity published", description: "Students can now discover this listing.", variant: "success" });
      }
      router.push("/manage");
    } catch (err) {
      setError("root", { message: err.message || "Could not save this opportunity." });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <GlassPanel className="flex flex-col gap-5 p-5">
        <Input
          label="Title"
          placeholder="e.g. Frontend Engineering Intern"
          error={errors.title?.message}
          {...register("title", { required: "Title is required", minLength: { value: 3, message: "Too short" } })}
        />
        <Input label="Company name" placeholder="Your company" {...register("companyName")} />
        <Textarea
          label="Description"
          placeholder="What will this person actually do?"
          error={errors.description?.message}
          {...register("description", {
            required: "Description is required",
            minLength: { value: 20, message: "Add a bit more detail (20+ characters)" },
          })}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <Select label="Type" {...register("type", { required: true })}>
            {OPPORTUNITY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </Select>
          <Select label="Status" {...register("status")}>
            {OPPORTUNITY_STATUS_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </Select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Input
            label="Location"
            placeholder="e.g. Dhaka"
            error={errors.location?.message}
            {...register("location", { required: "Location is required" })}
          />
          <label className="flex items-end gap-2.5 pb-2.5 text-sm text-ink-muted">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-void-soft accent-path" {...register("remote")} />
            This role is remote
          </label>
        </div>

        <Controller
          control={control}
          name="skillsRequired"
          render={({ field }) => (
            <TagInput label="Required skills" value={field.value} onChange={field.onChange} tone="path" />
          )}
        />
        <Controller
          control={control}
          name="tags"
          render={({ field }) => (
            <TagInput label="Tags" value={field.value} onChange={field.onChange} tone="nebula" placeholder="e.g. frontend, design..." />
          )}
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <Input label="Stipend (৳/mo)" type="number" min="0" {...register("stipend", { valueAsNumber: true })} />
          <Input label="Deadline" type="date" {...register("deadline")} />
          <Input label="Application URL" placeholder="https://..." {...register("applicationUrl")} />
        </div>

        <Input
          label="Image URL (optional)"
          placeholder="https://images.example.com/cover.jpg"
          error={errors.imageUrl?.message}
          {...register("imageUrl", {
            validate: (value) =>
              !value || /^https?:\/\/.+/i.test(value) || "Must be a valid http(s) URL",
          })}
        />
      </GlassPanel>

      {errors.root && <p className="text-sm text-danger">{errors.root.message}</p>}

      <div className="flex gap-3">
        <Button type="submit" loading={isSubmitting || create.isPending || update.isPending}>
          {isEditing ? "Save changes" : "Publish opportunity"}
        </Button>
        <Button type="button" variant="secondary" href="/manage">
          Cancel
        </Button>
      </div>
    </form>
  );
}