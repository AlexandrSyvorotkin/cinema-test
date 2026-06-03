import { useLocation } from 'react-router'
import { EnskiyVestnikSite } from '../components/sites/EnskiyVestnikSite'
import { ExternalSitePlaceholder } from '../components/sites/ExternalSitePlaceholder'
import { findCharacterOrganicByPath } from '../lib/characterSites'

export function CharacterSitePage() {
  const { pathname } = useLocation()
  const article = findCharacterOrganicByPath(pathname)

  if (!article) {
    return (
      <div className="ext-site" style={{ padding: 48, textAlign: 'center' }}>
        <p>Страница не найдена</p>
      </div>
    )
  }

  if (article.id === '1') {
    return <EnskiyVestnikSite article={article} />
  }

  return <ExternalSitePlaceholder article={article} />
}
