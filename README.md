# Astro UI Components | Testimonials

## Componentes disponibles en esta rama

### Testimonials
Un componente para mostrar una lista de testimonios o comentarios de los usuarios.
- Imagen o avatar de usuario.
- Nombre, reseña y calificación de usuario.
- Utiliza datos provenientes del archivo testimonials.json.

### Welcome
Un componente de bienvenida que utiliza el componente Testimonials para mostrar reseñas.

## Estructura del proyecto

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