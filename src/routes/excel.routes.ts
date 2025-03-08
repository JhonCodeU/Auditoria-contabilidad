import express from "express";
import multer from "multer";
import { ExcelController } from "../controllers/excel.controller";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload-excel", upload.single("file"), ExcelController.uploadFile);

export default router;
