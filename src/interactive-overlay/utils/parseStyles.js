import styled from 'styled-components';
import WebFont from 'webfontloader';
import ImageGallery from '../components/ImageGallery';
import Circle from '../components/Circle';

const Widgets = {
  ImageGallery,
  Circle
};

const loadedWebFonts = {};

const normalizeFontWeight = (fontWeight) => {
  // eslint-disable-next-line no-restricted-globals
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

    if (ruleName === 'font-family') {
      foundedFont.fontFamily = styles[ruleName];
    } else if (ruleName === 'font-weight') {
      foundedFont.fontWeight = styles[ruleName];
    } else if (ruleName === 'font-style') {
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

const camelToKebab = (camel) =>
  camel.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

export const buildStyleFromRule = (ruleName, ruleValue) => {
  if (typeof ruleValue !== 'object') {
    return `${camelToKebab(ruleName)}: ${ruleValue};`;
  }

  return Object.keys(ruleValue)
    .filter((key) => key !== 'default')
    .reduce(
      (acc, key) => {
        const nextRule = `&:${key}{${camelToKebab(ruleName)}: ${
          ruleValue[key]
        };};`;

        return acc ? `${acc} ${nextRule}` : nextRule;
      },
      ruleValue.default
        ? `${camelToKebab(ruleName)}: ${ruleValue.default};`
        : ''
    );
};

export const buildStyleFromJson = (json) => {
  const cssData = Object.assign({}, json);

  const rules = Object.keys(cssData).reduce((allRules, ruleName) => {
    if (ruleName === 'fontFamily') {
      loadWebFont(cssData[ruleName], cssData.fontWeight, cssData.fontStyle);
    }

    const rule = buildStyleFromRule(ruleName, cssData[ruleName]);
    return allRules ? `${allRules} ${rule}` : rule;
  }, '');

  return rules;
};

export const parseJson = (json) => {
  const jsonData = json;

  return jsonData.map(({ type, id, settings }) => {
    const { cssProps, action, text, attributes } = settings;
    const rules = Object.keys(cssProps).reduce((acc, key) => {
      const nextRule = buildStyleFromRule(key, cssProps[key]);

      return acc ? `${acc}; ${nextRule}` : nextRule;
    }, '');

    return {
      type,
      id,
      Component: styled(Widgets[type] || type).attrs({
        className: 'vibuy-widget'
      })`
        &.vibuy-widget {
          position: absolute;
          ${rules};
          &::placeholder {
            color: ${cssProps.placeholderColor};
          }
          &.error {
            border-color: red;
          }
          pointer-events: auto;
        }
      `,
      cssProps,
      action,
      text,
      attributes
    };
  });
};
