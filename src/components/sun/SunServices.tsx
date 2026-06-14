import { Link } from 'react-router'
import {
  SUN_PRICE_CATEGORIES,
  SUN_PRICE_DISCLAIMER,
  formatPrice,
} from '../../data/sunPrices'

export function SunServices() {
  return (
    <article className="sun-services">
      <nav className="sun-services__breadcrumb" aria-label="Хлебные крошки">
        <Link to="/sun">Главная</Link>
        <span aria-hidden="true"> › </span>
        <span>Услуги и цены</span>
      </nav>

      <h1 className="sun-article__h1">Прейскурант услуг клиники «Солнце»</h1>
      <p className="sun-services__lead">
        Актуальные цены на консультации, диагностику, реабилитацию и комплексные
        программы для детей и взрослых. Точный объём услуг определяет врач на
        первичном приёме.
      </p>

      <div className="sun-services__note">
        <p>
          <strong>Запись по телефону:</strong> можно уточнить наличие свободных
          окон и стоимость программы до визита. При оплате курса из 10 и более
          процедур действует скидка 5–10%.
        </p>
      </div>

      {SUN_PRICE_CATEGORIES.map((category) => (
        <section key={category.id} className="sun-price-section">
          <h2 className="sun-price-section__title">{category.title}</h2>
          {category.description && (
            <p className="sun-price-section__desc">{category.description}</p>
          )}

          <div className="sun-price-table-wrap">
            <table className="sun-price-table">
              <thead>
                <tr>
                  <th scope="col">Услуга</th>
                  <th scope="col">Код</th>
                  <th scope="col">Цена</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
                  <tr key={item.name}>
                    <td>
                      <span className="sun-price-table__name">{item.name}</span>
                      {item.note && (
                        <span className="sun-price-table__note">{item.note}</span>
                      )}
                    </td>
                    <td className="sun-price-table__code">{item.code ?? '—'}</td>
                    <td className="sun-price-table__price">
                      {formatPrice(item.price)} ₽
                      <span className="sun-price-table__unit"> / {item.unit}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <p className="sun-services__disclaimer">{SUN_PRICE_DISCLAIMER}</p>

      <section className="sun-cta" aria-label="Запись на приём">
        <p className="sun-cta__title">НУЖНА ПОМОЩЬ С ВЫБОРОМ УСЛУГ?</p>
        <p className="sun-cta__sub">
          Запишитесь на консультацию — составим индивидуальный план
        </p>
        <button type="button" className="sun-cta__btn">
          ЗАПИСЬ НА КОНСУЛЬТАЦИЮ
        </button>
      </section>
    </article>
  )
}
