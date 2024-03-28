// src/lib/i18n.ts
import { createI18n } from "@inlang/paraglide-js-adapter-next"
import type { AvailableLanguageTag } from "@/paraglide/runtime" //generated file

// All available functions exported. Just use the ones you need
export const {
	middleware,
	Link,
	useRouter,
	usePathname,
	redirect,
	permanentRedirect,
} = createI18n<AvailableLanguageTag>()