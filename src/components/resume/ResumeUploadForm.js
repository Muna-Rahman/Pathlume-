"use client";

import { useState } from "react";
import { FileDropzone } from "@/components/ui/FileDropzone.js";
import { Button } from "@/components/ui/Button.js";
import { useUploadResume } from "@/lib/hooks/useResumeAnalysis.js";
import { useToast } from "@/components/ui/Toast.js";

export function ResumeUploadForm({ onAnalyzed }) {
  const [file, setFile] = useState(null);
  const upload = useUploadResume();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    try {
      const analysis = await upload.mutateAsync({ file });
      onAnalyzed?.(analysis);
      toast({ title: "Resume analyzed", description: "Scroll down to see your results.", variant: "success" });
    } catch (err) {
      toast({ title: "Couldn't analyze this resume", description: err.message || "Please try again.", variant: "error" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <FileDropzone onFileSelect={setFile} />
      {upload.isError && <p className="text-sm text-danger">{upload.error.message}</p>}
      <Button type="submit" disabled={!file} loading={upload.isPending} className="self-start">
        Analyze resume
      </Button>
    </form>
  );
}
