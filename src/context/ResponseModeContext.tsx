import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_RESPONSE_MODE,
  isResponseMode,
  normalizeResponseMode,
  type ResponseMode,
} from '../types/responseMode'

const STORAGE_KEY = 'marat-response-mode'

type ResponseModeContextValue = {
  mode: ResponseMode
  setMode: (mode: ResponseMode) => void
}

const ResponseModeContext = createContext<ResponseModeContextValue | null>(null)

function readStoredMode(): ResponseMode {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY)
    if (stored) {
      if (isResponseMode(stored)) return stored
      const legacy = normalizeResponseMode(stored)
      if (legacy) return legacy
    }
  } catch {
    /* ignore */
  }
  return DEFAULT_RESPONSE_MODE
}

export function ResponseModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ResponseMode>(readStoredMode)

  const setMode = useCallback((next: ResponseMode) => {
    setModeState(next)
    try {
      sessionStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo(() => ({ mode, setMode }), [mode, setMode])

  return (
    <ResponseModeContext.Provider value={value}>
      {children}
    </ResponseModeContext.Provider>
  )
}

export function useResponseMode() {
  const ctx = useContext(ResponseModeContext)
  if (!ctx) {
    throw new Error('useResponseMode must be used within ResponseModeProvider')
  }
  return ctx
}
