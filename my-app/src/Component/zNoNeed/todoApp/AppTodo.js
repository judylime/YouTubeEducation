
import React from 'react';
import Todos from './Todos';
import AddForm from './AddForm';
class AppTodo extends React.Component {
    state={
        todos:[
            {id: 1, content : "todo 01"},
            {id: 2, content : "todo 02"},
            {id: 3, content : "todo 03"},
        ]
    }
    addTodo=(newTodo)=>{
        newTodo.id = Math.random();
        let todos=[...this.state.todos, newTodo];
        this.setState({
            todos
        })
    }
    deleteTodo =(id)=>{
        const todos = this.state.todos.filter(todo=>{
            return todo.id!==id
        });
        this.setState({
            todos
        })
    }
    render() {
        return (
            <div className="AppTodo">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default AppTodo;