'use client';
// Create a context with a default value
import { createContext, useEffect, useState } from 'react';
import { IntlProvider } from 'next-intl';

export const DEFAULT_LOCALE = 'en';

const LandContext = createContext();

export const LangProvider = ( {children} ) => {
  const [locale, setLocale] = useState();
  const [messages, setMessages] = useState();


  const toggleLocale = async( selectedLocale ) => {
    const localeMessages = await import(`../../../public/messages/${selectedLocale}.json`);
    setLocale(selectedLocale);
    setMessages(localeMessages);
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
