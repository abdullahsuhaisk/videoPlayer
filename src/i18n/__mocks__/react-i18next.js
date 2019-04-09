import {
  I18nextProvider,
  initReactI18next,
  setDefaults,
  getDefaults,
  setI18n,
  getI18n
} from 'react-i18next';

const useMock = [(k) => k, {}];
useMock.t = (k) => k;
useMock.i18n = {
  getResource: () => {},
  options: {
    defaultNS: ['translation']
  }
};

const useTranslation = () => useMock;

export {
  useTranslation,
  I18nextProvider,
  initReactI18next,
  setDefaults,
  getDefaults,
  setI18n,
  getI18n
};
