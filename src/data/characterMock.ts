import type { SearchMock } from '../types/searchMock'
import photoPortrait from '../assets/Screenshot_1.png'
import photoCircus from '../assets/Screenshot_2.png'
import photoCircusVenue from '../assets/цирк.png'

export const characterMock: SearchMock = {
  variant: 'character',
  displayName: 'Марат Шамилиевич Булатов',
  role: 'Российский артист цирка и эстрады',
  tabs: [
    { label: 'Обзор', active: true },
    { label: 'Фильмы и сериалы', disabled: true },
  ],
  age: 48,
  birthShort: '12 мар. 1978 г.',
  photos: {
    main: photoPortrait,
    top: photoCircus,
    bottom: photoCircus,
  },
  featuredArticle: {
    source: 'Цирковой вестник',
    sourceShort: 'CV.RU',
    title: 'Марат Булатов открыл сезон скандальным номером в цирке',
    snippet:
      'Зрители в восторге от новой программы. Премьера прошла под куполом Большого московского цирка…',
    time: '4 дня назад',
    image: photoCircusVenue,
  },
  instagramCard: {
    source: 'Доброграм · marat.bulatov.circus',
    title: 'Репетиция перед гастролями — закулисье',
    time: '3 недели назад',
    duration: '0:45',
    image: '/photos/video.jpg',
  },
  relatedQuestions: [
    'Где выступает Марат Шамилиевич Булатов?',
    'Какие номера ставил Булатов?',
    'Сколько лет Булатов работает в цирке?',
    'Был ли Булатов на гастролях за рубежом?',
  ],
  organicResults: [
    {
      id: '1',
      siteName: 'Цирк-Театр.Ру',
      url: 'circus-theatre.ru › artist › bulatov',
      faviconColor: '#5c6bc0',
      title: 'Марат Шамилиевич Булатов — артист цирка, биография',
      snippet:
        'Марат Шамилиевич Булатов — российский артист цирка, режиссёр-постановщик. Родился 12 марта 1978 года в Уфе. Окончил РГИЦЭИ. Участвовал в гастрольных программах…',
      thumbnail: photoPortrait,
    },
    {
      id: '2',
      siteName: 'Рупедиияя',
      url: 'ru.rupediiaya.org › wiki › Булатов,_Марат_Шамилиевич',
      faviconColor: '#9e9e9e',
      title: 'Булатов, Марат Шамилиевич — Рупедиияя',
      snippet:
        'Марат Шамилиевич Булатов — российский артист цирка и эстрады, режиссёр-постановщик номеров. Лауреат региональных премий в области циркового искусства.',
      thumbnail: photoPortrait,
    },
    {
      id: '3',
      siteName: 'Киноооо',
      url: 'kinoooo.ru › name › 5128401',
      faviconColor: '#ff6f00',
      title: 'Марат Шамилиевич Булатов — артист',
      snippet:
        'Марат Шамилиевич Булатов. Артист цирка, ведущий программ. Участие в телевизионных цирковых шоу и спецпроектах.',
      posters: [photoCircus, photoPortrait, photoCircus],
    },
    {
      id: '4',
      siteName: 'Киномыло',
      url: 'kinomylo.ru › person › bulatov_marat',
      faviconColor: '#1565c0',
      title: 'Марат Шамилиевич Булатов — биография и карьера',
      snippet:
        'Биография, фото, программы и гастроли. Марат Шамилиевич Булатов — известный артист современного цирка.',
      posters: [photoCircus, photoPortrait, '/photos/video.jpg'],
    },
    {
      id: '5',
      siteName: 'Простар',
      url: 'prostar.ru › people › bulatov',
      faviconColor: '#7b1fa2',
      title: 'Марат Шамилиевич Булатов',
      snippet:
        'Артист цирка, режиссёр. Участник фестивалей и конкурсов циркового искусства. Рост 181 см, образование РГИЦЭИ.',
      rating: { value: 4.8, count: 1842 },
    },
    {
      id: '6',
      siteName: '5дней.ру',
      url: '5dney.ru › stars › bio › bulatov-marat',
      faviconColor: '#c62828',
      title: 'Марат Шамилиевич Булатов: биография, личная жизнь',
      date: '18 февр. 2025 г.',
      snippet:
        '18 февр. 2025 г. — Марат Шамилиевич Булатов родился в Уфе. С детства занимался акробатикой, позже поступил в цирковой институт…',
      thumbnail: photoCircus,
    },
    {
      id: '7',
      siteName: 'Доброграм',
      url: 'dobrogram.ru › marat.bulatov.circus',
      faviconColor: '#ff8a3d',
      title: 'Марат Булатов (@marat.bulatov.circus)',
      snippet:
        '24,8 тыс. подписчиков, 412 публикаций — артист цирка, закулисье, репетиции, гастроли. Смотрите фото и видео…',
    },
    {
      id: '8',
      siteName: 'РГИЦЭИ',
      url: 'rgicei.ru › graduates › bulatov',
      faviconColor: '#2e7d32',
      title: 'Выпускники — Булатов Марат Шамилиевич',
      snippet:
        'Выпускник кафедры режиссуры и постановки цирковых программ. Учебные проекты, дипломные работы, участие в отчётных показах.',
    },
  ],
  relatedSearches: [
    { prefix: 'Булатов Марат Шамилиевич', bold: 'в молодости' },
    { prefix: 'Булатов Марат Шамилиевич', bold: 'дети' },
    { prefix: 'Булатов Марат Шамилиевич', bold: 'биография' },
    { prefix: 'Булатов Марат Шамилиевич', bold: 'фото' },
    { prefix: 'Булатов Марат Шамилиевич', bold: 'доброграм' },
    { prefix: 'Булатов Марат Шамилиевич', bold: 'гастроли' },
    { prefix: 'Булатов Марат Шамилиевич', bold: 'рост' },
  ],
}
