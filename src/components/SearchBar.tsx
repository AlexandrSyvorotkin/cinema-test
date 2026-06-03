import type { ReactNode } from 'react'
import './SearchBar.css'

type SearchBarProps = {
  query: string
  onQueryChange: (value: string) => void
  onSubmit: (forcedQuery?: string) => void
  autoFocus?: boolean
  compact?: boolean
}

function IconButton({
  label,
  children,
  onClick,
}: {
  label: string
  children: ReactNode
  onClick?: () => void
}) {
  return (
    <button
      type="button"
      className="search-tool"
      aria-label={label}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export function SearchBar({
  query,
  onQueryChange,
  onSubmit,
  autoFocus = false,
  compact = false,
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(query)
  }

  return (
    <form
      className={`search-form${compact ? ' search-form--compact' : ''}`}
      onSubmit={handleSubmit}
    >
      <div className="search-row">
        <div className="search-bar">
          <input
            type="search"
            className="search-input"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Введите запрос"
            autoComplete="off"
            autoFocus={autoFocus}
          />
          <div className="search-bar__tools">
            {query.length > 0 && (
              <IconButton
                label="Очистить"
                onClick={() => onQueryChange('')}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </IconButton>
            )}
            <IconButton label="Клавиатура">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm4-2h-2v-2h2v2zm0-3h-2v-2h2v2z" />
              </svg>
            </IconButton>
            <IconButton label="Голосовой поиск">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3.11 3.28 5.45 6.91 5.45s6.42-2.34 6.91-5.45c.09-.6-.39-1.14-1-1.14z" />
              </svg>
            </IconButton>
            <IconButton label="Поиск по картинке">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7v2zm0 14c-2.76 0-5-2.24-5-5H5c0 3.87 3.13 7 7 7v-2zm-5-7c0-2.76 2.24-5 5-5V5c-3.87 0-7 3.13-7 7h2zm14 0h-2c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7z" />
                <circle cx="12" cy="12" r="2.5" />
              </svg>
            </IconButton>
          </div>
        </div>
        <button type="submit" className="search-submit" aria-label="Поиск">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
          </svg>
          <span>Поиск</span>
        </button>
      </div>
    </form>
  )
}
