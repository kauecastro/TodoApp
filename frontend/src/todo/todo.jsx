

import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import FormTodo from '../template/formTodo'
import TodoList from '../template/todoList'
export default class Todo extends Component {
    render() {
        return (
            <div> 
                <PageHeader name='Tarefas' small='Cadastro' />
                <FormTodo />
                <TodoList />
            </div>
        )
    }
}