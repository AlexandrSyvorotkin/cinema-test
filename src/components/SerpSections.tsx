import { useRef, useState } from 'react'
import { Link } from 'react-router'
import type { SerpImagePack } from '../types/searchMock'
import type { OrganicResult, RelatedSearch } from '../types/serp'
import './SerpSections.css'

function SerpItemVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const playVideo = () => {
    const video = videoRef.current
    if (!video) return
    video.controls = true
    void video.play()
  }

  return (
    <button
      type="button"
      className="serp-item__video"
      onClick={playVideo}
      aria-label="Смотреть видео"
    >
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && <span className="serp-item__video-play" aria-hidden="true" />}
    </button>
  )
}

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

function OrganicItem({
  item,
  linkTo,
}: {
  item: OrganicResult
  linkTo?: string
}) {
  const content = (
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
        {linkTo ? <span>{item.title}</span> : <a href="#">{item.title}</a>}
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
      {item.searchHint && <p className="serp-item__hint">{item.searchHint}</p>}
    </div>
  )

  return (
    <article className={`serp-item${item.video ? ' serp-item--has-video' : ''}`}>
      {linkTo ? (
        <Link to={linkTo} className="serp-item__link">
          {content}
        </Link>
      ) : (
        content
      )}
      {item.video && <SerpItemVideo src={item.video} />}
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

function SerpImagePackItems({ pack }: { pack: SerpImagePack }) {
  return (
    <>
      {pack.items.map((item) => (
        <article key={item.id} className="serp-item serp-item--image-pack">
          <div className="serp-item__content">
            <div className="serp-item__site">
              <span
                className="serp-item__favicon"
                style={{ backgroundColor: pack.faviconColor }}
                aria-hidden="true"
              >
                {pack.siteName.charAt(0)}
              </span>
              <span className="serp-item__site-name">{pack.siteName}</span>
              <span className="serp-item__url">{item.url}</span>
            </div>
            <h3 className="serp-item__title">
              <a href="#">{item.title}</a>
            </h3>
            <p className="serp-item__snippet">{item.snippet}</p>
            <div
              className={`serp-image-pack${item.images.length === 2 ? ' serp-image-pack--two' : ''}`}
            >
              {item.images.map((src) => (
                <a key={src} href="#" className="serp-image-pack__thumb">
                  <img src={src} alt="" loading="lazy" />
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </>
  )
}

export function SerpQuestions({ questions }: { questions: string[] }) {
  return (
    <section className="serp-block">
      <h2 className="serp-block__title">Вопросы по теме</h2>
      <ul className="serp-questions">
        {questions.map((q) => (
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

export function SerpOrganic({
  results,
  linkable,
  imagePack,
}: {
  results: OrganicResult[]
  linkable?: boolean
  imagePack?: SerpImagePack
}) {
  if (results.length === 0 && !imagePack) return null

  return (
    <section className="serp-organic">
      {imagePack && <SerpImagePackItems pack={imagePack} />}
      {results.map((item) => (
        <OrganicItem
          key={item.id}
          item={item}
          linkTo={linkable ? item.pagePath : undefined}
        />
      ))}
    </section>
  )
}

export function SerpRelated({ items }: { items: RelatedSearch[] }) {
  return (
    <section className="serp-block serp-related">
      <h2 className="serp-block__title">Другие также ищут</h2>
      <ul className="serp-related__grid">
        {items.map((item) => (
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
