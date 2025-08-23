// app/hizmetler/page.tsx
import ServicesPageClient from "./services-client";

import { getSeoMetadata } from "@/hooks/useSeoMetadata";
import type { Metadata } from "next"


export const metadata: Metadata = getSeoMetadata("/projeler")
export default function ServicesPage() {
  return <ServicesPageClient />;
}
