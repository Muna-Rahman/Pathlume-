"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils/cn.js";

export function FileDropzone({ onFileSelect, accept = "application/pdf", label = "Drop your PDF here, or click to browse" }) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFiles = (files) => {
    const file = files?.[0];
    if (!file) return;
    setFileName(file.name);
    onFileSelect(file);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      className={cn(
        "flex cursor-pointer flex-col items-center gap-2 rounded-xl2 border border-dashed px-6 py-10 text-center transition-colors",
        isDragging ? "border-path bg-path/5" : "border-white/15 hover:border-white/25"
      )}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-path">
        <path d="M12 15V4M12 4l-4 4M12 4l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <p className="text-sm text-ink-muted">{fileName || label}</p>
      <p className="text-xs text-ink-faint">PDF, up to 5MB</p>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
