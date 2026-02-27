import tokens from "./tokens.json";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FontSize {
  px: number;
  rem: number;
}

export interface TypographyToken {
  fontFamily: string;
  fontSize: FontSize;
  fontWeight: number;
  lineHeight: number | string;
  letterSpacing: string;
}

export interface SemanticColor {
  light: string;
}

export interface ComponentTokens {
  [key: string]: string;
}

// ---------------------------------------------------------------------------
// Primitive color keys / Semantic color keys (derived from JSON)
// ---------------------------------------------------------------------------

export type PrimitiveColorKey = keyof typeof tokens.colors.primitives;
export type SemanticColorKey = keyof typeof tokens.colors.semantic;
export type TypographyKey = keyof typeof tokens.typography;
export type SpacingKey = keyof typeof tokens.spacing;
export type BorderRadiusKey = keyof typeof tokens.borderRadius;
export type ShadowKey = keyof typeof tokens.shadows;
export type BorderWidthKey = keyof typeof tokens.borderWidth;
export type OpacityKey = keyof typeof tokens.opacity;
export type ComponentName = keyof typeof tokens._components;

// ---------------------------------------------------------------------------
// Exports — token objects
// ---------------------------------------------------------------------------

export const meta = tokens._meta;

export const colors = {
  primitives: tokens.colors.primitives,
  semantic: tokens.colors.semantic as Record<SemanticColorKey, SemanticColor>,
};

export const typography = tokens.typography as Record<
  TypographyKey,
  TypographyToken
>;

export const spacing = tokens.spacing;
export const borderRadius = tokens.borderRadius;
export const shadows = tokens.shadows;
export const borderWidth = tokens.borderWidth;
export const opacity = tokens.opacity;
export const components = tokens._components;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Resolve a primitive color by key. */
export function primitiveColor(key: PrimitiveColorKey): string {
  return colors.primitives[key];
}

/** Resolve a semantic color, optionally choosing a mode (defaults to "light"). */
export function semanticColor(
  key: SemanticColorKey,
  mode: "light" = "light",
): string {
  const token = colors.semantic[key];
  return token[mode as keyof typeof token] as string;
}

/** Get the CSS custom-property name for a semantic color. */
export function semanticColorVar(key: SemanticColorKey): string {
  return `var(--mv-color-${key})`;
}

/** Get the CSS custom-property name for a spacing value. */
export function spacingVar(key: SpacingKey): string {
  return `var(--mv-spacing-${key})`;
}

/** Get the CSS custom-property name for a border-radius value. */
export function radiusVar(key: BorderRadiusKey): string {
  return `var(--mv-radius-${key})`;
}

/** Get the CSS custom-property name for a shadow value. */
export function shadowVar(key: ShadowKey): string {
  return `var(--mv-shadow-${key})`;
}

/** Get a typography token's CSS font shorthand pieces. */
export function typographyStyle(key: TypographyKey) {
  const t = typography[key];
  return {
    fontFamily: t.fontFamily,
    fontSize: `${t.fontSize.rem}rem`,
    fontWeight: t.fontWeight,
    lineHeight: typeof t.lineHeight === "number" ? t.lineHeight : t.lineHeight,
    letterSpacing: t.letterSpacing,
  } as const;
}

// ---------------------------------------------------------------------------
// Full token tree (re-export)
// ---------------------------------------------------------------------------

export default tokens;
