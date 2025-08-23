// app/hakkimizda/page.tsx

import { getSeoMetadata } from "@/hooks/useSeoMetadata";
import type { Metadata } from "next"
import AboutPageClient from "./about-client";


export const metadata: Metadata = getSeoMetadata("/hakkimizda")

export default function AboutPage() {


 return <AboutPageClient/>;
}
