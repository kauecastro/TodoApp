import 'module/bootstrap/dist/css/bootstrap.min.css'
import 'module/font-awesome/css/font-awesome.min.css'
import React from 'react'
import About from '../about/about'
import Todo from '../todo/todo'
import Menu from '../template/menu'
export default props => (
    <div className="container"> 
        <Menu />
        <Todo />
        <About />
    </div>
)