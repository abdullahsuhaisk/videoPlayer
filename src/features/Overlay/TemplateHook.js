import { useEffect, useState } from 'react';
import temp from './template.json';
import template3 from '../../components/Template3/Template3.json';

const LoadJsons = async (TMP) => {
  // TODO: Set json method will make
  // return temp;
  return TMP;
};
// function loadjson() {
//   return new Promise((res, rej) => {
//     res(temp);
//   });
// }

export function useTemplate(TMP) {
  const [template, setTemplate] = useState(TMP);

  useEffect(() => {
    LoadJsons(TMP).then((res) => {
      setTemplate(res);
    });
  }, [TMP]);
  return template;
}

function addCustomCss(url) {
  // it must to move index.js
  const link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(link);
}

export function useCss() {
  useEffect(() => {
    // addCustomCss('/css/overlay.css');
    addCustomCss('/css/template3.css');
  }, []);
}
