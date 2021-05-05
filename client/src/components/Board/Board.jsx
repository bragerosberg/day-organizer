import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import TodoList from '../Tasks/TodoList';
import Weather from '../Weather/Weather';


const client = new ApolloClient({
  uri: '/graphql'
});


const Board = ({ 
  tasks,
  taskInput,
  solved,
  deleteTask,
  appendTask,
  setTaskInput,
  toggleTask,
  clearInputField,
  deleteAllTodos
}) => {
  return(
    <main>
        <ApolloProvider client={client}>
          <Weather />
        </ApolloProvider>
        <TodoList tasks={tasks}
          taskInput={taskInput}
          solved={solved}
          deleteTask={deleteTask}
          appendTask={appendTask}
          setTaskInput={setTaskInput}
          toggleTask={toggleTask}
          clearInputField={clearInputField}
          deleteAllTodos={deleteAllTodos}
        />

    </main>
  )
}

export default Board;