import React from "react";
import { SectionsHero } from "./SectionsHero/SectionsHero";
import { SectionPrestigeGroup } from "./SectionPrestigeGroup/SectionPrestigeGroup";
import { SectionOurServices } from "./SectionOurServices/SectionOurServices";
import { SectionAskedQuestions } from "./SectionAskedQuestions/SectionAskedQuestions";
import { SectionGetInTouch } from "./SectionGetInTouch/SectionGetInTouch";

export const Home = () => {
  return (
    <>
      <SectionsHero />
      <SectionPrestigeGroup />
      <SectionOurServices />
      <SectionAskedQuestions />
      <SectionGetInTouch />
    </>
  );
};
