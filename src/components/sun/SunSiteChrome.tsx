import {
  SUN_CLINIC_NAME,
  SUN_CLINIC_NAME_TITLE,
  SUN_PHONE_DISPLAY,
  SUN_PHONE_TEL,
} from '../../data/sunSite'

export function SunSiteHeader() {
  return (
    <header className="sun-header">
      <div className="sun-header__inner">
        <a href="#" className="sun-logo">
          <span className="sun-logo__icon" aria-hidden="true" />
          <span className="sun-logo__text">{SUN_CLINIC_NAME}</span>
        </a>

        <div className="sun-header__info">
          <p className="sun-header__line">
            <span className="sun-header__label">Время работы:</span> Пн-пт / 8:00
            - 17:00
          </p>
          <p className="sun-header__line">
            <a href={`tel:${SUN_PHONE_TEL}`}>{SUN_PHONE_DISPLAY}</a>
          </p>
        </div>

        <div className="sun-header__social" aria-label="Социальные сети">
          <a href="#" className="sun-social sun-social--viber" aria-label="Viber" />
          <a href="#" className="sun-social sun-social--vk" aria-label="ВКонтакте" />
          <a href="#" className="sun-social sun-social--ok" aria-label="Одноклассники" />
        </div>

        <button type="button" className="sun-header__cta">
          ОБРАТНЫЙ ЗВОНОК
        </button>
      </div>
    </header>
  )
}

export function SunSiteNav() {
  const items = [
    'ГЛАВНАЯ',
    'О КЛИНИКЕ',
    'ОТДЕЛЕНИЯ',
    'СПЕЦИАЛИСТЫ',
    'УСЛУГИ',
    'ДИАГНОЗЫ',
    'КОНТАКТЫ',
    'АКЦИИ',
    'ФИЛИАЛЫ',
  ]

  return (
    <nav className="sun-nav" aria-label="Основное меню">
      <ul className="sun-nav__list">
        {items.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function SunSiteFooter() {
  return (
    <footer className="sun-footer">
      <div className="sun-footer__inner">
        <div className="sun-footer__brand">
          <span className="sun-footer__logo" aria-hidden="true" />
          <p className="sun-footer__name">{SUN_CLINIC_NAME}</p>
          <p className="sun-footer__tagline">
            Клиника неврологии и реабилитации для детей и взрослых «{SUN_CLINIC_NAME_TITLE}»
          </p>
        </div>

        <div className="sun-footer__cols">
          <div className="sun-footer__col">
            <p className="sun-footer__title">Контакты</p>
            <a href={`tel:${SUN_PHONE_TEL}`}>{SUN_PHONE_DISPLAY}</a>
            <p>Ежедневно Пн–Пт 8:00–17:00</p>
          </div>
          <div className="sun-footer__col">
            <p className="sun-footer__title">Разделы</p>
            <a href="#">О клинике</a>
            <a href="#">Специалисты</a>
            <a href="#">Диагнозы</a>
            <a href="#">Филиалы</a>
          </div>
          <div className="sun-footer__col">
            <p className="sun-footer__title">Пациентам</p>
            <a href="#">Запись на приём</a>
            <a href="#">Акции</a>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
      <div className="sun-footer__bottom">
        <p>
          © {new Date().getFullYear()} {SUN_CLINIC_NAME_TITLE}. Информация на сайте не
          заменяет очную консультацию врача.
        </p>
      </div>
    </footer>
  )
}
