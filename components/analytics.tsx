"use client"

import { GoogleAnalytics } from "nextjs-google-analytics"

import { env } from "@/env"

export function Analytics() {
  return (
    <GoogleAnalytics
      trackPageViews
      gaMeasurementId={env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
    />
  )
}
