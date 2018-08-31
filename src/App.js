import React, { Component } from 'react';
import './App.css';
import SingleToDo from './singleTodo';


class App extends Component {
    constructor(){
        super();
        this.state = {
            todos: [],
            currentToDo: ""
        };
    }

    onInputChange = (e) => {
        this.setState({currentToDo : e.target.value});
    }

    onClickButton = () => {
        let todos = [...this.state.todos];
        if(this.state.currentToDo.length !== 0){
            todos.push(this.state.currentToDo);
            this.setState({ todos: todos, currentToDo: "" });
        }
    }

    deleteTodo = (index) => {
        let todos = [...this.state.todos];
        todos.splice(index, 1);
        this.setState({todos});
    }

  render() {
      let todoList = this.state.todos.map((todo, index) => {
          return (
              <SingleToDo key={index} todo={todo} delete={this.deleteTodo.bind(this, index)}/>
          )});

    return (
      <div className="App">
        <input placeholder='Enter a to-do' value={this.state.currentToDo}
         onChange={this.onInputChange} />
        <button onClick={this.onClickButton}>add!</button>
        <br />
        {this.state.todos.length === 0 ? 'no todos yet' : <ul>{todoList}</ul> }
      </div>
    );
  }
}

export default App;
