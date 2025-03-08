import app from "./app";
import colors from "colors";
import { specs } from "./swagger/config";
import swaggerUI from "swagger-ui-express";
import config from "./config";
import https from "https";
import express from "express";
import excelRoutes from "./routes/excel.routes";

const PORT = process.env.PORT || 3000;
const { ISLOCALHOST } = config;

// Middleware para JSON
app.use(express.json());

// Agregar rutas para la carga de Excel
app.use("/api/excel", excelRoutes);

// Configuración del servidor
if (ISLOCALHOST) {
  app.listen(PORT, () => {
    console.log("Server is running on port:", colors.yellow("" + PORT));
    console.log("Running with http");
  });
} else {
  console.log("Running with https");
  /* const httpsOptions = {
    key: fs.readFileSync(SSL_KEY),
    cert: fs.readFileSync(SSL_CERTIFICATE),
  };
  */
}

// Swagger
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
