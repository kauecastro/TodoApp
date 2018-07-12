

import React, {Component} from 'react'
import PageHeader from '../template/pageHeader'
import FormTodo from '../template/formTodo'
import TodoList from '../template/todoList'
import axios from 'axios'
const URL = 'http://localhost:3003/api/todo'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsUndone = this.handleMarkAsUndone.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, {description})
            .then(() => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(() => this.refresh())
    }

    refresh(description = '') {
        const desc = `?description__regex=/${description}/`  
        axios.get(`${URL}`).then((res) => 
            this.setState({...this.state, description, list: res.data}))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(() => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description);
    }

    handleMarkAsUndone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(() => this.refresh(this.state.description))
    }

    render() {
        return (
            <div> 
                <PageHeader name='Tarefas' small='Cadastro' />
                <FormTodo 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    description={this.state.description}
                    handleSearch={this.handleSearch}/>
                <TodoList 
                    list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsUndone={this.handleMarkAsUndone}
                    handleMarkAsDone={this.handleMarkAsDone}/> 
            </div>
        )
    }
}