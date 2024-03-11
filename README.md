# Teslo Shop | E-Commerce con Next.js

Este es un proyecto realizado en el curso de Next.js de Fernando Herrera (Versión App Router) de la academia de programación DevTalles.

## Cómo correr la aplicación en modo Desarrollo

1. Clonar el repositorio
2. Crear una copia del archivo ```.env.template``` y renombrarlo a ```.env```. A continuación modificar las variables de entorno. 
3. Realizar las instalaciones necesarias usando el comando ```npm install```
4. Levantar la base de datos usando el comando ```docker compose up -d```
5. Levantar el servidor dev con el comando ```npm run dev```

## Cómo correr la aplicación en modo Producción

1. Realizar el build con el comando ```npm run build```
2. Para controlar el resultado del build usar ```npm run start```