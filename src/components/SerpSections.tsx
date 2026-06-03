import { bulatovMock } from '../data/bulatovMock'
import type { OrganicResult } from '../types/serp'
import './SerpSections.css'

function Stars({ value }: { value: number }) {
  const full = Math.floor(value)
  return (
    <span className="serp-stars" aria-label={`Рейтинг ${value}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`serp-stars__star${i < full ? ' serp-stars__star--on' : ''}`}
          aria-hidden="true"
        />
      ))}
    </span>
  )
}

function OrganicItem({ item }: { item: OrganicResult }) {
  return (
    <article className="serp-item">
      <div className="serp-item__content">
        <div className="serp-item__site">
          <span
            className="serp-item__favicon"
            style={{ backgroundColor: item.faviconColor }}
            aria-hidden="true"
          >
            {item.siteName.charAt(0)}
          </span>
          <span className="serp-item__site-name">{item.siteName}</span>
          <span className="serp-item__url">{item.url}</span>
        </div>
        <h3 className="serp-item__title">
          <a href="#">{item.title}</a>
        </h3>
        {item.rating && (
          <p className="serp-item__rating">
            <Stars value={item.rating.value} />
            <span>{item.rating.value}</span>
            <span className="serp-item__rating-count">
              ({item.rating.count.toLocaleString('ru-RU')})
            </span>
          </p>
        )}
        <p className="serp-item__snippet">
          {item.date && <span className="serp-item__date">{item.date} — </span>}
          {item.snippet}
        </p>
      </div>
      {item.thumbnail && (
        <a href="#" className="serp-item__thumb">
          <img src={item.thumbnail} alt="" />
        </a>
      )}
      {item.posters && (
        <div className="serp-item__posters">
          {item.posters.map((src) => (
            <a key={src} href="#" className="serp-item__poster">
              <img src={src} alt="" />
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export function SerpQuestions() {
  const data = bulatovMock

  return (
    <section className="serp-block">
      <h2 className="serp-block__title">Вопросы по теме</h2>
      <ul className="serp-questions">
        {data.relatedQuestions.map((q) => (
          <li key={q}>
            <button type="button" className="serp-questions__btn">
              <span>{q}</span>
              <span className="serp-questions__chevron" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function SerpOrganic() {
  return (
    <section className="serp-organic">
      {bulatovMock.organicResults.map((item) => (
        <OrganicItem key={item.id} item={item} />
      ))}
    </section>
  )
}

export function SerpRelated() {
  return (
    <section className="serp-block serp-related">
      <h2 className="serp-block__title">Другие также ищут</h2>
      <ul className="serp-related__grid">
        {bulatovMock.relatedSearches.map((item) => (
          <li key={item.bold}>
            <a href="#" className="serp-related__chip">
              <span>
                {item.prefix} <strong>{item.bold}</strong>
              </span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function SerpFooter() {
  return (
    <footer className="serp-footer">
      <p className="serp-footer__legal">
        <em>
          Некоторые результаты поиска могли быть удалены, поскольку они нарушают
          Европейский закон о защите данных.{' '}
          <a href="#">Подробнее…</a>
        </em>
      </p>
      <div className="serp-footer__pager">
        <div className="serp-footer__logo" aria-hidden="true">
          <span className="g-blue">G</span>
          <span className="g-red">o</span>
          <span className="g-yellow">o</span>
          <span className="g-blue">o</span>
          <span className="g-green">o</span>
          <span className="g-red">o</span>
          <span className="g-yellow">o</span>
          <span className="g-blue">o</span>
          <span className="g-green">o</span>
          <span className="g-red">o</span>
          <span className="g-yellow">g</span>
          <span className="g-blue">l</span>
          <span className="g-green">e</span>
        </div>
        <nav className="serp-footer__pages" aria-label="Страницы результатов">
          <span className="serp-footer__page serp-footer__page--active">1</span>
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <a key={n} href="#" className="serp-footer__page">
              {n}
            </a>
          ))}
          <a href="#" className="serp-footer__next">
            Следующая
            <span aria-hidden="true">›</span>
          </a>
        </nav>
      </div>
    </footer>
  )
}
