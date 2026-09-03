# Armería EDL · MVP

MVP frontend de Armería Esteban de Luca: catálogo de productos, navegación por categorías, detalle de producto, carrito demo, checkout ilustrativo y orientación documental.

## Características

- Landing principal con navegación por áreas.
- Catálogo filtrable y ordenable.
- Fichas de producto con galería e información técnica.
- Carrito demo con validación de documentación para productos regulados.
- Checkout ilustrativo sin cobros reales.
- Página de gestoría documental y contacto.
- Diseño responsive para escritorio y mobile.
- Animaciones y ajustes visuales iterables con Impeccable Live.

## Stack

- React
- Vite
- JavaScript (JSX)
- CSS

## Requisitos

- Node.js 18 o superior.
- npm.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación se sirve normalmente en `http://localhost:5173/`.

## Build de producción

```bash
npm run build
```

Para previsualizar el build:

```bash
npm run preview
```

## Estructura principal

```text
.
├── index.html
├── src/
│   ├── main.jsx
│   ├── styles.css
│   └── assets/
├── DESIGN.md
├── PRODUCT.md
├── package.json
└── package-lock.json
```

## Nota sobre el alcance

Este repositorio contiene un MVP demostrativo. No procesa pagos, no autentica usuarios y no reemplaza la validación legal ni documental correspondiente. Los precios, productos y formularios son datos de ejemplo.

## Licencia

Proyecto privado / MVP interno.
