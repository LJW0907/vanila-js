const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify() : localStorage에 array를 저장
}

function deleteToDo(event){ //클릭된 button의 부모 li 삭제
    const li  = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();    
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo)

    li.appendChild(span); //span을 li의 자식으로 넣는다.
    li.appendChild(button); //삭제button을 li의 자식으로 넣는다.
    toDoList.appendChild(li); //li를 toDoList의 자식으로 넣는다.
}

function handleToDoSubmit(event){
    event.preventDefault(); //preventDefault() : 어떤 event의 default 행위가 일어나지 않도록 막는다.
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text:newToDo,
        id : Date.now(),
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}