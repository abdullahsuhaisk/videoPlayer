import styled from 'styled-components';
import ImageGallery from './components/ImageGallery';
import Circle from './components/Circle';

const Widgets = {
  ImageGallery,
  Circle
};

const dashed = (camel) => camel.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

function parseRule(ruleName, value) {
  if (typeof value !== 'object') {
    return `${dashed(ruleName)}:${value}`;
  }
  return Object.keys(value)
    .filter((key) => key !== 'default')
    .reduce(
      (acc, key) => {
        const nextRule = `&:${key}{${dashed(ruleName)}: ${value[key]} } ; `;

        return acc ? `${acc};${nextRule}` : nextRule;
      },
      value.default ? `${ruleName}: ${value.default} ;` : ''
    );
}

export function parseJson(json) {
  const settingsO = json.widgets;

  return settingsO.map(({ type, id, settings }) => {
    const { cssProps, action, text, attributes } = settings;
    const rules = Object.keys(cssProps).reduce((acc, key) => {
      const nextRule = parseRule(key, cssProps[key]);

      return acc ? `${acc};${nextRule}` : nextRule;
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
        }
      `,
      action,
      text,
      attributes
    };
  });
}
