# NutriTrack - Nutrición Inteligente

NutriTrack no es solo una calculadora de calorías; es tu compañero digital para un estilo de vida saludable. Diseñado con una interfaz moderna y fluida, te permite monitorear tu nutrición y actividad física con precisión científica y elegancia visual.

## 🚀 Características

- **Calculadora de Macronutrientes**: Desglose detallado de grasas, azúcares, proteínas, carbohidratos, fibra y sodio.
- **Registro de Actividades**: Control total sobre tus comidas y entrenamientos.
- **Diseño Ultra-Responsivo**: Experiencia optimizada para móviles, tablets y escritorio siguiendo las mejores prácticas de Tailwind CSS.
- **Cámara Inteligente (Concepto)**: Interfaz de vanguardia lista para la integración con IA.

## 🛠️ Herramientas Utilizadas

Durante el desarrollo de NutriTrack se han utilizado las siguientes tecnologías de última generación:

- **Vite**: Motor de compilación ultra-rápido para una experiencia de desarrollo y producción optimizada.
- **React 19**: Biblioteca líder para la construcción de interfaces de usuario dinámicas y eficientes.
- **Tailwind CSS**: Framework de CSS utilitario para un diseño responsivo y sofisticado con compilación optimizada en producción.
- **TypeScript**: Superset de JavaScript que garantiza la robustez y calidad del código fuente.
- **Heroicons**: Iconografía elegante desarrollada por los creadores de Tailwind CSS.
- **PostCSS & Autoprefixer**: Para garantizar la compatibilidad entre navegadores y optimizar el CSS resultante.

## 📦 Instalación y Desarrollo

Para poner en marcha el proyecto localmente, sigue estos pasos:

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

## 🏗️ Compilación para Producción

Para generar el código fuente optimizado y compilar el CSS final:

1. **Ejecutar build**:
   ```bash
   npm run build
   ```

Este comando realizará las siguientes acciones:

- Verificación de tipos con TypeScript.
- Compilación y minificación del código JavaScript/React.
- **Purga y compilación del CSS resultante de Tailwind**, generando archivos estáticos optimizados en la carpeta `dist`.

2. **Previsualizar build**:
   ```bash
   npm run preview
   ```

## 📂 Estructura del Proyecto

- `src/`: Contiene todo el código fuente React, componentes y lógica de la aplicación.
- `public/`: Archivos estáticos como el favicon.
- `index.html`, `calculadora.html`, `camara.html`: Puntos de entrada para las diferentes secciones de la web.
- `tailwind.config.js`: Configuración personalizada del diseño.

---

**Desarrollado por Jorge-R-V**
