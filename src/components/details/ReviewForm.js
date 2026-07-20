"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/Select.js";
import { Button } from "@/components/ui/Button.js";
import { StarRating } from "@/components/ui/StarRating.js";
import { useReviewMutations } from "@/lib/hooks/useReviews.js";
import { useToast } from "@/components/ui/Toast.js";

export function ReviewForm({ opportunityId }) {
  const { create } = useReviewMutations(opportunityId);
  const { toast } = useToast();
  const [submitError, setSubmitError] = useState("");
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { rating: 0, comment: "" } });

  const onSubmit = async (values) => {
    setSubmitError("");
    if (!values.rating) {
      setSubmitError("Pick a star rating before submitting.");
      return;
    }
    try {
      await create.mutateAsync(values);
      reset({ rating: 0, comment: "" });
      toast({ title: "Review posted", variant: "success" });
    } catch (err) {
      setSubmitError(err.message || "Could not submit your review.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3" noValidate>
      <Controller
        control={control}
        name="rating"
        render={({ field }) => (
          <StarRating value={field.value} interactive size={22} onChange={field.onChange} />
        )}
      />
      <Textarea
        placeholder="What was your experience actually like?"
        error={errors.comment?.message}
        {...register("comment", { maxLength: { value: 800, message: "Keep it under 800 characters" } })}
      />
      {submitError && <p className="text-xs text-danger">{submitError}</p>}
      <Button type="submit" size="sm" className="self-start" loading={isSubmitting}>
        Post review
      </Button>
    </form>
  );
}
