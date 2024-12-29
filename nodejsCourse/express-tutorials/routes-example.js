const express = require('express');
const app = express();

app.get('/', (req, res)=>{
res.send("welcome to our home page");
});

//get all products
app.get('/products', (req, res)=>{
  const products = [
    {
      id: 1, 
      label: 'poduct 1',
    },
    {
      id: 2, 
      label: 'poduct 2',
    },
    {
      id: 3, 
      label: 'poduct 3',
    }
  ];
  res.json(products);
});
//get a single product (dynamic routing)
app.get('/products/:id', (req, res)=>{
  const productId = parseInt(req.params.id);
  const products = [
    {
      id: 1, 
      label: 'poduct 1',
    },
    {
      id: 2, 
      label: 'poduct 2',
    },
    {
      id: 3, 
      label: 'poduct 3',
    }
  ];
  const getSingleProduct = products.find(product=> product.id === productId);

  if (getSingleProduct){
    res.json(getSingleProduct);
  } else {
    res.status(404).send('product not found! please try with different id');
  }
});

app.listen(3000, ()=>{
  console.log("server started success at port 3000");
  // console.log(productId);
});

