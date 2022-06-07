const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnAddTodo = $('.btn-add-todo');
const inputTodo = $('.input-todo');

localStorage.setItem("arrTodo", JSON.stringify([
    {name: 'Quét nhà'},
    {name: 'Rửa bát'}
]));

var todoList = JSON.parse(localStorage.getItem("arrTodo" || "[]"))

const todoCheck = $('.todo-check');

btnAddTodo.addEventListener("click", () => {
    if(inputTodo.value){
        todoList.push({name: inputTodo.value})
        console.log(todoList)
        inputTodo.value = "";
        localStorage.setItem("arrTodo", JSON.stringify(todoList));
    }else{
        console.log('Chua nhap todo!')
    }
    render();
})

const render = () => {
    const htmls = todoList.map((todo, index) => {
        return `
            <li class="todo">
                <div class="todo-check" onclick="doneTodo(${index})">
                    <i class="fa-solid fa-check"></i>
                </div>
                <div class="todo-name todo-name${index}">${todo.name}</div>
                <button class="delete" onclick="deleteTodo(${index})">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </li>
        `
    })
    $('.todolist').innerHTML = htmls.join("")
}
render();

const doneTodo = (index) => {
    const todoName = $('.todo-name' + index);
    todoName.classList.toggle("toggleTodo");
}

const deleteTodo = (index) => {
    todoList.splice(index, 1);
    render();
}