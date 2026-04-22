# Visiona EduLab

Sitio web institucional de **Visiona EduLab** — laboratorio de innovación educativa que integra neuroeducación y tecnologías inmersivas (Meta Quest 3) en el aula.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- Fuente: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

## Estructura

```
visionaedulab/
├── app/
│   ├── layout.js       # Layout raíz (fuente, metadata)
│   ├── page.js         # Página principal
│   └── globals.css     # Estilos globales + Tailwind
├── public/
│   ├── logo.jpg        # Logo institucional
│   ├── miguel-ponce.jpg # Foto del fundador
│   └── dossier-2026.docx # Dossier descargable
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Build de producción

```bash
npm run build
npm start
```

## Contacto

Miguel Ponce — [miguel.ponce@visionaedulab.com.ar](mailto:miguel.ponce@visionaedulab.com.ar)  
Buenos Aires, Argentina
