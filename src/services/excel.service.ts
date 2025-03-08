import * as fs from "fs";
import * as xlsx from "xlsx";

export class ExcelService {
  static readExcelFile(filePath: string): { ingresos: any[]; retiros: any[] } {
    if (!fs.existsSync(filePath)) {
      throw new Error("El archivo no existe");
    }

    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    // Verificar si existen las hojas "Retiros" e "Ingresos"
    if (!sheetNames.includes("Ingresos") || !sheetNames.includes("Retiros")) {
      throw new Error("Las hojas necesarias no están presentes en el archivo");
    }

    // Leer las hojas y convertirlas a JSON
    const ingresos = xlsx.utils.sheet_to_json(workbook.Sheets["Ingresos"]);
    const retiros = xlsx.utils.sheet_to_json(workbook.Sheets["Retiros"]);

    return { ingresos, retiros };
  }
}
