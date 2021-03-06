import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/main.json';
import de from './locales/de/main.json';
import fr from './locales/fr/main.json';
import ita from './locales/ita/main.json';

const options = {
	interpolation: {
		escapeValue: false
	},

	debug: false,

	// set default language
	lng: 'en',

	whitelist: ['en', 'de', 'fr', 'ita'],

	resources: {en, de, fr, ita},

	fallbackLng: 'en',

	defaultNS: 'common',

	load: 'languageOnly',

	react: {
		wait: false,
		bindI18n: 'languageChanged loaded',
		bindStore: 'added removed',
		nsMode: 'default'
	}
};

i18n.use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
