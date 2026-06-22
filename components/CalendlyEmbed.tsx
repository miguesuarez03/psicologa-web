"use client";

import { useEffect } from "react";

export function CalendlyEmbed({ url, height = 680 }: { url: string; height?: number }) {
  useEffect(() => {
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
      className="calendly-inline-widget"
      data-url={`${url}?hide_gdpr_banner=1&background_color=faf9f6&text_color=181613&primary_color=7a3e28`}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
}
