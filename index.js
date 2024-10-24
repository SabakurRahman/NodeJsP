const express = require("express");

const app = express();
const PORT = 3000;

const productRouter = require("./router/product");
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1/products", productRouter);

app.get("/login", (req, res) => {
  res.send("Login Page");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
