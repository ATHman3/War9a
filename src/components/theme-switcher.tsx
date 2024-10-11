'use client'
import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeSwitcher = ({ iconClassName }: { iconClassName?: string }) => {
  const [mounted, setMounted] = useState(false)
  const [displayTheme, setDisplayTheme] = useState<string | undefined>('') // Internal state for animation
  const { theme, setTheme, resolvedTheme } = useTheme() // Access theme and setTheme from next-themes

  // Toggle theme between light and dark
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  // Ensure the component is mounted before rendering (Next.js SSR handling)
  useEffect(() => setMounted(true), [])

  // Set the display theme after the component mounts
  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setDisplayTheme(theme || resolvedTheme) // Synchronize theme with the internal state
      }, 50) // Small delay to ensure the theme is loaded properly
    }
  }, [mounted, theme, resolvedTheme])

  if (!mounted || !displayTheme) {
    return (
      <button className="relative flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full transition-all duration-500 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none" />
    )
  }

  // Pass displayTheme and toggle function to the button
  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full transition-all duration-500 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none"
    >
      <span
        className={cn(
          'absolute w-8 h-8 flex items-center justify-center transition-transform duration-500',
          {
            'rotate-180': displayTheme === 'dark',
            'rotate-0': displayTheme === 'light',
          },
        )}
      >
        {displayTheme === 'dark' ? (
          <Sun className={cn('w-6 h-6 text-yellow-500', iconClassName)} />
        ) : (
          <Moon className={cn('w-6 h-6 text-blue-500', iconClassName)} />
        )}
      </span>
    </button>
  )
}

export default ThemeSwitcher
