import React from 'react'
import './App.css'
import TodoList from './TodoList/todoList'
import AddTodo from './AddToDo/addTodo'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  render() {
    return(
      <div>
        <AddTodo addTodoFN={this.addTodo}></AddTodo>
        <TodoList updateTodoFn={this.updateTodo} todos={this.state.todos}></TodoList>
      </div>
    )
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos')
    
    if (todos){
      const savedTodos = JSON.parse (todos)
      this.setState ({todos: savedTodos})
      console.log(todos)
    } else {
      console.log ("In componentDidMount function", 'No todos')
    }
  }

  addTodo = async (todo) => {
    await this.setState ({ todos: [...this.state.todos, {
      text: todo,
      completed: false
    }] })
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
    console.log("In addTodo function", localStorage.getItem('todos'))
  }

  updateTodo = async (todo) => {
    const newTodos = this.state.todos.map(_todo => {
      console.log('Inside updateTodo, todo is: ', _todo.text, " and completed is: ", _todo.completed)
      if (todo === _todo)
        return { 
          text: todo.text,
          completed: !todo.completed
        } 
      else
        return _todo
    })
    await this.setState({ todos: newTodos})
    localStorage.setItem('todos', JSON.stringify(this.state.todos))
  }

}
  

export default App;
