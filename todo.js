
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);

  var liveList = document.getElementsByTagName('li');
  var array = Array.prototype.slice.call(liveList);

  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var toDoItem = document.createElement('li');
    var texto=document.getElementById('todo-input').value;
    document.getElementById('todo-input').value= "";
    toDoItem.innerHTML=texto;

    var secondParagraph = document.querySelector('.todo-list-items').querySelector('li');
    secondParagraph.parentNode.insertBefore(toDoItem, secondParagraph.lastElementChild);
    doneButton.innerHTML="Done";
    document.querySelector('h1').style.color = "black";
  }

  function markAsDone() {
    var secondParagraph = document.querySelector('ul').querySelector('li');
    var valor=secondParagraph.innerText;
    secondParagraph.parentNode.removeChild(secondParagraph);
    
    var toDoItem = document.createElement('li');
    toDoItem.innerHTML=valor;
    toDoItem.classList.add('done')

    var secondParagraph=document.querySelector('.done-list-items').querySelector('li');
    // = document.querySelector('ul').querySelector('li');
    secondParagraph.parentNode.insertBefore(toDoItem, secondParagraph);

    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";

  }
  
}
