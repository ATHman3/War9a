// src/lib/i18n.ts
import { createI18n } from "@inlang/paraglide-js-adapter-next"
import type { AvailableLanguageTag } from "@/paraglide/runtime.js"

// All available functions exported. Just use the ones you need
export const {
	middleware,
	Link,
	useRouter,
	usePathname,
	redirect,
	permanentRedirect,
	localizePathname,
} = createI18n<AvailableLanguageTag>()
