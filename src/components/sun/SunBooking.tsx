import { SUN_PHONE_DISPLAY } from '../../data/sunSite'

export function SunBooking() {
  return (
    <section className="sun-booking" aria-labelledby="sun-booking-title">
      <div className="sun-booking__inner">
        <div className="sun-booking__form-wrap">
          <h2 id="sun-booking-title" className="sun-booking__title">
            <span className="sun-booking__title-blue">ЗАПИШИТЕСЬ</span>{' '}
            <span className="sun-booking__title-green">НА ПРИЕМ В КЛИНИКУ</span>
          </h2>
          <p className="sun-booking__lead">
            Обращайтесь к нам и мы обязательно поможем Вам справиться с недугом,
            доставляющим Вам беспокойство!
          </p>

          <form className="sun-booking__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="sun-booking__input"
              placeholder="Ваше имя"
              autoComplete="name"
            />
            <div className="sun-booking__phone">
              <span className="sun-booking__prefix" aria-hidden="true">
                RU
              </span>
              <input
                type="tel"
                className="sun-booking__input sun-booking__input--phone"
                placeholder={SUN_PHONE_DISPLAY}
                autoComplete="tel"
              />
            </div>
            <label className="sun-booking__consent">
              <input type="checkbox" defaultChecked />
              <span>
                Я ознакомлен с{' '}
                <a href="#">политикой конфиденциальности</a> и даю{' '}
                <a href="#">согласие</a> на обработку персональных данных
              </span>
            </label>
            <button type="submit" className="sun-booking__submit">
              ОТПРАВИТЬ
            </button>
          </form>
        </div>

        <div className="sun-booking__visual" aria-hidden="true">
          <div className="sun-booking__doctor">
            <div className="sun-booking__doctor-face">👨‍⚕️</div>
          </div>
        </div>
      </div>
    </section>
  )
}
