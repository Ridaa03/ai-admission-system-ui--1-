'use client'

import { useTheme } from 'next-themes'
import * as React from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  // theme may be 'light' | 'dark' | 'system'
  const current = theme === 'system' ? undefined : theme

  const toggle = React.useCallback(() => {
    if (current === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }, [current, setTheme])

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-full hover:bg-muted/20 transition-colors"
    >
      {current === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
}
