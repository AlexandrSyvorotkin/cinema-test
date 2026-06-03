import type { CharacterSearchMock } from '../types/searchMock'
import './KnowledgeHero.css'

type KnowledgeHeroProps = {
  data: CharacterSearchMock
}

export function KnowledgeHero({ data }: KnowledgeHeroProps) {
  const article = data.featuredArticle
  const social = data.instagramCard
  const showAge = data.age !== undefined

  return (
    <header className="k-hero">
      <div className="k-hero__head">
        <div className="k-hero__titles">
          <h1 className="k-hero__name">{data.displayName}</h1>
          <p className="k-hero__role">
            {data.role}
            <button type="button" className="k-hero__menu" aria-label="Ещё">
              ⋮
            </button>
          </p>
        </div>
        <div className="k-hero__tabs" role="tablist">
          {data.tabs.map((tab) => (
            <button
              key={tab.label}
              type="button"
              className={`k-hero__tab${tab.active ? ' k-hero__tab--active' : ''}${tab.disabled ? ' k-hero__tab--muted' : ''}`}
              disabled={tab.disabled}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="k-hero__grid">
        <div className="k-hero__gallery">
          <img className="k-hero__gallery-main" src={data.photos.main} alt="" />
          <div className="k-hero__gallery-stack">
            <img src={data.photos.top} alt="" />
            <img src={data.photos.bottom} alt="" />
          </div>
        </div>

        <article className="k-hero__article">
          <img className="k-hero__article-img" src={article.image} alt="" />
          <div className="k-hero__article-body">
            <div className="k-hero__article-meta">
              <span className="k-hero__article-logo">{article.sourceShort}</span>
              <span className="k-hero__article-source">{article.source}</span>
              <button type="button" className="k-hero__menu" aria-label="Ещё">
                ⋮
              </button>
            </div>
            <h2 className="k-hero__article-title">{article.title}</h2>
            <p className="k-hero__article-snippet">{article.snippet}</p>
            <time className="k-hero__article-time">{article.time}</time>
          </div>
        </article>

        <div className="k-hero__side">
          {showAge ? (
            <div className="k-hero__mini k-hero__mini--age">
              <span className="k-hero__mini-label">Возраст</span>
              <span className="k-hero__mini-value">{data.age} лет</span>
              <span className="k-hero__mini-sub">{data.birthShort}</span>
            </div>
          ) : (
            <>
              {data.sidePrimary && (
                <div className="k-hero__mini k-hero__mini--age">
                  <span className="k-hero__mini-label">{data.sidePrimary.label}</span>
                  <span className="k-hero__mini-value">{data.sidePrimary.value}</span>
                  {data.sidePrimary.sub && (
                    <span className="k-hero__mini-sub">{data.sidePrimary.sub}</span>
                  )}
                </div>
              )}
              {data.sideSecondary && (
                <div className="k-hero__mini k-hero__mini--spouse">
                  <div className="k-hero__mini-head">
                    <span className="k-hero__mini-label">{data.sideSecondary.label}</span>
                    <span className="k-hero__mini-caret" aria-hidden="true" />
                  </div>
                  <span className="k-hero__mini-value k-hero__mini-value--sm">
                    {data.sideSecondary.value}
                  </span>
                </div>
              )}
            </>
          )}
          <article className="k-hero__social">
            <div className="k-hero__social-text">
              <div className="k-hero__social-meta">
                <span className="k-hero__dobrogram-icon" aria-hidden="true" />
                <span>{social.source}</span>
              </div>
              <p className="k-hero__social-title">{social.title}</p>
              <time className="k-hero__article-time">{social.time}</time>
            </div>
            <div className="k-hero__social-thumb">
              <img src={social.image} alt="" />
              <span className="k-hero__play" aria-hidden="true" />
              <span className="k-hero__duration">{social.duration}</span>
            </div>
          </article>
        </div>
      </div>
    </header>
  )
}
