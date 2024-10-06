"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  text?: string;
  className?: string;
}

export function BackButton({ text, className }: BackButtonProps) {
  const router = useRouter();

  return (
    <Button variant="link" className={className} onClick={() => router.back()}>
      {text || "Go Back"}
    </Button>
  )
}