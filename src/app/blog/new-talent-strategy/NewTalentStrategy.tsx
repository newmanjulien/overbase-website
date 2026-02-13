import { BlogPageLayout } from "@/components/layouts/BlogPageLayout";
import {
  hero,
  sections,
} from "@/app/blog/new-talent-strategy/new-talent-strategy-content";

export function NewTalentStrategy() {
  return <BlogPageLayout hero={hero} sections={sections} />;
}
