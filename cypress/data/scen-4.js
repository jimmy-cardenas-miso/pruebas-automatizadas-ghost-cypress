import * as faker from 'faker';

export const SCEN_4_DATA = {
  'A priori': [
    {
      title: 'Titulo tag',
      slug: 'tituloTag',
      paragraph: 'Descripcion valida'
    },
    {
      title: '',
      slug: '',
      paragraph: '',
      error: 'You must specify a name for the tag.'
    },
    {
      title: '',
      slug: 'tituloTag',
      paragraph: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      error: 'You must specify a name for the tag.'
    },
    {
      title: 'Titulo tag',
      slug: 'tituloTag',
      paragraph: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      error: 'Description cannot be longer than 500 characters.'
    }
  ],
  'Pseudo aleatorio': [
    {
      title: 'Titulo tag',
      slug: faker.lorem.slug(),
      paragraph: faker.lorem.paragraph(),
    },
    {
      title: '',
      slug: 'slugTag',
      paragraph: faker.lorem.paragraph(),
      error: 'You must specify a name for the tag.'
    },
    {
      title: faker.name.title(),
      slug: 'slugTag',
      paragraph: faker.lorem.paragraph(20),
      error: 'Description cannot be longer than 500 characters.'
    },
  ],
  'Aleatorio': [
    {
      title: faker.name.title(),
      slug: faker.lorem.slug(),
      paragraph: faker.lorem.paragraph(),
    },
    {
      title: '',
      slug: faker.lorem.slug(),
      paragraph: faker.lorem.paragraph(),
      error: 'You must specify a name for the tag.'
    },
    {
      title: faker.name.title(),
      slug: faker.lorem.slug(),
      paragraph: faker.lorem.paragraph(20),
      error: 'Description cannot be longer than 500 characters.'
    }
  ]
}
