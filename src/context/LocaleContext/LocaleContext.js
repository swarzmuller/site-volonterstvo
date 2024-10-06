'use client';
// Create a context with a default value
import { createContext, useEffect, useState } from 'react';
import { IntlProvider } from 'next-intl';
import en from '../../../messages/en.json';
import ua from '../../../messages/ua.json';

const conf = {
  en,
  ua,
}

export const DEFAULT_LOCALE = 'en';

const LandContext = createContext();

export const LangProvider = ( {setL, children} ) => {
  const [locale, setLocale] = useState();
  const [messages, setMessages] = useState();


  const toggleLocale = async( selectedLocale ) => {
    const localeMessages = conf[selectedLocale];
    setLocale(selectedLocale);
    setMessages(localeMessages);
    setL(selectedLocale)
  };

  useEffect(() => {
    toggleLocale(DEFAULT_LOCALE)
  }, []);

  if(!locale || !messages) {
    return null;
  }

  return (
    <LandContext.Provider value={{locale, toggleLocale}}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </LandContext.Provider>
  );
};

export default LandContext;
