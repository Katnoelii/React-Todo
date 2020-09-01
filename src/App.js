import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      tasks: [
        {
          task:'Feed the Dog',
          id:13879450,
          completed:false
        },
        {
          task:'Do Laundry',
          id:4358734,
          completed:false
        },
        {
          task:'Meet MVP',
          id:870354342,
          completed:false
        }
      ],
      input: '',
    };
  }
  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };

  handleChanges = (evt) => {
    this.setState({ input: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.addTask(this.state.input);
    this.setState({
      input: '',
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>⍨My Daily Tasks⍨</h1>
          <TodoForm
            addTask={this.addTask}
            handleChanges={this.handleChanges}
            handleSubmit={this.handleSubmit}
            currentInput={this.state.input}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <TodoList toggleTask={this.toggleTask} tasks={this.state.tasks} />
        <footer>
          <div>Icons made by <a className='icon' href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a className='icon' href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
