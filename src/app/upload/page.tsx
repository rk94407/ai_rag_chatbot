// src/components/PDFUploadButton.tsx
"use client";

import { useState, useRef } from "react";
import { processPdfFile } from "@/app/upload/actions";
import { Button } from "@/components/ui/button";
import { Loader2, Upload } from "lucide-react";

export default function PDFUploadButton() {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click(); // 👈 opens hidden file picker
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("pdf", file);
      await processPdfFile(formData);
      e.target.value = "";
    } catch (err) {
      console.error("PDF upload failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hidden input */}
      <input
        type="file"
        accept=".pdf"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
        placeholder="Upload PDF"
      />

      {/* Icon button */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Upload className="h-5 w-5" />
        )}
      </Button>
    </>
  );
}
