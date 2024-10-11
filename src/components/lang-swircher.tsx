'use client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useMemo } from 'react'
import { languages } from '@/lib/constants' // Assuming languages array is stored here

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale() // Get the current locale

  // Remove the locale from the pathname
  const pathWithoutLocale = useMemo(() => {
    const pathSegments = pathname.split('/')
    return pathSegments.slice(2).join('/')
  }, [pathname])

  // Function to change the language
  const changeLanguage = (lang: string) => {
    // use router replace
    router.push(`/${lang}/${pathWithoutLocale}`) // Update to correct locale and navigate
  }

  return (
    <Select onValueChange={changeLanguage}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={languages.find((l) => l.value === locale)?.label} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.value} value={language.value}>
            {language.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher
