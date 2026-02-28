import { BlogPageLayout } from "@/components/layouts/blog-page-layout";
import {
  hero,
  sections,
} from "./new-talent-strategy-content";

export function NewTalentStrategy() {
  return <BlogPageLayout hero={hero} sections={sections} />;
}
