# Pruebas automatizadas - GHOST

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png"/>
</p>

<p align="center">
    <a href="https://github.com/TryGhost/Ghost/releases/3.3.0">
        <img src="https://img.shields.io/static/v1?label=cypress&message=3.3.0&color=green" alt="Downloads" />
    </a>
</p>
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
Ejemplo 
```bash
{
    "base_url": "http://localhost:2370",
    "auth": {
      "email": "prueba@automatizadas.com",
      "password": "pruebas1234"
    }
}
```

2. Open terminal in root project folder and execute
```bash
./node_modules/.bin/cypress open
```

3. Run any tests clicking scens

## Tests

| Escenario | Descripción |
| --- | --- |
| Escenario 1 | Login + Crear post + publicarlo + logout + validar post (localhost:2369/ producción) |
| Escenario 2 | Login + des-publicar post + logout + validar post no publicado (producción) |
| Escenario 3 | Login + abrir post + editar post + publicar + logout + validar post (producción) |
| Escenario 4 | Login + Crear Tag + logout + login + validar tag creado (localhost:2369/ghost - administración) |
| Escenario 5 | Login + Entrar al blog + Editarlo + Asignar Tag + Update + Publicar + logout + validar post (producción) |
| Escenario 6 | Login + Crear page + configurar “URL” + publicarlo + logout + entrar a localhost:2369/“URL” validar pagina (producción) |
| Escenario 7 | Login + Entrar a page + editarla + publicarlo + logout + entrar a localhost:2369/“URL” validar cambios pagina (producción) |
| Escenario 8 | Login + Entrar a page + borrarla +  logout + entrar a localhost:2369/“URL” validar que no existe pagina (producción) | 
| Escenario 9 | Login + Entrar a page + asignar TAG+ publicarlo + logout + entrar a localhost:2369/“URL” validar la asignación del TAG (producción) |
| Escenario 10 | Login + Entrar a page + des-asignar TAG+ publicarlo + logout + entrar a localhost:2369/“URL” validar la NO asignación del TAG (producción)
| Escenario 11 | Login + Entrar a page + Cambiar atributo de Post Access + publicarlo + logout + entrar a localhost:2369/“URL” validar su acceso (producción) |
| Escenario 12 | Login + Entrar a Tags + borrar TAG +  logout + login + entrar a Tags + validar que no existe el TAG eliminado (administración) |
| Escenario 13 | Login + Entrar a Tags + Editar nombre de TAG + logout + login + entrar a Tags + validar que el nombre del TAG si cambio(administración)
| Escenario 14 | Login + Entrar a Tags + Editar description de TAG +  logout + login + entrar a Tags + validar que la descripción del TAG si cambio (administración) |
| Escenario 15 | Login + Entrar a Staff + Editar nombre del usuario +  logout + login + entrar a Staff + validar que el nombre del Usuario si cambio (administración) |
| Escenario 16 | Login + Entrar a Members + Crear nuevo miembro +  logout + login + entrar a Members + validar que aumento el numero de miembros en 1 (administración) |
| Escenario 17 | Login + Entrar a Members + Eliminar miembro +  logout + login + entrar a Members + validar que se elimino correctamente (administración)  Escenario18- Login Errado + validar texto de error en login (Administración) |
| Escenario 19 | Login Correcto + validar texto de error en login (Administración) |
| Escenario 20 | Logout Correcto + validar la URL de logout (http://localhost:2369/ghost/#/signin) (Administración) |
