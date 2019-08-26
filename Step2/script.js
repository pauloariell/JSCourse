var inputElement = document.querySelector('input[name=nome]');
var ulElement = document.querySelector('#array');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function addTodoList() {
    var todoText = inputElement.value;
    if ( todoText != ""){
        todos.push(inputElement.value);
        inputElement.value = '';
        renderAll();
        saveToStorage();
    }
}

function deleteTodo(pos) {
    todos.splice(pos,1);
    renderAll();
    saveToStorage();
}

function renderAll(){
    ulElement.innerHTML = '';
    for (todo of todos) {
        adicionar(todo);
    }
}

function adicionar(text) {
    var liElement = createLi(text);
    ulElement.appendChild(liElement);
}

function createLi(text) {
    var li = document.createElement('li');
    li.innerText = text;
    var pos = todos.indexOf(text);

    var aElement = document.createElement('a');
    aElement.setAttribute('href','#')
    
    aElement.setAttribute('onclick','deleteTodo('+pos+')')

    var ex = document.createTextNode('Excluir');
    aElement.appendChild(ex);

    li.appendChild(aElement);
    return li;
}

function createQuad() {
    var div = document.createElement('div');

    div.style.width = '100px';
    div.style.height = '100px';
    div.style.backgroundColor = 'blue';
    div.innerText = 'Please, MouseOver to change Color'

    div.setAttribute('onmouseover', 'changeColor(this)');

    var divElement = document.querySelector('#app');
    divElement.appendChild(div);
}

function changeColor(quad) {
    var newColor = getRandomColor();
    quad.style.backgroundColor = newColor;

}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

renderAll();