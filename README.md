FIXME: RESPONSIVE DESING, reademe, name

# Astro UI Components | Contact-us

## Componentes disponibles en esta rama

### ContactCard
Un componente para mostrar información de la empresa.
- Dirección, número telefónico, correo electrónico y mapa.

### ContactForm
Un componente con un formulario interactivo para enviar consultas. Incluye los siguientes campos:

- Nombre.
- Correo electrónico.
- Título.
- Mensaje.

### Welcome
Un componente de bienvenida.

## Estructura del proyecto

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── Welcome.astro
│   │   ├── ContactInfoCard/
│   │   │   ├── ContactInfoCard.astro
│   │   │   └── ContactInfoCard.module.css
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.astro
│   │   │   └── ContactForm.module.css
│   ├── layouts/
│   │   └── MainLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── global.css
│       └── reset.css
├── package.json
└── README.md
```