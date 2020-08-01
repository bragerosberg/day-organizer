import React from 'react';
import TodoCard from './TodoCard';
import { uuid } from 'uuidv4';
import './Tasks.css';


const TodoList = (props) => {
  const handleChange = (event) => {
    props.setTaskInput(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.appendTask({
      taskInput: props.taskInput,
      id: uuid(),
    });
    props.clearInputField();
  };


  return (
    <article>
      <section className="navbar todo__form">
        <form onSubmit={handleSubmit}>
          <input className="todo__form__input" type="text" value={props.taskInput} placeholder="Please write your task" onChange={handleChange} />
          <button className="todo__form__button" onClick={handleSubmit}>Add Task</button>
        </form>
        <button className="todo__form__delete " onClick={props.deleteAllTodos}>Delete All Tasks</button>
      </section>

      <section className="todo__list">
        <div className="todo__list__cards">
          {props.tasks.map(task => (
              <TodoCard key={task.id} task={task} toggleTask={props.toggleTask} deleteTask={props.deleteTask}/>
          ))}
        </div>
      </section>
    </article>
  );
}

export default TodoList;
