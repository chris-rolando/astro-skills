# Handbook: AstroJS

# 1. Fundamentos

**¿Por qué usar Astro?**

🔑 Para crear sitios web orientados a contenido.

## 1. ¿Qué es Astro?

🚀 Astro es el framework web para construir sitios web orientados al contenido, como blogs, marketing y comercio electrónico. Reduce la sobrecarga y complejidad de JS. Posee un excelente SEO.

## 1. Características de Astro:

- 🔑 Permite integrar librerías de JS.
- Rendimiento optimizado.
- Islas de interactividad.
- Agnóstico de frameworks.
- SEO amigable: HTML estático que facilita la indexación.

## 2. Enfoque en el contenido
Astro es ideal para crear:
- blogs
- sitios de documentación
- portafolios
- sitios de comercio electrónico basados en contenido.

## 2. ¿Cómo funciona Astro?

Se basa en:

- 🔑 Generación estática: pre-renderiza el proyecto en HTML estático, por lo que el usuario recibe páginas listas.
- Hidratación parcial: se envía el JS necesario para "islas".
- Componentes como islas: los componentes se tratan como "islas".
- Fuentes de contenido: permite obtener datos de diversas fuentes como: Markdown, API o BDs, y generar contenido dinámico.

## 3. ¿Qué son componentes?

🚀 Son _bloques de código reutilizables_ que encapsulan una porción de la UI.
- Estos, permiten dividir la UI en partes pequeñas y manejables.

🦖 Es decir, son bloques de construcción para crear la UI del proyecto. Pueden contener HTML, CSS y JJS; Recibir propiedades (props) y admitir slots para insertar contenido dinámico.

## 4. ¿Qué son layouts?

🚀 Son un _tipo especial de componente para definir una estructura visual común_ de múltiples páginas.

🦖 Es decir, proporcionan un diseño consistente como una plantilla.

### 🤖 Ejemplo de Layout

```astro
---
// Layout.astro
---
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitio Web</title>
    <style>
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
      }
      header {
        background-color: #f0f0f0;
        padding: 20px;
      }
      footer {
        background-color: #e0e0e0;
        padding: 10px;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Encabezado</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>Pie de página</p>
    </footer>
    <script>
        console.log("Script cargado");
    </script>
  </body>
</html>
```

## 5. ¿Qué es `<slot />`?
🚀 Es un _marcador de posición_ para contenido, que permite la inserción específica de un componente.

### Uso de `<slot />`
1. En layouts:
  Cuando una página utiliza un layout, el contenido de esa página se inserta automáticamente en el lugar donde se encuentra el `<slot />` dentro del layout.
2. En componentes:
  Cuando un componente se utiliza dentro de otro, el contenido que se pasa al componente se inserta en el `<slot />`.

## 6. ¿Qué es arquitectura de islas?
🚀 Una isla se refiere a componentes de UI que se manejan de manera independiente.

1. Una isla del cliente es un componente de UI interactivo que se hidrata por separado del resto de la página.
2. Una isla del servidor es un componente de UI que se renderiza en el servidor y su contenido dinámico se entrega al cliente por separado del resto de la página.

## 7. Carpeta `public/`
Este fichero está diseñado para archivos estáticos, es decir que no requieren ningún procesamiento por parte de Astro.

## 8. Carpeta `src/assets/`
Este fichero esta diseñado para colocar archivos que Astro puede optimizar y procesar.

## En resumen:
Astro es la opción para construir sitios web modernos y de alto rendimiento que esten centrados en el contenido.
---
# 2. Crear proyecto Astro

**Instalaciones previas**
- Node.js

## 1. Ejecutar el asistente 

1. En pnpm: `pnpm create astro@latest`
  Ejecutar servidor: `pnpm dev`

2. En yarn: `yarn create astro`
  Ejecutar servidor: `yarn run dev`

3. En npm: `npm create astro@latest`
  Ejecutar servidor: `npm run dev`

## En resumen: 
Para crear un nuevo proyecto usar: pnpm create astro@latest
---
# 3. Estructura de un proyecto Astro

## 0. Archivo `.astro`
Un archivo .astro esta dividido en dos partes.
  1. Frontmatter: delimitada por tres guiones --- 
    Este segmento permite escribir JS, importar modulos, o traer informacion de una API.
  2. Template: donde se escribe el html, y se puede intercalar código.

## 1. Punto de entrada
El archivo `src/pages/index.astro` es el punto de entrada de la app.

## 2. Directorio `public/`
Para archivos estáticos que no requieren ningún procesamiento por parte de Astro.

## 3. Directorio `src/`
Es el directorio principal

### 1. Sub directorio `src/pages/`
Cada archivo `.astro` o `.md` dentro de `src/pages/` se convierte automáticamente en una ruta en tu sitio web.

### 2. Sub directorio `src/components/`
Para componentes reutilizables y sus estilos. 

### 3. Sub directorio `src/layouts/`
Para layouts.

### 4. Sub directorio `src/styles/`
Se utiliza para almacenar hojas de estilo CSS globales.

### 5. Sub directorio `src/assets/`
Para almacenar imágenes, fuentes y otros archivos.

## 4. Archivo `astro.config.mjs`
Archivo de configuración principal de Astro. 

## 5. Archivo `package.json`
Archivo que contiene información sobre el proyecto, como las dependencias instaladas y los scripts de compilación.

## 6. Nomenclatura Recomendada:

1. Carpetas Componentes:	PascalCase o kebab-case	`MiComponente/ o mi-componente/`  
  Componentes:	PascalCase	`MiComponente.astro`  
  Islas:	PascalCase	`MiComponenteInteractiva.astro` 
2. Carpetas Páginas:	kebab-case	`productos/`  
  Páginas	kebab-case	`sobre-mi.astro`  
3. Carpetas Layout:	PascalCase	`BaseLayout`/ 
  Layouts:	PascalCase	`BaseLayout.astro`  
4. Otros Archivos:	kebab-case	`global.css, utils.js`

## En resumen: 
Astro es abierto y brinda control de la estructura del proyecto.
---
# 4. Agregar Tailwind CSS

1. Instalación rápida: Ejecutar `npx astro add tailwind`
2. Instalación manual: `pnpm add -D tailwindcss postcss autoprefixer`
  Requiere: 1. Inicializar Tailwind CSS, 2. Configurar los archivos de plantilla, 3. Agregar las directivas de Tailwind CSS al CSS global.

## En resumen:
Para agregar Tailwind usar: npx astro add tailwind
---
# FAQ's

## ¿Cuándo usar un Layout y cuando llamar a un componente dentro de otro?
Según el alcance y el propósito

**Cuándo usar un Layout**
Cuando necesite la *estructura visual de Página Compartida*

**Cuándo llamar a un componente dentro de otro**
Cuando neceste *reutilizar UI Específica*
---
# Documentacion

https://docs.astro.build/en/getting-started/
---
# Guía de uso

**Versión: 1.2**
---
## 0. Indice 

🚀 Concepto

🤖 Extra

🔑 Importante, palabra clave

👑 Buena practica

🥷🏻 código, ejemplo, hack

🦖 Recordatorio
---
# 🦖 Lista de pendientes: 
Conceptos por ampliar:
1. Routing: Se basa en la estructura de carpetas dentro de src/pages.
2. Estilos: Puedes usar CSS, Sass, Tailwind, entre otros.
3. Ejemplos de islas, usando interactividad de componentes y frameworks