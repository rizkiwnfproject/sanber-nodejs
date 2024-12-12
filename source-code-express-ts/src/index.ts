import express, { Request, Response } from "express";
const path = require('path');

const PORT = 3000;

const categories = [
  { id: 1, name: 'Elektronik' },
  { id: 2, name: 'Perabotan' }
];

const products = [
  { id: 1, name: 'Laptop', category: 'Elektronik' },
  { id: 2, name: 'Meja', category: 'Perabotan' }
];

function init() {
  const app = express();

  app.use('/static', express.static('public'))
  // app.use(express.static('public'))
  app.use(express.json()); // Middleware untuk parsing JSON

  app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
      message: "OK",
      data: null,
    });
  });
  app.get("/hello", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch message",
      data: "Hello World!"
    });
  });
  app.get("/user", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch user",
      data: {
        "id": 1,
        "name": "Budi",
        "username": "budidu",
        "email": "budidu@mail.com"
      }
    });
  });
  // Route untuk daftar kategori
  app.get("/categories", (req: Request, res: Response) => {
    res.status(200).json({
      message: "Success fetch categories",
      data: categories
    });
  });

  // Route untuk mendapatkan detail kategori berdasarkan ID
  app.get("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const category = categories.find(c => c.id === categoryId);

    if (category) {
      res.status(200).json({
        message: "Success fetch category",
        data: category
      });
    } else {
      res.status(404).json({
        message: "Category not found",
        data: null
      });
    }
  });

  // Route untuk menambahkan kategori baru
  app.post("/categories", (req: Request, res: Response) => {
    const { name } = req.body;
    const newCategory = {
      id: categories.length + 1,
      name
    };
    categories.push(newCategory);
    res.status(201).json({
      message: "Category created successfully",
      data: newCategory
    });
  });

  // Route untuk memperbarui kategori berdasarkan ID
  app.put("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const { name } = req.body;
    const categoryIndex = categories.findIndex(c => c.id === categoryId);

    if (categoryIndex !== -1) {
      categories[categoryIndex].name = name;
      res.status(200).json({
        message: "Category updated successfully",
        data: categories[categoryIndex]
      });
    } else {
      res.status(404).json({
        message: "Category not found",
        data: null
      });
    }
  });

  // Route untuk menghapus kategori berdasarkan ID
  app.delete("/categories/:id", (req: Request, res: Response) => {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex(c => c.id === categoryId);

    if (categoryIndex !== -1) {
      categories.splice(categoryIndex, 1);
      res.status(200).json({
        message: "Category deleted successfully",
        data: null
      });
    } else {
      res.status(404).json({
        message: "Category not found",
        data: null
      });
    }
  });

  // Route untuk mencari produk berdasarkan nama
  app.get("/products/search", (req: Request, res: Response) => {
    const { name } = req.query;
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes((name as string).toLowerCase())
    );

    res.status(200).json({
      message: "Success fetch products",
      data: filteredProducts
    });
  });

  // Route untuk mendapatkan produk dalam kategori tertentu dan mencari berdasarkan nama
  app.get("/products/category/:categoryName/search", (req: Request, res: Response) => {
    const { categoryName } = req.params;
    const { name } = req.query;

    const filteredProducts = products.filter(product =>
      product.category.toLowerCase() === categoryName.toLowerCase() &&
      product.name.toLowerCase().includes((name as string).toLowerCase())
    );

    res.status(200).json({
      message: "Success fetch products in category",
      data: filteredProducts
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

init();
