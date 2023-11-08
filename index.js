// import/require
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const path = require("path")
const products = require("./product.json");


// middleware
app.use(cors());
app.use(express.static(__dirname+"/front_end"))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname), "front_end", "/index.html")
    //res.send("Hello.................................");
})
// product api

app.get("/all-products", (req, res) => {
  return res.send({
    products: products,
  });
});

app.get("/single-product/:id",(req,res)=>{
  const productId= req.params.id;
  const result = products.find((product)=> product.id === parseInt(productId));
  res.send(result)

})
app.get("/single-product-by-title/:name",(req,res)=>{
  const productName = req.params.name;
  const result = products.find((product)=> product.title === productName);
  res.send(result)

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
