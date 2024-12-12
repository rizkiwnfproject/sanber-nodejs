import express, { Request, Response } from "express";
import apiRouter from "../src/routes/api"

const PORT = 3000;

function init() {
  const app = express();
  app.use(express.json());
  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });
  app.use("/api", apiRouter)
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
