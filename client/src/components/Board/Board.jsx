import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import TodoList from '../Tasks/TodoList';
import Weather from '../Weather/Weather';


const client = new ApolloClient({
  uri: '/graphql'
});


const Board = (props) => {
  return(
    <main>
        <ApolloProvider client={client}>
          <Weather />
        </ApolloProvider>
        <TodoList tasks={props.tasks}
        taskInput={props.taskInput}
        solved={props.solved}
        deleteTask={props.deleteTask}
        appendTask={props.appendTask}
        setTaskInput={props.setTaskInput}
        toggleTask={props.toggleTask}
        clearInputField={props.clearInputField}
        deleteAllTodos={props.deleteAllTodos}
        />

    </main>
  )
}

export default Board;