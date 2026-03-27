import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

type ThemeProviderProps = {
  children: ReactNode
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getSystemTheme)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setTheme(mediaQuery.matches ? 'dark' : 'light')
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  )
}
