import ReferencesPageClient from "./referance-client";

import { defaultMetadata, pageMetadata } from "@/seo-data";
import { Metadata } from "next";


export const metadata: Metadata = {
  ...defaultMetadata,
  ...pageMetadata["/referanslar"],
}

export default function ReferancePage() {
  return (
    <ReferencesPageClient/>
  );
}
