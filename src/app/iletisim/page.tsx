import ContactPageClient from "./contact-client";

import { getSeoMetadata } from "@/hooks/useSeoMetadata";
import type { Metadata } from "next"


export const metadata: Metadata = getSeoMetadata("/iletisim")
export default function ContactPage() {
 return <ContactPageClient />;
}


