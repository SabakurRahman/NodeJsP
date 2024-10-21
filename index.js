const express = require("express");

const app = express();
const PORT = 3000;

const productRouter = require("./router/product");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1/products", productRouter);

app.get("/login", (req, res) => {
  res.send("Login Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
