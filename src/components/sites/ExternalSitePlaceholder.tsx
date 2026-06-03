import type { OrganicResult } from '../../types/serp'
import './ExternalSitePlaceholder.css'

type ExternalSitePlaceholderProps = {
  article: OrganicResult
}

export function ExternalSitePlaceholder({ article }: ExternalSitePlaceholderProps) {
  const initial = article.siteName.charAt(0)

  return (
    <div
      className="ext-site"
      style={{ ['--ext-accent' as string]: article.faviconColor }}
    >
      <header className="ext-header">
        <div className="ext-header__bar">
          <span className="ext-header__logo" aria-hidden="true">
            {initial}
          </span>
          <span className="ext-header__name">{article.siteName}</span>
        </div>
        <p className="ext-header__url">{article.url.replace(/ › /g, ' / ')}</p>
      </header>

      <main className="ext-main">
        <h1>{article.title}</h1>
        <p className="ext-lead">{article.snippet}</p>
        <p className="ext-placeholder">Контент будет добавлен позже.</p>
      </main>

      <footer className="ext-footer">
        <p>© {article.siteName}</p>
      </footer>
    </div>
  )
}
