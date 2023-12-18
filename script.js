function get_todos(){
    var todos = new Array;
    var todo_str = localStorage.getItem('todo');
    if (todo_str !== null){
        todos = JSON.parse(todo_str);
    }
    return todos;
}

function add () {
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo',JSON.stringify(todos));

    Show();
    return false;
}

function clearDefault(a) {
    if (a.defaultValue == a.value) {
        a.value="";
    }
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));

    Show();

    return false;
}

function Show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i =0 ; i <todos.length; i++){
        html +='<li>'+ todos[i] + '<button class = "remove" id ="' + i + '"> Delete</button></li>';

    };
    html +="</ul>";

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click',remove);

    };
}

document.getElementById('add').addEventListener('click',add);
Show();