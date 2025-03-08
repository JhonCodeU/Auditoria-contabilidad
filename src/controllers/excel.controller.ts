import { Request, Response } from "express";
import { ExcelService } from "../services/excel.service";

export class ExcelController {
  static uploadFile(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No se ha subido ningún archivo" });
      }

      const filePath = req.file.path;
      const { ingresos, retiros } = ExcelService.readExcelFile(filePath);

        // Imprimir los datos en la consola
        console.log("Datos extraídos del Excel:");
        console.log("Ingresos:", ingresos);
        console.log("Retiros:", retiros);

      res.json({ ingresos, retiros });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido";
      res.status(500).json({ error: errorMessage });
    }
  }
}
