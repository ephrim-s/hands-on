const express = require('express');
const path = require('path');

const app = express();

//set the view engine as ejs
app.set('view engine', 'ejs');

//set the view dirrectory
app.set('views', path.join(__dirname, 'views'));

const products = [
  {
    id: 1, 
    title: 'poduct 1',
  },
  {
    id: 2, 
    title: 'poduct 2',
  },
  {
    id: 3, 
    title: 'poduct 3',
  }
];

app.get('/', (req, res)=>{
  res.render('home', {title: 'Home Page', products: products})
});
app.get('/about', (req, res)=>{
  res.render('about', {title: 'About Page'})
});

app.listen(3000, ()=>{
  console.log('server started on port 3000');
});