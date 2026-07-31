export const WHATSAPP_NUMBER = "201220951483"
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`
export const SITE_URL = "https://goldenhorizontegypt.com"
export const SITE_NAME = "Golden Horizont Egypt"
export const LOCALES = ['en', 'ru', 'de', 'pl', 'uk', 'cs', 'nl', 'it', 'fr', 'es', 'ar', 'zh', 'pt', 'sv', 'da', 'fi', 'no', 'hu', 'ro', 'tr'] as const

export function localeUrl(locale: string, path: string): string {
  return locale === 'en' ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`
}
