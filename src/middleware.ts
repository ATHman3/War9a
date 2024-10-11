import createMiddleware from 'next-intl/middleware'
import { languagesValues } from './lib/constants'

// const path = '/(fr|en|ar|es)/:path*'
export default createMiddleware({
  // A list of all locales that are supported
  locales: languagesValues,

  // Used when no locale matches
  defaultLocale: languagesValues[0], // 'fr'

  // disable detection user device language
  // localeDetection: false,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en|ar|es)/:path*'],
}
