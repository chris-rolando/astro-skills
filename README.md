# Contact Info

Un proyecto desarrollado con [Astro](https://astro.build) que incluye dos componentes principales: uno para mostrar información de contacto y otro para un formulario interactivo. También incorpora un mapa embebido de Google Maps.

## 🚀 Estructura del Proyecto

La estructura del proyecto es la siguiente:

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
│   │   │   ├── [ContactInfoCard.astro](http://_vscodecontentref_/1)
│   │   │   └── [ContactInfoCard.module.css](http://_vscodecontentref_/2)
│   │   ├── ContactForm/
│   │   │   ├── [ContactForm.astro](http://_vscodecontentref_/3)
│   │   │   └── [ContactForm.module.css](http://_vscodecontentref_/4)
│   ├── layouts/
│   │   └── [MainLayout.astro](http://_vscodecontentref_/5)
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       ├── [global.css](http://_vscodecontentref_/6)
│       └── [reset.css](http://_vscodecontentref_/7)
├── [package.json](http://_vscodecontentref_/8)
└── [README.md](http://_vscodecontentref_/9)
```

## 🌟 Componentes
ContactInfoCard
Este componente muestra información de contacto, incluyendo:

Dirección física.
Número de teléfono.
Correo electrónico.
Un mapa embebido de Google Maps.
Ubicación del archivo:
src/components/ContactInfoCard/ContactInfoCard.astro

ContactForm
Este componente es un formulario interactivo que permite a los usuarios enviar consultas. Incluye los siguientes campos:

Nombre.
Correo electrónico.
Título.
Mensaje.
Ubicación del archivo:
src/components/ContactForm/ContactForm.astro

## 🧞 Comandos
Todos los comandos se ejecutan desde la raíz del proyecto:

Comando	Acción
pnpm install	Instala las dependencias del proyecto
pnpm dev	Inicia el servidor de desarrollo en localhost:4321
pnpm build	Genera el sitio para producción en ./dist/
pnpm preview	Previsualiza el sitio generado localmente

## 📦 Dependencias
Este proyecto utiliza las siguientes dependencias principales:

Astro - Framework para construir sitios web rápidos.
Material Symbols - Iconos utilizados en la información de contacto.

## 🛠️ Cómo usar
Clona este repositorio:

Instala las dependencias:

Inicia el servidor de desarrollo:

Abre tu navegador en http://localhost:4321.

## 📖 Documentación
Para más información sobre Astro, consulta la documentación oficial.

## 📝 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.