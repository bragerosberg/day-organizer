import React from 'react';
import './Tasks.css'
class TodoCard extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      solved: false,
    };
  }

  toggleTask = () => {
    this.setState({
      solved: !this.state.solved,
    });
  }

  render() {
    return (
      this.props.task.taskInput === '' ? null :
      this.state.solved ? (
        <li className="todo__card__done card" id={this.props.task.id}
          onClick={this.toggleTask.bind(this)}>
            {this.props.task.taskInput}
          <button className="todo__card__done--button btn-danger"
          id={this.props.task.id}
          onClick={this.props.deleteTask}>X</button>
        </li>
      ) : (
        <li className="todo__card__task card" id={this.props.task.id}
        onClick={this.toggleTask.bind(this)}>
          {this.props.task.taskInput}
        </li>
      )
    );
  }
}

export default TodoCard;
