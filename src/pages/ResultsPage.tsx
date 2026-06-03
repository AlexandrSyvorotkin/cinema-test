import { SearchBar } from '../components/SearchBar'
import { KnowledgePanel } from '../components/KnowledgePanel'
import './ResultsPage.css'

type ResultsPageProps = {
  query: string
  onQueryChange: (value: string) => void
  onSearch: (forcedQuery?: string) => void
}

export function ResultsPage({
  query,
  onQueryChange,
  onSearch,
}: ResultsPageProps) {
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
        <KnowledgePanel />
      </main>
    </div>
  )
}
