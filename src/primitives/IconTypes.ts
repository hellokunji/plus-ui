import { Color } from './Color';

export interface IconTypes {
  variant?: 'linear' | 'bulk' | 'twoTone';
  primaryColor?: Color;
  secondaryColor?: Color;
  width?: number;
  height?: number;
}
