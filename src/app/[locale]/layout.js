import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export const runtime = "edge";

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
  };
}

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ua" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ overflowX: "hidden" }}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
