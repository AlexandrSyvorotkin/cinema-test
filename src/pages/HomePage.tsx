import { useState } from 'react'
import { useNavigate } from 'react-router'
import { SearchBar } from '../components/SearchBar'
import { useResponseMode } from '../context/ResponseModeContext'
import { resultsPath } from '../lib/routes'
import '../App.css'

export function HomePage() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { mode } = useResponseMode()

  const runSearch = (forcedQuery?: string) => {
    const nextQuery = forcedQuery ?? query
    navigate(resultsPath(mode, nextQuery))
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
