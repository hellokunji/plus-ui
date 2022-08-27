/* eslint-disable no-nested-ternary */
import React from 'react';
import { ColorsPallete } from '../../primitives';

type CardProps = {
  children: React.ReactNode;
  paddingHorizontal?: 0 | 4 | 8 | 12 | 16 | 24 | 32;
  paddingVertical?: 0 | 4 | 8 | 12 | 16 | 24 | 32;
  borderRadius?: 12;
  borderStyle?: string;
};

export const Card = ({
  children,
  paddingHorizontal = 0,
  paddingVertical = 0,
  borderRadius = 12,
  borderStyle = `1px solid ${ColorsPallete.grey_30}`,
}: CardProps) => (
  <div
    style={{
      paddingTop: `${paddingVertical ?? 0}px`,
      paddingRight: `${paddingHorizontal ?? 0}px`,
      paddingBottom: `${paddingVertical ?? 0}px`,
      paddingLeft: `${paddingHorizontal ?? 0}px`,
      border: borderStyle,
      borderRadius: `${borderRadius}px`,
    }}
  >
    {children}
  </div>
);
