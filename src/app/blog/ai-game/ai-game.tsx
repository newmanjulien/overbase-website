import { BlogPageLayout } from "@/components/layouts/blog-page-layout";
import {
  hero,
  sections,
} from "@/app/blog/ai-game/ai-game-content";

export function AiGame() {
  return <BlogPageLayout hero={hero} sections={sections} />;
}
