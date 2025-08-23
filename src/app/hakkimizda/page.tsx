import { defaultMetadata, pageMetadata } from "@/seo-data";
import AboutPageClient from "./about-client";
import { Metadata } from "next";


export const metadata: Metadata = {
  ...defaultMetadata,
  ...pageMetadata["/hakkimizda"],
}

export default function AboutPage() {
return <AboutPageClient/>
}
