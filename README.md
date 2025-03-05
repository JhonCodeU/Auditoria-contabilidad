```markdown
# API REST para la Gestión de Auditoria Contable

Esta API RESTful proporciona endpoints para la gestión de auditoria contable y sus solicitudes asociadas. Está construida con Node.js y Express, y se conecta a una base de datos PostgreSQL con prisma para almacenar la información de las transacciones.

## Requisitos

- Node.js
- TypeScript
- PostgreSQL
- Prisma
- npm (o yarn)

## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/JhonCodeU/Auditoria-contabilidad.git
   cd Auditoria-contabilidad
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

   o si usas yarn:

   ```bash
   yarn install
   ```

## Configuración de la Base de Datos

1. Asegúrate de tener PostgreSQL instalado y corriendo en tu máquina local.

2. Crea una base de datos llamada `posgrest` en tu servidor de AWS.

3. Ejecuta los scripts SQL proporcionados en `src/db/script.sql` para crear las tablas necesarias:

4. Asegúrate de tener un usuario y contraseña configurados en PostgreSQL que coincidan con los datos de conexión en el archivo


## Ejecución

1. Para ejecutar la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

   Esto utilizará `nodemon` para reiniciar automáticamente la aplicación cuando se detecten cambios.

2. Para ejecutar la aplicación en modo producción:

   ```bash
   npm start
   ```

   Esto ejecutará la aplicación en el puerto definido en tu archivo `.env`.

## Endpoints Principales

### `/api/auth`

- `POST /api/auth/crear_usuario`: Crea un nuevo usuario.
- `POST /api/auth/generar_token`: Genera un token de acceso para autenticación.

## Documentación (Swagger)

La API está documentada con Swagger. Puedes acceder a la documentación y probar los endpoints en:

```
http://localhost:3000/api-docs
```

## Estructura del Proyecto

- `src/`: Contiene los archivos fuente de la aplicación.
  - `controllers/`: Controladores para manejar las peticiones HTTP.
  - `database/`: Configuración de la base de datos y scripts SQL.
  - `middlewares/`: Middlewares de autenticación.
  - `routes/`: Definición de las rutas de la API.
  - `index.ts`: Punto de entrada de la aplicación.

## Dependencias Principales

- `express`: Framework web para Node.js.
- `cors`: Middleware para habilitar CORS.
- `jsonwebtoken`: Generación y verificación de tokens JWT.
- `pg`: Cliente PostgreSQL para Node.js.
- `swagger-jsdoc`: Generación de documentación Swagger a partir de JSDoc.
- `swagger-ui-express`: Middleware para visualizar la documentación Swagger.

## Licencia

Este proyecto está bajo la licencia MIT.