import type { AiOverviewData } from '../types/searchMock'
import './AiOverview.css'

type AiOverviewProps = {
  data: AiOverviewData
}

export function AiOverview({ data }: AiOverviewProps) {
  return (
    <section className="ai-overview" aria-label="Раневая инфекция">
      <div className="ai-overview__main">
        <div className="ai-overview__head">
          <span className="ai-overview__icon" aria-hidden="true" />
          <h2 className="ai-overview__title">Раневая инфекция</h2>
        </div>

        {data.paragraphs.map((text) => (
          <p key={text} className="ai-overview__text">
            {text}
          </p>
        ))}

        <p className="ai-overview__list-title">{data.listTitle}</p>
        <ul className="ai-overview__list">
          {data.listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <button type="button" className="ai-overview__expand">
          Развернуть
          <span className="ai-overview__expand-icon" aria-hidden="true" />
        </button>
      </div>

      <aside className="ai-overview__sources">
        <p className="ai-overview__sources-count">{data.sourcesCount} сайтов</p>
        <ul className="ai-overview__sources-list">
          {data.sources.map((source) => (
            <li key={source.siteName} className="ai-overview__source-card">
              {source.image && (
                <img className="ai-overview__source-img" src={source.image} alt="" />
              )}
              <div className="ai-overview__source-text">
                <span className="ai-overview__source-site">{source.siteName}</span>
                <span className="ai-overview__source-title">{source.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </section>
  )
}
