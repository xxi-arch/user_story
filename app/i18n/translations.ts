export const translations = {
  en: {
    hello: 'Hello',
    welcome: 'Welcome',
    buttons: {
      login: 'Login',
      settings: 'Settings'
    }
  },
  zh: {
    hello: '你好',
    welcome: '欢迎',
    buttons: {
      login: '登录',
      settings: '设置'
    }
  }
};

export type Language = keyof typeof translations; 