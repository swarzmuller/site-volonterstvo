import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title')
  };
}

export async function generateStaticParams() {
  return [{locale: 'en' }, {locale: 'ua'}]
}


export default async function LocaleLayoutAbout( {children, params: {locale}} ) {
  unstable_setRequestLocale(locale);

  return (
    <>
      {children}
    </>
  );
}
