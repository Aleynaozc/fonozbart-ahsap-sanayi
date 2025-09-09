import ContactPageClient from "./contact-client";

import { defaultMetadata, pageMetadata } from "@/seo-data";
import type { Metadata } from "next"


export const metadata: Metadata = {
  ...defaultMetadata,
  ...pageMetadata["/iletisim"],
}
export default function ContactPage() {
 return <ContactPageClient />;
}


