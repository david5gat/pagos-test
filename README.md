# PagosTest

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión **17.3.17**.  
El objetivo principal de este proyecto es gestionar datos de **facturación/pagos** utilizando **Angular** y la librería de componentes **PrimeNG**.  

Se desarrolló una **tabla interactiva** para listar información de pagos, junto con un **formulario de edición reactivo** dentro de un `p-dialog` de PrimeNG.  

---

## 🚀 Características principales

- **Angular 17** como framework base.
- **PrimeNG** como librería principal para la UI (tabla, formularios, diálogos, inputs, calendarios, dropdowns, etc.).
- **Tabla interactiva con paginación** usando `p-table`.
- **Búsqueda global** en la tabla con `filterGlobal`.
- **Formulario de edición reactivo** con `FormGroup` y validaciones.
- **Uso de componentes de PrimeNG**:  
  - `p-table`  
  - `p-dialog`  
  - `p-inputText`  
  - `p-multiSelect`  
  - `p-calendar`  
  - `p-button`  

> ✍️ Nota personal: La mayoría de la UI se construyó con **PrimeNG** porque facilita mucho el desarrollo y el diseño responsive.  
> Además, para crear arrays como **estados** y **formas de pago**, tuve la ayuda de **ChatGPT** para ahorrar tiempo en escritura y estandarizar los valores en mayúsculas.

---

## 📂 Estructura principal creada

### Tabla de Pagos (PrimeNG `p-table`)
- Se listan los datos principales de facturación:
  - Empresa  
  - Rubro  
  - Área de Operaciones  
  - Tercero  
  - Valor de la operación  
  - Estado de pago  
  - Forma de pago  
  - Fecha  
- Incluye:
  - **Paginación** con `rows` y `rowsPerPageOptions`.
  - **Búsqueda global** sobre campos configurados en `globalFilterFields`.

### Formulario de edición (PrimeNG `p-dialog`)
- Formulario **reactivo** para editar un pago seleccionado.
- Se organizó en **3 columnas** con campos distribuidos:
  - Columna 1 → Empresa, Rubro, Área de Operaciones.  
  - Columna 2 → Tercero, Valor, Estado de Pago.  
  - Columna 3 → Forma de Pago, Fecha.  
- Validaciones básicas (`required`, `min`, etc.).
- **Botones de Cancelar y Guardar**.

---

## 📖 Instrucciones de uso

### 1️⃣ Clonar el proyecto
```bash
git clone https://github.com/tu-usuario/pagostest.git
cd pagostest
Instalar dependencias
- npm install
Levantar el servidor de desarrollo
-ng serve
Abrir en el navegador: http://localhost:4200/

📋Dependencias importantes

Angular 17.3.17

PrimeNG

PrimeIcons

PrimeFlex (para la grilla y utilidades de diseño)

Asegúrate de tener también importado el tema de PrimeNG en tu styles.scss, por ejemplo
@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";
@import "primeicons/primeicons.css";
🧑‍💻 Autor
- Johan David Ortiz
Gracias por la atencion prestada. 👋