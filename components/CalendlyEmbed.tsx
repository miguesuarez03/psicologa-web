"use client";

import { useEffect, useRef } from "react";

export function CalendlyEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Avoid injecting the script more than once
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={ref}
      className="calendly-inline-widget border border-hair bg-paper"
      data-url={`${url}?hide_gdpr_banner=1&background_color=faf9f6&text_color=181613&primary_color=1a2736`}
      style={{ minWidth: "320px", height: "680px" }}
    />
  );
}
