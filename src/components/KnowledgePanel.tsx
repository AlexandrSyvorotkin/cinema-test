import { KnowledgeHero } from './KnowledgeHero'
import {
  SerpFooter,
  SerpOrganic,
  SerpQuestions,
  SerpRelated,
} from './SerpSections'
import './KnowledgePanel.css'

export function KnowledgePanel() {
  return (
    <div className="knowledge">
      <KnowledgeHero />
      <div className="knowledge__serp">
        <SerpQuestions />
        <SerpOrganic />
        <SerpRelated />
        <SerpFooter />
      </div>
    </div>
  )
}
