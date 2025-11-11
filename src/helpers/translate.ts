import lang from '../lang';

import get from 'lodash/get';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';

/**
 * Retrieves a translated string based on the provided type and key, and replaces placeholders with values.
 * @param {string} type - The type of translation (e.g., 'errors', 'validations').
 * @param {string} key - The key for the specific translation string.
 * @param {Record<string, string>} [replacement] - An optional object containing placeholders and their replacements.
 * @returns {string | undefined} - The translated and replaced string, or undefined if the key is not found.
 */
export default (
  type: string | undefined,
  key: string | undefined,
  replacement?: Record<string, string>,
): string | undefined => {
  let text = '';
  if (key) {
    text = get(lang[type as keyof typeof lang], key);
  }

  if (replacement && isObject(replacement)) {
    for (const i in replacement) {
      if (isString(replacement[i])) {
        const regex = new RegExp(i, 'g');
        text = text?.replace(regex, replacement[i]);
      }
    }
  }

  return text;
};
