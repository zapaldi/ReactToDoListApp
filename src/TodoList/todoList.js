import React from 'react';
import TodoItem from '../TodoItem/todoItem'

class TodoList extends React.Component {
    
    render() {

        const { todos } = this.props

        todos.map( _todo => "help")

        return (
            <div className='todoListContainer'>
                {
                    todos.map ( (_todo,_index) => {
                        return (
                            <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}></TodoItem>
                        )
                    })
                }
                
            </div>
        )
        
    }

    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }
}

export default TodoList;