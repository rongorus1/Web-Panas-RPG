import { BiomeGallery } from "@/biomes/presentation/BiomeGallery";
import { Changelog } from "@/changelog/presentation/Changelog";
import { JoinTheGroup } from "@/community/presentation/JoinTheGroup";
import { Hero } from "@/hero/presentation/Hero";
import { Installation } from "@/installation/presentation/Installation";
import { QuestBook } from "@/quests/presentation/QuestBook";
import { SkillTree } from "@/skills/presentation/SkillTree";
import { WorldTour } from "@/world-tour/presentation/WorldTour";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorldTour />
      <BiomeGallery />
      <QuestBook />
      <SkillTree />
      <Installation />
      <Changelog />
      <JoinTheGroup />
    </>
  );
}
