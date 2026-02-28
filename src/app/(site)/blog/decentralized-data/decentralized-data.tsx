import { BlogPageLayout } from "@/components/layouts/blog-page-layout";
import {
  hero,
  sections,
} from "./decentralized-data-content";

export function DecentralizedData() {
  return <BlogPageLayout hero={hero} sections={sections} />;
}
