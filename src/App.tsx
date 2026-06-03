import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { ResultsPage } from './pages/ResultsPage'
import './App.css'

type View = 'home' | 'results'

function App() {
  const [view, setView] = useState<View>('home')
  const [query, setQuery] = useState('')

  const runSearch = (forcedQuery?: string) => {
    if (forcedQuery !== undefined) setQuery(forcedQuery)
    setView('results')
  }

  if (view === 'results') {
    return (
      <ResultsPage
        query={query}
        onQueryChange={setQuery}
        onSearch={runSearch}
      />
    )
  }

  return (
    <main className="search-page">
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onSubmit={runSearch}
        autoFocus
      />
    </main>
  )
}

export default App
