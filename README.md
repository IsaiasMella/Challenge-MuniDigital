# Artear Challenge Horóscopo
### Descripción
El proyecto concistia en crear una aplicación de lista de tareas, esta aplicacion debia cumplir con los siguientes requisitos:\
\
_1 - Agregar tareas a la lista con un título y una descripción._\
_2 - Marcar una tarea como completada, rechazada o en curso._\
_3 - Filtrar tareas por su estado (completadas, rechazadas, en curso o todas)._\
_4 - Filtrar tareas por su título (Que no discrimine entre mayúsculas y minúsculas, para realizar este filtro se spera la implementación de 2 funciones de arreglo)._\
_5 - Filtrar tareas por estado y título._\
_6 - Editar el título y la descripción de una tarea existente. (Mantener registro (fecha, hora y valor anterior) de la última edición)_\
_7 - Eliminar tareas. (Eliminación a nivel lógico)._

## ***Desiciones:***
* Al ver que en la descripcion del proyecto a realizar el nombre de los estados estaba en español, se decidio respetar el lenguaje y dejar el estado de la tarea, descripciones, titulos, etc... en español. No es asi con nombres de variables, funciones o nombres de componentes
* La forma de cambiar el estado de las tareas es con Drag and Drop


### Patrones de diseño utilizados

* Componentización
* Context API
* Hooks
* Compound Components
* Controlled Components
* Lifting State Up

### Instalación 🔧

_Dependencias_

```
npm i o pnpm i
```

## Construido con 🛠️

* [React.js](https://create-react-app.dev/docs/getting-started)
* [Firebase](https://firebase.google.com/?hl=es)
* [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
* [Vite](https://vitejs.dev/) - Compilador
