import { Color } from './Color';
import { TypeScales, TypographyHtmlTags } from './Typescales';

export type FontVariantType = keyof typeof TypeScales;
export type RenderType = keyof typeof TypographyHtmlTags;
export type ColorType = keyof typeof Color;
export enum CheckboxVariant {
  Default,
  Dashed,
}
