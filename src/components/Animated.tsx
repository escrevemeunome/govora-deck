import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import React, { CSSProperties } from "react";

export function useEntrance(delay = 0, stiffness = 120) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ fps, frame: frame - delay, config: { stiffness, damping: 18 } });
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [28, 0])}px)`,
  } as CSSProperties;
}

export function useStagger(index: number, stiffness = 110) {
  return useEntrance(index * 8, stiffness);
}

export function useScaleIn(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ fps, frame: frame - delay, config: { stiffness: 130, damping: 20 } });
  return {
    opacity: progress,
    transform: `scale(${interpolate(progress, [0, 1], [0.88, 1])})`,
  } as CSSProperties;
}

export function useExit(duration = 20) {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const exitStart = durationInFrames - duration;
  const progress = interpolate(frame, [exitStart, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp", extrapolateRight: "clamp",
  });
  return {
    opacity: 1 - progress,
    transform: `translateX(${interpolate(progress, [0, 1], [0, -40])}px)`,
  } as CSSProperties;
}

export const AnimCounter: React.FC<{ value: number; delay?: number; prefix?: string; suffix?: string }> = ({ value, delay = 0, prefix = "", suffix = "" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ fps, frame: frame - delay, config: { stiffness: 80, damping: 14 } });
  const current = Math.round(interpolate(progress, [0, 1], [0, value]));
  return <>{prefix}{current}{suffix}</>;
};

export const DrawLine: React.FC<{ delay?: number; color?: string; width?: number; height?: number }> = ({ delay = 0, color = "#4A7CF7", width = 200, height = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({ fps, frame: frame - delay, config: { stiffness: 80, damping: 18 } });
  return <div style={{ width: interpolate(progress, [0, 1], [0, width]), height, background: color, borderRadius: height }} />;
};