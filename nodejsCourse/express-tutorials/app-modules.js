const express = require('express');
const app = express();

//application level settings
app.set('view engine', 'ejs');

//routing
app.get('/', (req, res)=>{
  res.send('Home page');
});

app.post('/api/data', (req, res)=>{
  res.json({
    message: 'Data recieved',
    data: req.body
  });
});

app.use((err, req, res, next)=>{
  console.log(err.stac);
  res.status(500).send('soemthing went wrong');
}); 

app.listen(3000, ()=>{
  console.log('Server started Success on port: 3000');
});