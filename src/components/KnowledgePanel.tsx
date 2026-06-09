import type { SearchMock } from '../types/searchMock'
import { isIllnessMock, isKnowledgePanelMock } from '../types/searchMock'
import { AiOverview } from './AiOverview'
import { KnowledgeHero } from './KnowledgeHero'
import {
  SerpFooter,
  SerpOrganic,
  SerpQuestions,
  SerpRelated,
} from './SerpSections'
import './KnowledgePanel.css'

type KnowledgePanelProps = {
  data: SearchMock
}

export function KnowledgePanel({ data }: KnowledgePanelProps) {
  if (isIllnessMock(data)) {
    const splitAt = data.questionsAfterOrganicIndex
    const beforeQuestions = data.organicResults.slice(0, splitAt)
    const afterQuestions = data.organicResults.slice(splitAt)

    return (
      <div className="knowledge">
        <AiOverview data={data.aiOverview} />
        <div className="knowledge__serp">
          <SerpOrganic results={beforeQuestions} />
          <SerpQuestions questions={data.relatedQuestions} />
          <SerpOrganic results={afterQuestions} />
          <SerpRelated items={data.relatedSearches} />
          <SerpFooter />
        </div>
      </div>
    )
  }

  if (isKnowledgePanelMock(data)) {
    return (
      <div className="knowledge">
        <KnowledgeHero data={data} />
        <div className="knowledge__serp">
          <SerpOrganic
            results={data.organicResults}
            linkable
            imagePack={data.imagePack}
          />
          <SerpRelated items={data.relatedSearches} />
          <SerpFooter />
        </div>
      </div>
    )
  }

  return null
}
