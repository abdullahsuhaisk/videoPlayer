import styled from 'styled-components';
import WebFont from 'webfontloader';
import ImageGallery from './components/ImageGallery';
import Circle from './components/Circle';

const Widgets = {
  ImageGallery,
  Circle
};

const loadedWebFonts = {};

export const loadWebFont = (fontFamily, bold, italic) => {
  const webFontKey = `${fontFamily}:400,${bold ? 'b' : ''}${italic ? 'i' : ''}`;

  if (!loadedWebFonts[webFontKey]) {
    WebFont.load({
      google: {
        families: [webFontKey, 'sans-serif']
      }
    });
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
