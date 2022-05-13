import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from "react-native-localize";
import PTBR from "../languages/pt-BR.json"
import ENUS from "../languages/en-US.json";

const resources = {
    "en-US": ENUS,
    "pt-BR": PTBR
}

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: RNLocalize.getLocales()[0].languageTag,
/*         interpolation: {
            escapeValue: false,
        } */


    }
    )

export default i18n;