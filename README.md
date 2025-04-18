# Hero Component

Este repositorio incluye un componente diseñado para mostrar un hero sobre un producto o servicio.

## 🚀 Estructura del Proyecto

```plaintext
testimonial/
├── public/
│   ├── favicon.svg
│   ├── avatars/
├── src/
│   ├── assets/
│   │   └── (Archivos estáticos como imágenes o íconos)
│   ├── components/
│   │   ├── Welcome.astro
│   │   ├── Testimonials/
│   │   │   ├── Testimonials.astro
│   │   │   └── Testimonials.module.css
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── reset.css
│   └── data/
│       └── testimonials.json
├── package.json
├── pnpm-lock.yaml
├── README.md
└── LICENSE
```

## 🌟 Componentes
1. Testimonials

Descripción: Este componente está diseñado para mostrar una lista de testimonios o comentarios de los usuarios. Utiliza datos provenientes del archivo testimonials.json ubicado en el fichero data. 
El estilo está definidos en Testimonials.module.css.


## 🧞 Comandos
Todos los comandos se ejecutan desde la raíz del proyecto:

pnpm install	Instala las dependencias del proyecto
pnpm dev	Inicia el servidor de desarrollo en localhost:4321
pnpm build	Genera el sitio para producción en ./dist/
pnpm preview	Previsualiza el sitio generado localmente

## 📦 Dependencias
Este proyecto utiliza las siguientes dependencias principales:

1. Astro: Framework para construir sitios web rápidos y modernos.
2. CSS Modules: Para encapsular estilos específicos de los componentes.
3. JSON: Para manejar los datos de los testimonios (archivo testimonials.json).
