import express from "express";
import { single, multiple } from "../middlewares/upload.middleware";
import { handleUpload } from "../utils/cloudinary";

const router = express.Router();

router.post("/upload/single", single, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await handleUpload(req.file.buffer.toString("base64"));
    res.status(200).json({ message: "File uploaded successfully", result });
  } catch (error) {
    res.status(500).json({ message: "File upload failed", error });
  }
});

router.post("/upload/multiple", multiple, async (req, res) => {
  try {
    if (!req.files || !Array.isArray(req.files)) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadPromises = req.files.map((file: any) =>
      handleUpload(file.buffer.toString("base64"))
    );

    const results = await Promise.all(uploadPromises);
    res.status(200).json({ message: "Files uploaded successfully", results });
  } catch (error) {
    res.status(500).json({ message: "File upload failed", error });
  }
});

export default router;