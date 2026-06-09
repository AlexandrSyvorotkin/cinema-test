import photoAccident from '../../assets/Screenshot_3.png'
import photoDsp from '../../assets/дсп2.jpg'
import photoWife1 from '../../assets/new-fotos/фотожен1.jpg'
import photoWife2 from '../../assets/new-fotos/фотожен2.jpg'
import photoWife3 from '../../assets/new-fotos/фотожен3.jpg'
import type { OrganicResult } from '../../types/serp'
import './EnskiyVestnikSite.css'

type EnskiyVestnikSiteProps = {
  article: OrganicResult
}

const NAV = ['Главная', 'Новости', 'Культура', 'Общество', 'Афиша', 'Контакты']

export function EnskiyVestnikSite({ article }: EnskiyVestnikSiteProps) {
  return (
    <div className="ev-site">
      <header className="ev-header">
        <div className="ev-header__top">
          <span className="ev-header__edition">Газета Энска · с 1998 года</span>
        </div>
        <div className="ev-header__brand">
          <a href="#" className="ev-logo">
            Энский <span>вестник</span>
          </a>
        </div>
        <nav className="ev-nav" aria-label="Разделы">
          <ul>
            {NAV.map((item, index) => (
              <li key={item}>
                <a href="#" className={index === 1 ? 'ev-nav__active' : undefined}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="ev-main">
        <p className="ev-breadcrumb">
          <a href="#">Новости</a>
          <span aria-hidden="true"> › </span>
          <a href="#">Происшествия</a>
          <span aria-hidden="true"> › </span>
          <span>ДТП</span>
        </p>

        <article className="ev-article">
          <div className="ev-article__labels">
            <span className="ev-article__tag">Срочно</span>
            <span className="ev-article__tag ev-article__tag--muted">Цирк</span>
          </div>

          <h1 className="ev-article__title">{article.title}</h1>

          <div className="ev-article__gallery" aria-label="Фотографии погибшей">
            <figure className="ev-article__gallery-item ev-article__gallery-item--portrait">
              <img
                src={photoWife1}
                alt="Воздушная гимнастка на полотнах в цирковом манеже"
                loading="eager"
              />
            </figure>
            <figure className="ev-article__gallery-item ev-article__gallery-item--square">
              <img
                src={photoWife3}
                alt="Артистка на воздушном кольце под куполом цирка"
                loading="eager"
              />
            </figure>
            <figure className="ev-article__gallery-item ev-article__gallery-item--landscape">
              <img
                src={photoWife2}
                alt="Артистка в гримёрной перед зеркалом с лампочками"
                loading="eager"
              />
            </figure>
          </div>

          <p className="ev-article__meta">
            <span className="ev-article__author">Ольга Крылова</span>
          </p>

          <div className="ev-article__body">
            <p>
              Известный цирковой артист Марат Б. вёл машину на трассе. Ехавший
              впереди грузовичок резко затормозил. Марат Б. тоже успел
              затормозить, но грузовик резко поехал вперёд, арматура начала
              высыпаться из кузова.
            </p>

            <p>
              Один из прутьев пробил лобовое стекло легковушки и пронзил грудь
              жене Марата Б. — в прошлом цирковой гимнастке, которая также
              выступала ассистенткой на его выступлениях.
            </p>

            <figure className="ev-article__figure">
              <img
                className="ev-article__figure-img"
                src={photoAccident}
                alt="Разбитый автомобиль на трассе после столкновения"
                loading="lazy"
              />
            </figure>

            <h2 className="ev-article__subhead">«Он держался, пока не услышал новость»</h2>

            <p>
              Очевидцы рассказывают, что дорога в тот час была влажной после
              ночного дождя. Следов торможения на асфальте, по версии
              следователей, почти не осталось. Водитель грузовика не пострадал;
              он дал показания и был отпущен после осмотра.
            </p>

            <blockquote className="ev-article__quote">
              <p>
                Марат — человек сцены, привыкший держать удар. Но когда ему
                сообщили о случившемся, он сел на лавку у входа и долго не
                поднимался. Мы отменили репетицию. Сейчас главное — дать ему
                время, — рассказал «Энскому вестнику» режиссёр-постановщик
                Сергей Плотников, работавший с Булатовым более десяти лет.
              </p>
            </blockquote>

            <p>
              Супруга артиста тоже была артисткой цирка — воздушной гимнасткой.
              Она часто выступала в одной труппе с мужем и сопровождала его в
              поездках.
            </p>

            <figure className="ev-article__figure">
              <img
                className="ev-article__figure-img"
                src={photoDsp}
                alt="Марат Булатов с супругой"
                loading="lazy"
              />
            </figure>

            <h2 className="ev-article__subhead">Расследование и реакция циркового сообщества</h2>

            <p>
              Следственный комитет возбудил уголовное дело по статье о нарушении
              правил дорожного движения. Эксперты проверяют техническое
              состояние автомобиля и изучают записи с дорожных камер.
              Официальная причина выезда на встречку пока не названа.
            </p>

            <p>
              Гастрольная программа «Воздушный грани», где Булатов должен был
              открыть сезон, перенесена без новой даты. В РГИЦЭИ, который
              окончил артист, выразили соболезнования семье и сообщили, что
              учебный театр объявит минуту молчания перед ближайшим показом.
            </p>

            <p className="ev-article__note">
              Редакция «Энского вестника» приносит искренние соболезнования
              Марату Шамилиевичу Булатову, родным и близким погибшей. Если вы
              располагаете информацией об обстоятельствах ДТП, напишите на{' '}
              <a href="mailto:news@enskiy-vestnik.ru">news@enskiy-vestnik.ru</a>
              .
            </p>
          </div>
        </article>

        <aside className="ev-aside">
          <h2 className="ev-aside__title">Читают сейчас</h2>
          <ul className="ev-aside__list">
            <li>
              <a href="#">Цирк отменил премьеру после трагедии в семье Булатова</a>
            </li>
            <li>
              <a href="#">На подъезде к Энску ввели временное ограничение движения</a>
            </li>
            <li>
              <a href="#">Энск простился с жертвами аварии на трассе</a>
            </li>
          </ul>
        </aside>
      </main>

      <footer className="ev-footer">
        <p>© Энский вестник · enskiy-vestnik.ru</p>
        <p>Редакция: news@enskiy-vestnik.ru</p>
      </footer>
    </div>
  )
}
