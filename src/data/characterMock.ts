import type { SearchMock } from '../types/searchMock'
import afishPhoto1 from '../assets/afish/photo_2026-06-09_11-47-11.jpg'
import afishPhoto2 from '../assets/afish/photo_2026-06-09_11-47-12.jpg'
import afishPhoto3 from '../assets/afish/photo_2026-06-09_11-47-12 (2).jpg'
import afishPhoto4 from '../assets/afish/photo_2026-06-09_11-47-13.jpg'
import afishPhoto5 from '../assets/afish/photo_2026-06-09_11-47-13 (2).jpg'
import afishPhoto6 from '../assets/afish/photo_2026-06-09_11-47-13 (3).jpg'
import afishPhoto7 from '../assets/afish/photo_2026-06-09_11-47-14.jpg'
import afishPhoto8 from '../assets/afish/photo_2026-06-09_11-47-14 (2).jpg'
import photoPoster from '../assets/new-fotos/афиша2.jpg'
import photoPosterStack from '../assets/new-fotos/афиша3.jpg'
import videoPerformance from '../assets/вид1.mp4'
import photoCircusVenue from '../assets/фото2.png'

export const characterMock: SearchMock = {
  variant: 'character',
  displayName: 'Марат Шамилиевич Булатов',
  role: 'Российский артист цирка и эстрады',
  tabs: [
    { label: 'Обзор', active: true },
    { label: 'Фильмы и сериалы', disabled: true },
  ],
  photos: {
    main: photoPoster,
    top: photoPosterStack,
    bottom: afishPhoto4,
  },
  featuredArticle: {
    source: 'Цирковой вестник',
    sourceShort: 'CV.RU',
    title: 'Марат Булатов открыл сезон скандальным номером в цирке',
    snippet:
      'Зрители в восторге от новой программы. Премьера прошла под куполом Большого московского цирка…',
    image: photoCircusVenue,
  },
  instagramCard: {
    source: 'Доброграм · marat.bulatov.circus',
    title: 'Репетиция перед гастролями — закулисье',
    snippet:
      'Финальная отработка номера перед выездом на гастроли: акробатика, репетиционный зал и команда за кулисами. Короткий ролик из серии «дорога на манеж».',
    stats: '1 284 просмотра · 96 отметок «Нравится»',
    duration: '0:45',
    image: '/photos/video.jpg',
  },
  relatedQuestions: [
    'Где выступает Марат Шамилиевич Булатов?',
    'Какие номера ставил Булатов?',
    'Сколько лет Булатов работает в цирке?',
    'Был ли Булатов на гастролях за рубежом?',
  ],
  imagePack: {
    siteName: 'Афиша.ру',
    faviconColor: '#e65100',
    items: [
      {
        id: 'afisha-moscow',
        title: 'Марат Булатов — афиши цирковых программ в Москве',
        snippet:
          'Грандиозное шоу, смертельный акт и ножебросание мистера Икса. Даты премьер и билеты на представления в столице.',
        url: 'afisha.ru › circus › bulatov-moscow',
        images: [afishPhoto2, afishPhoto6, afishPhoto7],
      },
      {
        id: 'afisha-mr-x',
        title: 'Мистер Икс — ножебросательное шоу с участием Булатова',
        snippet:
          'Афиши международных гастролей: Cirkus der Wunder, Grand Circus Spectacle и Circus Arcanum.',
        url: 'afisha.ru › circus › mr-x-shows',
        images: [afishPhoto1, afishPhoto3, afishPhoto5],
      },
      {
        id: 'afisha-retro',
        title: 'Ретро-афиши и анонсы сезона — Марат Булатов',
        snippet:
          'Винтажные постеры цирковых номеров, ночные представления и классическое ножебросание.',
        url: 'afisha.ru › circus › bulatov-posters',
        images: [afishPhoto4, afishPhoto8],
      },
    ],
  },
  organicResults: [
    {
      id: '1',
      pagePath: '/enskiy-vestnik',
      siteName: 'Энский вестник',
      url: 'enskiy-vestnik.ru › news › bulatov-tragedy',
      faviconColor: '#5c6bc0',
      title: 'Страшная трагедия на дороге',
      snippet:
        'Жена известного артиста цирка Марата Шамилиевича Булатова не выжила в ДТП.',
    },
    {
      id: '2',
      pagePath: '/site/rupediiaya',
      siteName: 'Рупедиияя',
      url: 'ru.rupediiaya.org › wiki › Булатов,_Марат_Шамилиевич',
      faviconColor: '#9e9e9e',
      title: 'выступление марата шамильевича - видео',
      snippet:
        'Марат Шамилиевич Булатов — российский артист цирка и эстрады, режиссёр-постановщик номеров. Лауреат региональных премий в области циркового искусства.',
      video: videoPerformance,
    },
    {
      id: '3',
      pagePath: '/site/novosti-enska',
      siteName: 'Новости энска',
      url: 'novosti-enska.ru › culture › bulatov-marat',
      faviconColor: '#ff6f00',
      title: 'Марат Булатов открыл гастрольный сезон в Энске',
      snippet:
        'Артист цирка Марат Шамилиевич Булатов выступил с премьерным номером на городской арене. Зрители отметили сложную акробатику и постановку режиссёра.',
    },
    {
      id: '4',
      pagePath: '/site/kinomylo',
      siteName: 'Киномыло',
      url: 'kinomylo.ru › person › bulatov_marat',
      faviconColor: '#1565c0',
      title: 'Марат Шамилиевич Булатов — биография и карьера',
      snippet:
        'Биография, фото, программы и гастроли. Марат Шамилиевич Булатов — известный артист современного цирка.',
    },
    {
      id: '5',
      pagePath: '/site/prostar',
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
      pagePath: '/site/5dney',
      siteName: '5дней.ру',
      url: '5dney.ru › stars › bio › bulatov-marat',
      faviconColor: '#c62828',
      title: 'Марат Шамилиевич Булатов: биография, личная жизнь',
      snippet:
        'Марат Шамилиевич Булатов родился в Уфе. С детства занимался акробатикой, позже поступил в цирковой институт…',
    },
    {
      id: '7',
      pagePath: '/site/dobrogram',
      siteName: 'Доброграм',
      url: 'dobrogram.ru › marat.bulatov.circus',
      faviconColor: '#ff8a3d',
      title: 'Марат Булатов (@marat.bulatov.circus)',
      snippet:
        '24,8 тыс. подписчиков, 412 публикаций — артист цирка, закулисье, репетиции, гастроли. Смотрите фото и видео…',
    },
    {
      id: '8',
      pagePath: '/site/rgicei',
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
