import { BlogPageLayout } from "@/components/layouts/blog-page-layout";
import {
  hero,
  sections,
} from "./future-facing-content";

export function FutureFacing() {
  return <BlogPageLayout hero={hero} sections={sections} />;
}
