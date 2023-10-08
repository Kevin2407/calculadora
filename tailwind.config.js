/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'naranja': '#b94e29',
        'grisClaro': '#ecf0f1',
        'oscuro': '#2c3e50',
      }
    }
  },
  plugins: [],
}


/* Color Principal:

Azul Océano: #2980b9


Colores Análogos (colores cercanos en el círculo cromático):
Azul Cielo: #3498db
Azul Verdoso: #287271


Color Complementario (el color opuesto en el círculo cromático):
Naranja Rojizo: #b94e29


Colores Neutros:
Gris Claro: #ecf0f1
Gris Oscuro: #2c3e50


Colores Adicionales:
Verde Mar: #16a085
Rojo Coral: #e74c3c */


