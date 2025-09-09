// app/hizmetler/page.tsx
import ServicesPageClient from "./services-client";

import { defaultMetadata, pageMetadata } from "@/seo-data";
import type { Metadata } from "next"


export const metadata: Metadata = {
  ...defaultMetadata,
  ...pageMetadata["/hizmetlerimiz"],
}
export default function ServicesPage() {
  return <ServicesPageClient />;
}
