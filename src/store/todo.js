import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id: 1, title: 'watch the movie', completed: false},
        {id: 2, title: 'wash the dishes', completed: false},
        {id: 3, title: 'clear room', completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(t => t.id !== id)
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => id === todo.id ? {...todo, completed: !todo.completed} : todo)
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.todos = [...this.todos, ...json])
    }
}

export default new Todo()