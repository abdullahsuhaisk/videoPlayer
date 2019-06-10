/* eslint-disable no-restricted-globals */
import WebFont from 'webfontloader';

const loadedWebFonts = {};

const normalizeFontWeight = (fontWeight) => {
  if (fontWeight && !isNaN(fontWeight)) {
    return fontWeight;
  }

  switch (fontWeight) {
    case 'lighter':
      return '300';
    case 'bold':
      return '700';
    case 'bolder':
      return '900';
    default:
      return '400';
  }
};

const normalizeFontStyle = (fontStyle) => {
  return fontStyle === 'italic' ? 'i' : '';
};

const loadWebFont = (fontFamily, fontWeight, fontStyle) => {
  const webFontKey = `${fontFamily}:${normalizeFontWeight(
    fontWeight
  )}${normalizeFontStyle(fontStyle)}`;

  if (!loadedWebFonts[webFontKey]) {
    WebFont.load({
      google: {
        families: [webFontKey, 'sans-serif']
      }
    });
    loadedWebFonts[webFontKey] = true;
  }
};

export const loadWebFontsFromStyles = (styles) => {
  const foundedFont = {};

  Object.keys(styles).forEach((ruleName) => {
    if (typeof styles[ruleName] === 'object') {
      loadWebFontsFromStyles(styles[ruleName]);
    }

    if (ruleName === 'font-family' || ruleName === 'fontFamily') {
      foundedFont.fontFamily = styles[ruleName];
    } else if (ruleName === 'font-weight' || ruleName === 'fontWeight') {
      foundedFont.fontWeight = styles[ruleName];
    } else if (ruleName === 'font-style' || ruleName === 'fontStyle') {
      foundedFont.fontStyle = styles[ruleName];
    }
  });

  if (foundedFont.fontFamily) {
    loadWebFont(
      foundedFont.fontFamily,
      foundedFont.fontWeight,
      foundedFont.fontStyle
    );
  }
};
