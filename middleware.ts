import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'ru', 'de', 'pl', 'uk', 'cs', 'nl', 'it', 'fr', 'es', 'ar', 'zh', 'pt', 'sv', 'da', 'fi', 'no', 'hu', 'ro', 'tr']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // 1. Check stored cookie preference first
  const cookieLang = request.cookies.get('language')?.value
  if (cookieLang && locales.includes(cookieLang)) {
    return cookieLang
  }

  // 2. Parse Accept-Language header with quality weights (q-factors)
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    try {
      const parsedLanguages = acceptLanguage
        .split(',')
        .map((item) => {
          const [lang, qVal] = item.trim().split(';q=')
          return {
            code: lang.split('-')[0].toLowerCase(),
            q: qVal ? parseFloat(qVal) : 1.0,
          }
        })
        .filter((item) => !isNaN(item.q))
        .sort((a, b) => b.q - a.q)

      for (const item of parsedLanguages) {
        if (locales.includes(item.code)) {
          return item.code
        }
      }
    } catch {
      // Ignore parse errors and fall through
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Ignore static files, api, images
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/photos') ||
    pathname.includes('.') || 
    pathname === '/logo.png'
  ) {
    return NextResponse.next()
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    newUrl.search = request.nextUrl.search
    const response = NextResponse.redirect(newUrl)
    response.cookies.set('language', locale, { path: '/', maxAge: 31536000, sameSite: 'lax' })
    return response
  }

  // Extract the locale from the pathname
  const localeMatch = pathname.match(/^\/([a-z]{2})(\/|$)/)
  const locale = (localeMatch && locales.includes(localeMatch[1])) ? localeMatch[1] : defaultLocale

  // Rewrite to the original route without the locale prefix (e.g., /ru/about -> /about)
  // and pass the locale in headers so the Server Components can read it
  const newPathname = pathname.replace(`/${locale}`, '') || '/'
  const rewriteUrl = new URL(newPathname, request.url)
  rewriteUrl.search = request.nextUrl.search

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-next-locale', locale)

  const response = NextResponse.rewrite(rewriteUrl, {
    request: {
      headers: requestHeaders,
    },
  })

  response.cookies.set('language', locale, { path: '/', maxAge: 31536000, sameSite: 'lax' })
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
}

