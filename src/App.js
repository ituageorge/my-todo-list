import React, {Component} from 'react';
import Todos from "./component/Todos";
import Header from "./component/layout/Header"
import AddTodo from "./component/AddTodo";
import uuid from "uuid"

import './App.css';

class App extends Component {
  state={
    todos:[
      {
        id:uuid.v4(),
        title:"Please take out the trash now!",
        completed:false
      },
      {
        id:uuid.v4(),
        title:"Dinner with me,Today",
        completed:false
      },
      {
        id:uuid.v4(),
        title:"Meeting with my Tenant",
        completed:true
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos:this.state.todos.map(todo => {
if(todo.id === id) {
todo.completed=!todo.completed
}
return todo
    }) })
}  

delTodo = (id) => {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed : false
  }
  this.setState({todos: [...this.state.todos, newTodo]});
}
  
  render() {
      return (
          <div className="App">
            <div className="container">
            <Header />
            <AddTodo  addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </div>
          </div>
        );
  }
}

export default App;
