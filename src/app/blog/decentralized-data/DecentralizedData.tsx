import { BlogPageLayout } from "@/components/layouts/BlogPageLayout";
import {
  hero,
  sections,
} from "@/app/blog/decentralized-data/decentralized-data-content";

export function DecentralizedData() {
  return <BlogPageLayout hero={hero} sections={sections} />;
}
