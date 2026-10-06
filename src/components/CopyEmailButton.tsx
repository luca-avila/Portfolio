"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/Icons";

// Copia el email al portapapeles; el estado se anuncia por `aria-live`.
export default function CopyEmailButton({
  email,
  label,
  copiedLabel,
}: {
  email: string;
  label: string;
  copiedLabel: string;
}): React.JSX.Element {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function handleCopy(): Promise<void> {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Sin permiso de portapapeles: el enlace `mailto:` sigue disponible.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-2 text-sm font-semibold text-neutral-100 transition-all hover:border-white/30 hover:bg-white/5 active:scale-[0.98]"
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-emerald-400" />
      ) : (
        <CopyIcon className="h-4 w-4" />
      )}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
