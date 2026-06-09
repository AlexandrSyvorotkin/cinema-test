import type { CharacterSearchMock } from '../types/searchMock'
import './KnowledgeHero.css'

type KnowledgeHeroProps = {
  data: CharacterSearchMock
}

/** Временно false — боковая колонка Доброграм скрыта, галерея шире */
const SHOW_K_HERO_SIDE = false

export function KnowledgeHero({ data }: KnowledgeHeroProps) {
  const article = data.featuredArticle
  const social = data.instagramCard

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

      <div
        className={`k-hero__grid${SHOW_K_HERO_SIDE ? '' : ' k-hero__grid--no-side'}`}
      >
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
          </div>
        </article>

        {SHOW_K_HERO_SIDE && (
          <div className="k-hero__side">
            <article className="k-hero__social">
              <div className="k-hero__social-body">
                <div className="k-hero__social-meta">
                  <span className="k-hero__dobrogram-icon" aria-hidden="true" />
                  <span className="k-hero__social-source">{social.source}</span>
                </div>
                <p className="k-hero__social-title">{social.title}</p>
                {social.snippet && (
                  <p className="k-hero__social-snippet">{social.snippet}</p>
                )}
                {social.stats && (
                  <p className="k-hero__social-stats">{social.stats}</p>
                )}
              </div>
              <div className="k-hero__social-video">
                <img
                  className="k-hero__social-video-img"
                  src={social.image}
                  alt=""
                />
                <span
                  className="k-hero__social-video-overlay"
                  aria-hidden="true"
                />
                <span className="k-hero__play" aria-hidden="true" />
                <span className="k-hero__duration">{social.duration}</span>
              </div>
            </article>
          </div>
        )}
      </div>
    </header>
  )
}
