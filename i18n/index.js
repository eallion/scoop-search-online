import zhCN from './zh-CN.js';
import enUS from './en-US.js';

export const messages = {
  'zh-CN': zhCN,
  'en-US': enUS
};

export function getLanguage() {
  // 优先使用用户设置的语言
  const savedLang = localStorage.getItem('language');
  if (savedLang && messages[savedLang]) {
    return savedLang;
  }

  // 其次使用浏览器语言
  const browserLang = navigator.language;
  if (messages[browserLang]) {
    return browserLang;
  }

  // 如果是中文环境，返回中文
  if (browserLang.startsWith('zh')) {
    return 'zh-CN';
  }

  // 默认使用英文
  return 'en-US';
}

export function setLanguage(lang) {
  if (messages[lang]) {
    localStorage.setItem('language', lang);
    window.location.reload();
  }
}

export default function i18n(key) {
  const lang = getLanguage();
  const message = messages[lang];
  
  return key.split('.').reduce((obj, k) => obj && obj[k], message) || key;
}
