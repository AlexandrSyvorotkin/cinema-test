import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import { SearchBar } from '../components/SearchBar'
import { KnowledgePanel } from '../components/KnowledgePanel'
import { useResponseMode } from '../context/ResponseModeContext'
import { resultsPath } from '../lib/routes'
import { getSearchMockForMode, type SearchResultsMode } from '../types/responseMode'
import './ResultsPage.css'

type ResultsPageProps = {
  mode: SearchResultsMode
}

export function ResultsPage({ mode }: ResultsPageProps) {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { setMode } = useResponseMode()
  const query = searchParams.get('q') ?? ''
  const data = getSearchMockForMode(mode)

  useEffect(() => {
    setMode(mode)
  }, [mode, setMode])

  const onQueryChange = (value: string) => {
    setSearchParams(value.trim() ? { q: value } : {}, { replace: true })
  }

  const onSearch = (forcedQuery?: string) => {
    const nextQuery = forcedQuery ?? query
    navigate(resultsPath(mode, nextQuery))
  }

  return (
    <div className="results-page">
      <header className="results-header">
        <SearchBar
          query={query}
          onQueryChange={onQueryChange}
          onSubmit={onSearch}
          compact
        />
      </header>

      <main className="results-main">
        <KnowledgePanel data={data} />
      </main>
    </div>
  )
}
