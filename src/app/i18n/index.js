import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en/main.json';
import de from './locales/de/main.json';

const options = {
	interpolation: {
		escapeValue: false
	},

	debug: false,

	// set default language
	lng: 'de',

	whitelist: ['en', 'de'],

	resources: {en, de},

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

i18n.use(initReactI18next).init(options);

export default i18n;
