let todoList = [];

renderTodo();

function renderTodo(){
  let todoHTML = "";

  for (let i = 0; i < todoList.length; i++){
  const todoObject= todoList[i];
  const {name, dueDate} = todoObject;
  
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="todoList.splice(${i}, 1); renderTodo();";>Delete</button>
  `;
  todoHTML += html;
}
document.querySelector('.js-list-display').innerHTML = todoHTML;
}

function addTodo(){
const inputElment = document.querySelector('.js-name-input');
const name = inputElment.value;
// console.log(name);
const dateInputElement = document.querySelector('.js-date-input');
const dueDate = dateInputElement.value;
// console.log(dueDate);

todoList.push({name, dueDate});

inputElment.value = '';

renderTodo();
}
function handleKeydown(event){
  if (event.key === 'Enter'){
    addTodo();
  }
}