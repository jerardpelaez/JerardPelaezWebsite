import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: {
        en: 'Mobile Applications',
        id_ID: 'Applications',
      },
    },
    {
      id: 2,
      title: {
        en: 'Web Applications',
        id_ID: 'Web Applications',
      },
    },
    {
      id: 3,
      title: {
        en: 'Promotional Websites',
        id_ID: 'Promotional Websites',
      },
    },
  ]
})
