/**
 * Translation registry.
 *
 * How to add Kannada strings:
 *   1. User provides an MD file with Kannada translations for a namespace.
 *   2. Fill in the matching `kn` object in the relevant namespace file under ./namespaces/.
 *   3. That's it — the useTranslation hook picks it up automatically.
 *
 * Namespaces map 1-to-1 with steps/pages:
 *   common        → NavigationBar, Footer, shared UI labels
 *   home          → HomePage, LoginPage, CitizenLogin-HomePage
 *   newAppFirst   → NewApplicationFirstPage (questionnaire)
 *   step1         → SaleDeedDetailsPage
 *   step2         → OwnerEKYCPage
 *   step3         → PropertyDetailsPage
 *   step4         → PropertyClassificationPage (incl. BuildingDetails)
 *   step5         → ECStep
 */

import { useLanguage } from '../context/LanguageContext';

import common from './namespaces/common';
import home from './namespaces/home';
import newAppFirst from './namespaces/newAppFirst';
import step1 from './namespaces/step1';
import step2 from './namespaces/step2';
import step3 from './namespaces/step3';
import step4 from './namespaces/step4';
import step5 from './namespaces/step5';

const translations = {
  en: {
    common: common.en,
    home: home.en,
    newAppFirst: newAppFirst.en,
    step1: step1.en,
    step2: step2.en,
    step3: step3.en,
    step4: step4.en,
    step5: step5.en,
  },
  kn: {
    common: common.kn,
    home: home.kn,
    newAppFirst: newAppFirst.kn,
    step1: step1.kn,
    step2: step2.kn,
    step3: step3.kn,
    step4: step4.kn,
    step5: step5.kn,
  },
};

/**
 * useTranslation — consume inside a component:
 *
 *   import { useTranslation } from '../../i18n';
 *
 *   function MyComponent() {
 *     const { t } = useTranslation('step1');
 *     return <h1>{t('sectionTitle')}</h1>;
 *   }
 *
 * t(key) falls back to English if the Kannada key is missing.
 */
export function useTranslation(namespace) {
  const { lang } = useLanguage();

  function t(key) {
    const kv = translations[lang]?.[namespace]?.[key];
    const enFallback = translations['en']?.[namespace]?.[key];
    return kv ?? enFallback ?? key;
  }

  return { t, lang };
}

export default translations;
