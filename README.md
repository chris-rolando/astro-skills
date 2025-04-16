# Contact Info

Hola, soy Chris. En este repositorio encontrarás un proyecto desarrollado con [Astro](https://astro.build) que incluye dos componentes principales: uno para mostrar información de contacto y otro para un formulario interactivo.

El propósito de este proyecto es poner en práctica conceptos de la tecnología de manera divertida.

Explora las diferentes ramas del proyecto para seguir el progreso y los cambios en la funcionalidad de la aplicación.

Siéntete libre de clonar, explorar y contribuir con tus propias mejoras o sugerencias.

¡Gracias por pasar por aquí!

## 🚀 Estructura del Proyecto

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

## 🌟 Componentes
1. ContactInfoCard
Este componente muestra información de contacto, incluyendo:

- Dirección física.
- Número de teléfono.
- Correo electrónico.
- Un mapa embebido de Google Maps.

2. ContactForm
Este componente es un formulario interactivo que permite a los usuarios enviar consultas. Incluye los siguientes campos:

- Nombre.
- Correo electrónico.
- Título.
- Mensaje.

## 🧞 Comandos
Todos los comandos se ejecutan desde la raíz del proyecto:

pnpm install	Instala las dependencias del proyecto
pnpm dev	Inicia el servidor de desarrollo en localhost:4321
pnpm build	Genera el sitio para producción en ./dist/
pnpm preview	Previsualiza el sitio generado localmente

## 📦 Dependencias
Este proyecto utiliza las siguientes dependencias principales:

Astro - Framework para construir sitios web rápidos.
Material Symbols - Iconos utilizados en la información de contacto.

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