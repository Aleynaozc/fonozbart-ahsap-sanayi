import ProjectsPageClient from "./projects-client";

import { defaultMetadata, pageMetadata } from "@/seo-data";
import { Metadata } from "next";


export const metadata: Metadata = {
  ...defaultMetadata,
  ...pageMetadata["/projeler"],
}

export default function ProjectsPage() {
  return (
    <ProjectsPageClient/>
  );
}
