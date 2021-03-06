# Pruebas automatizadas - GHOST

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>

<p align="center">
    <a href="https://github.com/TryGhost/Ghost/releases/3.3.0">
        <img src="https://img.shields.io/static/v1?label=cypress&message=3.3.0&color=green" alt="Downloads" />
    </a>
</p>

## Documentos

[Estrategia de pruebas final](https://github.com/mgdarwin/Estrategia-de-Pruebas-Ghost-Final---Semana-8/blob/main/GRUPO_SEM8_Estrategia%20de%20Pruebas%20-%20TSDC%20-%20Ghost.pdf)

[Inventario pruebas exploratorias](https://github.com/mgdarwin/Estrategia-de-Pruebas-Ghost-Final---Semana-8/blob/main/GRUPO_SEM8_inventario-pruebas-exploratorias.pdf)

[Video de resumen estrategia de pruebas, resultados, pros y contras](https://uniandes-my.sharepoint.com/:v:/g/personal/malec_uniandes_edu_co/EXgrR06TOk1EmgHDKQX_4OQBQ7lrJhsgZm-OWkD6yh7OVA?e=AwQsc2)

## Repositorios

[Repositorio Kraken](https://github.com/mauricio-corredor/pruebas-automatizadas-kraken-ghost)

[Repositorio Resemble](https://github.com/jimmy-cardenas-miso/pruebas-automatizadas-ghost-resemble)

[Repositorio Backstop](https://github.com/jimmy-cardenas-miso/pruebas-automatizadas-ghost-backstop)

[Repositorio Cucumber](https://github.com/mauricio-corredor/pruebas-automatizadas-kraken-ghost/tree/main/Escenarios_cucumber)

[Wiki Pros y Contras](https://github.com/mauricio-corredor/pruebas-automatizadas-kraken-ghost/wiki/Analisis-de-las-herramientas)



## Installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)
<a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/static/v1?label=node&message=12.16.1&color=green" alt="Downloads" />
</a>

Install for Mac, Linux, or Windows

```bash
npm install
```

## Run
1. Deploy ghost and update url, email and password in `./cypress.json`
```bash
{
    "base_url": "YOUR_GHOST_URL",
    "auth": {
      "email": "YOUR_EMAIL",
      "password": "YOUR_PASSWORD"
    }
}
```
Example 
```bash
{
    "base_url": "http://localhost:2377",
    "auth": {
      "email": "pruebas@automatizadas.com",
      "password": "pruebas1234"
    }
}
```

2. Open terminal in root project folder and execute
```bash
./node_modules/.bin/cypress open
```
or
```bash
npm run cypress:start
```

3. Run any tests clicking scens

## Enable screenshot
Modify `take_screenshot` in `cypress.json`

Example
```bash
{
    "take_screenshot": true
}
```
or
```bash
{
    "take_screenshot": false
}
```

## Data pool

Se realizaron pruebas en los diferentes formularios del aplicativo `Ghost` en su versión `v3.42.5` mediante la inyección de datos con 3 estrategias diferentes:

I) A priori

II) Pseudo aleatorios

III) Aleatorios

Los datos aleatorios se generaron mediante el uso de la librería `faker.js`. Para su implementación se creó un archivo `data-pool` que contiene los diferentes tipos de datos de cada escenario organizados en un objeto con 3 arreglos en `/data/scen-X.js` de la siguiente manera:

```bash
export const SCEN_X_DATA = {
  'A priori': [
    {
      title: 'Titulo page',
      paragraph: 'Descripcion valida',
      ...
    }
  ],
  'Pseudo aleatorio': [
    {
      title: 'Titulo page',
      paragraph: faker.lorem.paragraph(),
      ...
    }
  ],
  'Aleatorio': [
    {
      title: faker.name.title(),
      paragraph: faker.lorem.paragraph(),
      ...
    }
  ]
}
```

Cada arreglo contiene los diferentes escenarios que son inyectados dentro de los casos de prueba. Se crearon escenarios específicos con el prefijo `scen-X-data-pool.specs.js` para diferenciar los que usan data pool.

Los escenarios con la estructura `scen-X-data-pool.specs.js` generan los casos de prueba dependiendo la fuente de datos de la siguiente manera (cypress gráfico):


<p align="center">
  <img src="https://user-images.githubusercontent.com/78035057/119295020-6932ae00-bc1b-11eb-9c01-e90c39baa316.png"/>
</p>


## Tests

| Escenario | Descripción |
| --- | --- |
| Escenario 1 | Login + Crear post + publicarlo + logout + validar post (producción) |
| Escenario 2 | Login + Des-publicar post + logout + validar post no publicado (producción) |
| Escenario 3 | Login + Abrir post + editar post + publicar + logout + validar post (producción) |
| Escenario 4 | Login + Crear Tag + logout + login + validar tag creado (administración) |
| Escenario 5 | Login + Entrar al post + Editarlo + Asignar Tag + Update + Publicar + logout + validar post (producción) |
| Escenario 6 | Login + Crear page + configurar “URL” + publicarlo + entrar a url base validar pagina (producción) + logout |
| Escenario 7 | Login + Entrar a page + editarla + publicarlo + logout + entrar a url base validar cambios pagina (producción) |
| Escenario 8 | Login + Entrar a page + borrarla +  logout + entrar a url base validar que no existe pagina (producción) | 
| Escenario 9 | Login + Entrar a page + asignar TAG+ publicarlo + logout + entrar a url base validar la asignación del TAG (producción) |
| Escenario 10 | Login + Entrar a page + des-asignar TAG+ publicarlo + logout + entrar a url base validar la NO asignación del TAG (producción)
| Escenario 11 | Login + Abrir post + eliminar post + logout + validar que no existe el post eliminado (producción) |
| Escenario 12 | Login + Entrar a Tags + borrar TAG +  logout + login + entrar a Tags + validar que no existe el TAG eliminado (administración) |
| Escenario 13 | Login + Entrar a Tags + Editar nombre de TAG + logout + login + entrar a Tags + validar que el nombre del TAG si cambio(administración)
| Escenario 14 | Login + Entrar a Tags + Editar description de TAG +  logout + login + entrar a Tags + validar que la descripción del TAG si cambio (administración) |
| Escenario 15 | Login + Entrar a Staff + Editar nombre del usuario +  logout + login + entrar a Staff + validar que el nombre del Usuario si cambio (administración) |
| Escenario 16 | Login + Entrar a Members + Crear nuevo miembro +  logout + login + entrar a Members + validar que el último miembro creado existe (administración) |
| Escenario 17 | Login + Entrar a Members + Eliminar miembro +  logout + login + entrar a Members + validar que se elimino correctamente (administración)  Escenario18- Login Errado + validar texto de error en login (Administración) |
| Escenario 18 | Login Correcto + validar vista de página principal (Administración) |
| Escenario 19 | Login Errado + validar texto de error en login (Administración) |
| Escenario 20 | Logout Correcto + validar la URL de logout (Administración) |


## Integrantes

| Nombre | Correo |
| --- | --- |
| Mauricio Corredor | malec@uniandes.edu.co |
| Ricardo Arango | r.arango@uniandes.edu.co |
| Darwin Moreno | d.moreno11@uniandes.edu.co |
| Jimmy Cárdenas | ja.cardenas3388@uniandes.edu.co |
