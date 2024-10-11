import LanguageSwitcher from '@/components/lang-swircher'
import ThemeSwitcher from '@/components/theme-switcher'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations()

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <ThemeSwitcher />
      <p className="text-red-500 dark:text-blue-500">text</p>

      <br />
      <br />
      <LanguageSwitcher />
      <p>{t('welcome')}</p>
    </div>
  )
}
