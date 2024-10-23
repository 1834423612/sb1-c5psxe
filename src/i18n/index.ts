import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh.json'

type LocaleMessages = {
    [key: string]: {
        title: string;
        subtitle: string;
        about: {
            title: string;
            content: string;
            intro: string;
            description: string;
            current: string;
            interest: string;
            hope: string;
        };
    };
};

const messages: LocaleMessages = {
    en,
    zh
}

export const defaultLocale = 'en'

export const i18n = createI18n({
    legacy: false,
    locale: getSavedOrBrowserLocale(),
    fallbackLocale: defaultLocale,
    messages,
})

export function setI18nLanguage(i18n: any, locale: string) {
    if (i18n && i18n.global && i18n.global.locale) {
        i18n.global.locale.value = locale
        document.querySelector('html')?.setAttribute('lang', locale)
        localStorage.setItem('user-locale', locale)
    } else {
        console.error('i18n is not properly initialized')
    }
}

export function getBrowserLocale() {
    const navigatorLocale = navigator.languages !== undefined ? navigator.languages[0] : navigator.language
    if (!navigatorLocale) {
        return undefined
    }
    const trimmedLocale = navigatorLocale.trim().split(/-|_/)[0]
    return trimmedLocale
}

function getSavedOrBrowserLocale() {
    const savedLocale = localStorage.getItem('user-locale')
    if (savedLocale && messages[savedLocale]) {
        return savedLocale
    }
    const browserLocale = getBrowserLocale()
    if (browserLocale && messages[browserLocale]) {
        return browserLocale
    }
    return defaultLocale
}