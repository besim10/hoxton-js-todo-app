// How to work with state:
// 1. create some state
// 2. render the app based on the state
// 3. update the state
// 4. rerender the app based on the new state

const todoList = document.querySelector('.todo-list')
const completedList = document.querySelector('.completed-list')

const state = {
    todos: [
        {
            text: 'Go to shopping',
            completed: false
        },
        {
            text: 'Visit a doctor',
            completed: false   
        },
        {
            text: 'Sleep well',
            completed: false
        }
    ]
} 

function getCompletedTodo(){
    return state.todos.filter(function(todo){
        return todo.completed
    })
}
function getNotCompletedTodo(){
    return state.todos.filter(function(todo){
        return !todo.completed
    })
}
function addTodo(todo){
    state.todos.push(todo)
}
function deleteTodo(text){
    state.todos = state.todos.filter(function (todo){
        return todo.text !== text
    })
}
function toggleTodo(todo){
    todo.completed = !todo.completed 
}



function incompletedTodos(){
    const notCompletedTodo = getNotCompletedTodo()
    todoList.innerHTML = ''

    for(const todo of notCompletedTodo){
        createTodo(todo)
    }
    function createTodo(todoElement){
        const todo = document.createElement('li')
        todo.setAttribute('class','todo')
    
        const completedSection = document.createElement('div')
        completedSection.setAttribute('class','completed-section')
    
        const textSection = document.createElement('div')
        textSection.setAttribute('class','text-section')
    
        const btnSection = document.createElement('div')
        btnSection.setAttribute('class','button-section')
    
        const inputEl = document.createElement('input')
        inputEl.setAttribute('class','completed-checkbox')
        inputEl.setAttribute('type','checkbox')
    
        const todoPEl = document.createElement('p')
        todoPEl.setAttribute('class','text')
        todoPEl.textContent = todoElement.text
    
        const editBtn = document.createElement('button')
        editBtn.setAttribute('class','edit')
        editBtn.textContent = 'Edit'
    
        const deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('class','delete')
        deleteBtn.textContent = 'Delete'
    
        todoList.append(todo)
        todo.append(completedSection, textSection, btnSection)
        completedSection.append(inputEl)
        textSection.append(todoPEl)
        btnSection.append(editBtn,deleteBtn)

        const completedCheckbox = todo.querySelector('.completed-checkbox')
        completedCheckbox.checked = todoElement.completed
        completedCheckbox.addEventListener('click', function(){
            toggleTodo(todoElement)

            completedTodos()
            incompletedTodos()
        })
    }
}

function completedTodos(){
    const todosCompleted = getCompletedTodo()
    completedList.innerHTML = ''

    for(const todo of todosCompleted){
        createTodo(todo)
    }
    function createTodo(todoElement){
        const todo = document.createElement('li')
        todo.setAttribute('class','todo completed')
    
        const completedSection = document.createElement('div')
        completedSection.setAttribute('class','completed-section')
    
        const textSection = document.createElement('div')
        textSection.setAttribute('class','text-section')
    
        const btnSection = document.createElement('div')
        btnSection.setAttribute('class','button-section')
    
        const inputEl = document.createElement('input')
        inputEl.setAttribute('class','completed-checkbox')
        inputEl.setAttribute('type','checkbox')
    
        const todoPEl = document.createElement('p')
        todoPEl.setAttribute('class','text')
        todoPEl.textContent = todoElement.text
    
        const editBtn = document.createElement('button')
        editBtn.setAttribute('class','edit')
        editBtn.textContent = 'Edit'
    
        const deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('class','delete')
        deleteBtn.textContent = 'Delete'
    
        completedList.append(todo)
        todo.append(completedSection, textSection, btnSection)
        completedSection.append(inputEl)
        textSection.append(todoPEl)
        btnSection.append(editBtn,deleteBtn)

        const completedCheckbox = todo.querySelector('.completed-checkbox')
        completedCheckbox.checked = todoElement.completed
        completedCheckbox.addEventListener('click', function(){
            toggleTodo(todoElement)

            completedTodos()
            incompletedTodos()
        })
    }
}
completedTodos()
incompletedTodos()