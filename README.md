# Testimonial Project

Hola, soy Chris. En este repositorio encontrarás un proyecto desarrollado con [Astro](https://astro.build) que incluye un componente diseñado para mostrar testimonios de usuarios en un diseño limpio y moderno.

El propósito de este proyecto es poner en práctica conceptos de la tecnología de manera divertida.

Explora las diferentes ramas del proyecto para seguir el progreso y los cambios en la funcionalidad de la aplicación.

Siéntete libre de clonar, explorar y contribuir con tus propias mejoras o sugerencias.

¡Gracias por pasar por aquí!

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

## 🛠️ Cómo usar
1. Clona este repositorio: 
```bash
git clone <URL_DEL_REPOSITORIO>
cd contact-info
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
pnpm dev
```

4. Abre tu navegador en http://localhost:4321.


## 📝 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.