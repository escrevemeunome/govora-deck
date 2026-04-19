import React from "react";
import { AbsoluteFill, Series, useVideoConfig } from "remotion";
import { Slide1Hero } from "./compositions/Slide1Hero";
import { Slide2ValueProps } from "./compositions/Slide2ValueProps";
import { Slide3Modules } from "./compositions/Slide3Modules";
import { Slide4Stack } from "./compositions/Slide4Stack";
import { Slide5Users } from "./compositions/Slide5Users";
import { Slide6CTA } from "./compositions/Slide6CTA";
import { SLIDE_DURATION } from "./tokens";

const SLIDES = [
  { component: Slide1Hero, duration: SLIDE_DURATION },
  { component: Slide2ValueProps, duration: SLIDE_DURATION },
  { component: Slide3Modules, duration: SLIDE_DURATION },
  { component: Slide4Stack, duration: SLIDE_DURATION },
  { component: Slide5Users, duration: SLIDE_DURATION },
  { component: Slide6CTA, duration: SLIDE_DURATION + 180 },
];

export const GovDeck: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "hsl(210 30% 4%)" }}>
      <Series>
        {SLIDES.map(({ component: SlideComp, duration }, i) => (
          <Series.Sequence key={i} durationInFrames={duration}>
            <AbsoluteFill><SlideComp /></AbsoluteFill>
          </Series.Sequence>
        ))}
      </Series>
    </AbsoluteFill>
  );
};

export const totalDurationInFrames = SLIDEM.reduce((acc, s) => acc + s.duration, 0);
