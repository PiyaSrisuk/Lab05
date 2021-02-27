let inputField = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', function(){
    if(inputField.value !== '') {
        var text = document.createTextNode(' ' + inputField.value);
        var list = document.createElement('li');
        list.classList.add('list-group-item');   
        var button = document.createElement('button');
        button.classList.add('btn-warning');
        button.innerText = '-';
        list.appendChild(button);
        list.appendChild(text);
        toDoList.appendChild(list);
        inputField.value = '';

        button.addEventListener('click', function(){
        toDoList.removeChild(list);
        })
    }
})