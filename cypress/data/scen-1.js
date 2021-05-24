import * as faker from 'faker';

export const SCEN_1_DATA = {
  'A priori': [
    {
      title: 'Titulo post',
      paragraph: 'Descripcion valida'
    },
    {
      title: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
      paragraph: 'Descripcion valida',
      error: 'Title cannot be longer than 255 characters.'
    }
  ],
  'Pseudo aleatorio': [
    {
      title: 'Titulo post',
      paragraph: faker.lorem.paragraph(),
    },
    {
      title: faker.lorem.paragraph(20),
      paragraph: 'Descripcion valida',
      error: 'Title cannot be longer than 255 characters.'
    }
  ],
  'Aleatorio': [
    {
      title: faker.name.title(),
      paragraph: faker.lorem.paragraph(),
    },
    {
      title: faker.lorem.paragraph(20),
      paragraph: faker.lorem.paragraph(),
      error: 'Title cannot be longer than 255 characters.'
    }
  ]
}
