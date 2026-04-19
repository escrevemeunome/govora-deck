import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, AbsoluteFill } from "remotion";
import { colors } from "../tokens";

export const SlideTransitionIn: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ fps, frame: frame - delay, config: { stiffness: 100, damping: 22, mass: 1 } });
  return <div style={{ opacity: p, transform: `translateX(${interpolate(p, [0, 1], [80, 0])}px)`, width: "100%", height: "100%" }}>{children}</div>;
};

export const ScanlineSweep: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = Math.min(frame / 18, 1);
  const y = interpolate(progress, [0, 1], [-4, 104]);
  return (
    <AbsoluteFill style={{ pointerEvents: "none", zIndex: 50 }}>
      <div style={{ position: "absolute", left: 0, right: 0, top: `${y}%`, height: 3, background: `linear-gradient(90deg, transparent, ${colors.brandBlue}, ${colors.brandCyan}, transparent)`, opacity: 1 - progress }} />
    </AbsoluteFill>
  );
};