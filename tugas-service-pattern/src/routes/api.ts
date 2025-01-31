import express from "express";

import uploadMiddleware from "../middlewares/upload.middleware";
import authMiddleware from "../middlewares/auth.middleware";
import uploadController from "../controllers/upload.controller";
import authController from "../controllers/auth.controller";
import productsController from "../controllers/products.controller";
import categoriesController from "../controllers/categories.controller";
import rbacMiddleware from "../middlewares/rbac.middleware";

const router = express.Router();

router.get("/products", productsController.findAll);
router.post("/products", productsController.create);
router.get("/products/:id", productsController.findOne);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.post("/upload", uploadMiddleware.single, uploadController.single);
router.post("/uploads", uploadMiddleware.multiple, uploadController.multiple);


// CRUD Categories
router.get("/categories", categoriesController.findAll);
router.post("/categories", categoriesController.create);
router.get("/categories/:id", categoriesController.findOne);
router.put("/categories/:id", categoriesController.update);
router.delete("/categories/:id", categoriesController.delete);

router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.post(
    "/auth/me",
    [authMiddleware, rbacMiddleware(["admin"])],
    authController.me
);
router.put("/auth/update-profile", authMiddleware, authController.updateProfile);

export default router;