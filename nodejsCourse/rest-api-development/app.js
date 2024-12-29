const express = require('express');
const app = express();


//Middleware
app.use(express.json());

let books = [
  {
    id: 1,
    title: 'Book 1'
  },
  {
    id: 2,
    title: 'Book 2'
  },
  {
    id: 3,
    title: 'Book 3'
  },
  {
    id: 4,
    title: 'Book 4'
  },
  {
    id: 5,
    title: 'Book 5'
  }
]

//intro route
app.get('/', (req, res)=>{
  res.json({message: "Welcom to out books store api"});
});

//get all route
app.get('/books', (req, res)=>{
  res.json(books);
});
//get a single book
app.get('/books/:id', (req, res)=>{
  const book = books.find(item=> item.id == req.params.id);
  console.log(book);
  if(book){
    res.status(200).json(book);
  } else {
    res.status(404).json({message: 'Sorry book not found! try using differnt id'});
  }
});
//add a new book (post request)
app.post('/add', (req, res)=> {
  const newBook = {
    id: Math.floor(Math.random()*1000),
    title: `book ${Math.floor(Math.random()*1000)}`
  }
  books.push(newBook);
  res.status(200).json({data: newBook, message: 'new book is added successfully',})
});
//update a book
app.put('/update/:id', (req, res)=>{
  const findCurrentBook = books.find(bookItem=> bookItem.id == req.params.id);
  if(findCurrentBook){
    findCurrentBook.title = req.body.title || findCurrentBook.title
    res.status(200).json({message: `book with ID ${req.params.id} updated succeessfuly`, data: findCurrentBook});
  } else {
    res.status(404).json({message: 'book not found'});
  }
});
//Delet request
app.delete('/delete/:id', (req, res)=>{
  const findIndexOfcurrentBook = books.findIndex(item=> item.id == req.params.id);
  if(findIndexOfcurrentBook !== -1){
    const deleteBook = books.splice(findIndexOfcurrentBook, 1);
    res.json({message: 'book deleted successfully', data: deleteBook[0]});
  } else {
    res.status(404).json({message: 'book not found'});
  }
});
  
app.listen(3000, ()=>{
  console.log("Server started success on port 3000");
});
