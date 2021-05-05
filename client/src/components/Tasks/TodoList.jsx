import React from 'react';
import TodoCard from './TodoCard';
import { uuid } from 'uuidv4';
import './Tasks.css';


const TodoList = ({ 
  setTaskInput, 
  appendTask, 
  clearInputField, 
  taskInput, 
  deleteAllTodos, 
  deleteTask, 
  tasks,
  toggleTask,
}) => {
  const handleChange = (event) => {
    setTaskInput(event);
  };

  const handleSubmit = event => {
    event.preventDefault();
    appendTask({
      taskInput: taskInput,
      id: uuid(),
    });
    clearInputField();
  };


  return (
    <article>
      <section className="navbar todo__form">
        <form onSubmit={handleSubmit}>
          <input 
            className="todo__form__input"
            type="text"
            value={taskInput}
            placeholder="Please write your task"
            onChange={handleChange} 
          />
          <button className="todo__form__button" onClick={handleSubmit}>Add Task</button>
        </form>
        <button className="todo__form__delete " onClick={deleteAllTodos}>Delete All Tasks</button>
      </section>

      <section className="todo__list">
        <div className="todo__list__cards">
          {tasks.map(task => (
              <TodoCard key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask}/>
          ))}
        </div>
      </section>
    </article>
  );
}

export default TodoList;
