import type { ResponseMode } from '../types/responseMode'

export function resultsPath(mode: ResponseMode, query?: string) {
  if (mode === 'sun') return '/sun'

  const trimmed = query?.trim()
  if (!trimmed) return `/${mode}`
  return `/${mode}?q=${encodeURIComponent(trimmed)}`
}

export function isResultsPath(pathname: string): pathname is `/${ResponseMode}` {
  return pathname === '/character' || pathname === '/illness' || pathname === '/sun'
}
