import zhCN from './zh-CN.js';
import enUS from './en-US.js';

export const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
};

export function getLanguage() {
  const savedLang = localStorage.getItem('language');
  if (savedLang && messages[savedLang]) {
    return savedLang;
  }

  const browserLang = navigator.language;
  if (messages[browserLang]) {
    return browserLang;
  }

  if (browserLang && browserLang.startsWith('zh')) {
    return 'zh-CN';
  }

  return 'en-US';
}

export function setLanguage(lang) {
  if (messages[lang]) {
    localStorage.setItem('language', lang);
    if (window.applyI18n) {
      window.applyI18n();
    }
  }
}

export default function i18n(key) {
  const lang = getLanguage();
  const message = messages[lang] || messages['zh-CN'];

  return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), message) || key;
}
