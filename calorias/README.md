# 🥗 NutriTrack - Nutrición Inteligente

NutriTrack no es solo una calculadora de calorías; es tu compañero digital para un estilo de vida saludable. Diseñado con una interfaz moderna y fluida, te permite monitorear tu nutrición y actividad física con precisión científica y elegancia visual.


## 🚀 Características

- **Calculadora de Macronutrientes**: Desglose detallado de grasas, azúcares, proteínas, carbohidratos, fibra y sodio.
- **Registro de Actividades**: Control total sobre tus comidas y entrenamientos con historial interactivo.
- **Sistema de Iconos Optimizado**: Implementación de una arquitectura de sprites SVG propia para una mínima huella de red.
- **Diseño Premium**: Experiencia ultra-responsiva con animaciones fluidas y estética de cristal (glassmorphism).
- **Cámara Inteligente (Concepto)**: Interfaz de vanguardia lista para la integración con IA para el escaneo de alimentos.

## 🛠️ Herramientas Utilizadas

NutriTrack utiliza lo último en desarrollo web moderno:

- **React 19**: Biblioteca líder para interfaces dinámicas.
- **Vite**: Motor de compilación de nueva generación.
- **Tailwind CSS**: Framework utilitario para diseño sofisticado y responsivo.
- **TypeScript**: Tipado estático para un código robusto y libre de errores.
- **Custom SVG Sprite Architecture**: Sistema a medida que elimina la dependencia de librerías de iconos externas pesadas.

## 📦 Instalación y Desarrollo

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Instalar dependencias**:

   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

## 🏗️ Compilación para Producción

Para generar el código fuente optimizado y compilar el sistema de diseño:

```bash
npm run build
```

Este comando realiza:

- Verificación exhaustiva de tipos.
- Compilación y minificación del código fuente.
- Purga dinámica de CSS sobrante para una velocidad de carga instantánea.

## 📂 Arquitectura del Proyecto

- `src/components/Icon.tsx`: Componente centralizado para la gestión de iconos.
- `public/assets/sprite.svg`: Almacén único de activos vectoriales.
- `src/hooks/`: Lógica de negocio y gestión de estado personalizada.
- `src/data/`: Definiciones de categorías y metadatos de nutrición.

---

**Desarrollado con ❤️ por [Jorge-R-V](https://github.com/Jorge-R-V)**
