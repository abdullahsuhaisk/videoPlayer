import { useEffect } from 'react';
import { loadWebFont } from '../parseStyles';

const useWebFont = (template) => {
  useEffect(() => {
    Object.keys(template).forEach((key) => {
      const { styles } = template[key];

      if (styles) {
        const rules = styles.split(';');
        let fontFamily = '';
        let fontWeight = 'normal';
        let fontStyle = 'normal';

        for (let i = 0; i < rules.length; i += 1) {
          const rulePairs = rules[i].split(':');

          switch (rulePairs[0]) {
            case 'font-family':
              [, fontFamily] = rulePairs;
              break;
            case 'font-weight':
              [, fontWeight] = rulePairs;
              break;
            case 'font-style':
              [, fontStyle] = rulePairs;
              break;
            default:
              fontFamily = '';
              break;
          }
        }

        if (fontFamily) {
          loadWebFont(
            fontFamily,
            fontWeight === 'bold',
            fontStyle === 'italic'
          );
        }
      }
    });
  }, [template]);
};

export default useWebFont;
