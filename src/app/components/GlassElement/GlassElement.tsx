"use client";

import { CSSProperties, ReactNode, useState } from "react";
import {
  getDisplacementFilter,
  DisplacementOptions,
} from "./getDisplacementFilter";
import { getDisplacementMap } from "./getDisplacementMap";
import styles from "./GlassElement.module.css";

type GlassElementProps = DisplacementOptions & {
  children?: ReactNode | undefined;
  blur?: number;
  debug?: boolean;
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
};

export const GlassElement = ({
  height,
  width,
  depth: baseDepth,
  radius,
  children,
  strength,
  chromaticAberration,
  blur = 2,
  debug = false,
  className,
  style,
  onClick = () => {}
}: GlassElementProps) => {
  /* Change element depth on click */
  const [clicked, setClicked] = useState(false);
  let depth = baseDepth / (clicked ? 0.7 : 1);

  /* Dynamic CSS properties */
  const style1: CSSProperties = {
    ...style,
    height: `${height}px`,
    width: `${width}px`,
    borderRadius: `${radius}px`,
    backdropFilter: `blur(${blur / 2}px) url('${getDisplacementFilter({
      height,
      width,
      radius,
      depth,
      strength,
      chromaticAberration,
    })}') blur(${blur}px) brightness(1.1) saturate(1.5) `,
  };

  /* Debug mode: display the displacement map instead of actual effect */
  if (debug === true) {
    style1.background = `url("${getDisplacementMap({
      height,
      width,
      radius,
      depth,
    })}")`;
    style1.boxShadow = "none";
  }
  return (
    <div
      className={`${styles.box} ${className}`}
      style={style1}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
