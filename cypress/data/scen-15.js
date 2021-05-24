import * as faker from 'faker';

export const SCEN_15_DATA = {
  'A priori': [
    {
      name: 'Prueba',
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: 'https://www.google.com/',
      bio: 'Esta es una bio'
    },
    {
      name: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: 'https://www.google.com/',
      bio: 'Esta es una bio',
      error: 'Name is too long'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: 'pruebas@automatizadascom',
      website: 'https://www.google.com/',
      bio: 'Esta es una bio',
      error: 'Please supply a valid email address'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: 'pruebasautomatizadas.com',
      website: 'https://www.google.com/',
      bio: 'Esta es una bio',
      error: 'Please supply a valid email address'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: 'pruebas@automatizadascom',
      website: 'https://www.google.com/',
      bio: 'Esta es una bio',
      error: 'Please supply a valid email address'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: 'no web',
      bio: 'Esta es una bio',
      error: 'Website is not a valid url'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: 'https://www.google.com/',
      bio: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta)',
      error: 'Bio is too long'
    }
  ],
  'Pseudo aleatorio': [
    {
      name: 'Prueba',
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(1)
    },
    {
      name: faker.lorem.paragraph(3),
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(1),
      error: 'Name is too long'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: faker.lorem.word(),
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(1),
      error: 'Please supply a valid email address'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: faker.lorem.word(),
      bio: faker.lorem.paragraph(1),
      error: 'Website is not a valid url'
    },
    {
      name: 'Prueba',
      slug: 'slug',
      email: Cypress.env('auth').email,
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(6),
      error: 'Bio is too long'
    }
  ],
  'Aleatorio': [
    {
      name: faker.name.firstName(),
      slug: faker.lorem.slug(),
      email: Cypress.env('auth').email,
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(1)
    },
    {
      name: faker.lorem.paragraph(3),
      slug: faker.lorem.slug(),
      email: Cypress.env('auth').email,
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(1),
      error: 'Name is too long'
    },
    {
      name: faker.name.firstName(),
      slug: faker.lorem.slug(),
      email: faker.lorem.word(),
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(1),
      error: 'Please supply a valid email address'
    },
    {
      name: faker.name.firstName(),
      slug: faker.lorem.slug(),
      email: Cypress.env('auth').email,
      website: faker.lorem.word(),
      bio: faker.lorem.paragraph(1),
      error: 'Website is not a valid url'
    },
    {
      name: faker.name.firstName(),
      slug: faker.lorem.slug(),
      email: Cypress.env('auth').email,
      website: faker.internet.url(),
      bio: faker.lorem.paragraph(6),
      error: 'Bio is too long'
    }
  ]
}
