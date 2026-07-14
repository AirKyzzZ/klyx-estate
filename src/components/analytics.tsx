"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function Analytics() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key || posthog.__loaded) return;
    posthog.init(key, {
      api_host: "https://eu.i.posthog.com",
      capture_pageview: true,
      autocapture: false,
    });
  }, []);

  return null;
}
