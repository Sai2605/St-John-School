import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/Localization/En.json';
import mal from '../assets/Localization/Mal.json';
import tn from '../assets/Localization/Tamil.json';
import hi from '../assets/Localization/Hindi.json';



i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
        en: en,
        tn: tn,
        mal: mal,
        hi: hi,
    },
    interpolation: {
        escapeValue: false // react already safes from xss 
    }
});

export default i18n; 