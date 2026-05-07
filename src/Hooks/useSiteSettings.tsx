"use client";

import { useEffect, useState } from "react";
import { DEFAULT_SITE_SETTINGS, type SiteSettings } from "@/lib/siteSettings.shared";

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SITE_SETTINGS);

  useEffect(() => {
    let active = true;
    void fetch("/api/site-settings", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        if (!active || !json || typeof json !== "object" || !("settings" in json)) return;
        setSettings((json as { settings: SiteSettings }).settings);
      })
      .catch(() => {
        /** keep defaults */
      });
    return () => {
      active = false;
    };
  }, []);

  return settings;
}
