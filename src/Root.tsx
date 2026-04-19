import React from "react";
import { Composition } from "remotion";
import { GovDeck, totalDurationInFrames } from "./GovDeck";
import { SLIDE_FPS, SLIDE_WIDTH, SLIDE_HEIGHT } from "./tokens";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="GovDeck"
      component={GovDeck}
      durationInFrames={totalDurationInFrames}
      fps={SLIDE_FPS}
      width={SLIDE_WIDTH}
      height={SLIDE_HEIGHT}
      defaultProps={{}}
    />
  </>
);
