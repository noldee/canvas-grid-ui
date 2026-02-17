```markdown
# 🏗️ Canvas Grid UI

[![npm version](https://img.shields.io/npm/v/canvas-grid-ui.svg)](https://www.npmjs.com/package/canvas-grid-ui)
[![npm downloads](https://img.shields.io/npm/dm/canvas-grid-ui.svg)](https://www.npmjs.com/package/canvas-grid-ui)
[![GitHub stars](https://img.shields.io/github/stars/noldee/canvas-grid-ui.svg)](https://github.com/noldee/canvas-grid-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Sistema de grids animado de alto rendimiento con Visual Engines para React y Astro. No es solo un layout, es un **Visual Engine** que permite aplicar físicas reales, efectos 3D y sistemas de iluminación reactiva mediante Framer Motion y Tailwind CSS.

---

## 📦 Instalación

```bash
npm install canvas-grid-ui framer-motion tailwindcss
```

### Configuración de Tailwind CSS

Agrega el paquete a tu `tailwind.config.js`:

```js
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/canvas-grid-ui/**/*.{js,jsx}', // ← Importante
  ],
  theme: {
    extend: {},
  },
}
```

---

## 🚀 Uso Básico

```tsx
import { GridComponent } from 'canvas-grid-ui';

function App() {
  return (
    <GridComponent 
      columns={3} 
      gap="gap-6" 
      animation="High-Tilt 3D"
    >
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
        <h3 className="text-xl font-bold">Card 1</h3>
        <p className="text-gray-600">Explora efectos 3D</p>
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
        <h3 className="text-xl font-bold">Card 2</h3>
        <p className="text-gray-600">Físicas reales</p>
      </div>
      
      <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">
        <h3 className="text-xl font-bold">Card 3</h3>
        <p className="text-gray-600">Listo para producción</p>
      </div>
    </GridComponent>
  );
}
```

---

## ✨ Visual Engines Disponibles

### High-Tilt 3D
Profundidad agresiva con rotación de 35° y elevación en eje Z.

```tsx
<GridComponent animation="High-Tilt 3D" columns={3}>
  {/* tus cards */}
</GridComponent>
```

### Perspective Soft
Minimalismo elegante con rotación suave de 12°.

```tsx
<GridComponent animation="Perspective Soft" columns={4}>
  {/* tus cards */}
</GridComponent>
```

### Magnetic Force
Las tarjetas siguen el cursor con físicas de resorte.

```tsx
<GridComponent animation="Magnetic Force" columns={2}>
  {/* tus cards */}
</GridComponent>
```

### Ray-Cast Spotlight
Iluminación reactiva que baña bordes según posición del mouse.

```tsx
<GridComponent animation="Ray-Cast Spotlight" columns={3}>
  {/* tus cards */}
</GridComponent>
```

---

## 🎨 Ejemplo: Layout Bento (Irregular)

```tsx
<GridComponent columns={4} gap="gap-4" animation="Ray-Cast Spotlight">
  {/* Card grande (2x2) */}
  <div className="col-span-2 row-span-2 p-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl">
    <h2 className="text-2xl font-bold text-white">Destacado</h2>
    <p className="text-white/80">Ocupa 2x2 espacios</p>
  </div>
  
  {/* Card ancha (2x1) */}
  <div className="col-span-2 p-6 bg-white dark:bg-gray-800 rounded-xl">
    <h3 className="text-lg font-semibold">Card Ancha</h3>
  </div>
  
  {/* Cards normales */}
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">Card A</div>
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl">Card B</div>
</GridComponent>
```

---

## ⚙️ Props API

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `columns` | `number` | `3` | Número de columnas en desktop |
| `gap` | `string` | `"gap-6"` | Clase de Tailwind para espaciado |
| `animation` | `"High-Tilt 3D"` \| `"Perspective Soft"` \| `"Magnetic Force"` \| `"Ray-Cast Spotlight"` | `"High-Tilt 3D"` | Motor visual a utilizar |
| `className` | `string` | `""` | Clases adicionales para el contenedor |
| `children` | `ReactNode` | - | Elementos hijos a renderizar |

---

## 🌙 Dark Mode

Soporte automático para modo oscuro de Tailwind:

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Contenido que se adapta al tema
</div>
```

---

## 📱 Responsive Design

```tsx
<GridComponent 
  columns={3}
  className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  animation="Magnetic Force"
>
  {/* tus cards */}
</GridComponent>
```

---

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/canvas-grid-ui)
- [GitHub Repository](https://github.com/noldee/canvas-grid-ui)
- [Demo en Vivo](https://canvas-grid-ui.netlify.app/)

---

## 📄 Licencia

MIT © [noldee](https://github.com/noldee)
```