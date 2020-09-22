import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import TodoList from './components/TodoList';
import About from './components/about';
import NavbarComp from './components/NavbarComp';



function App() {
  return (
    <BrowserRouter>
        <NavbarComp />
      <div className="todo-app">
        {/* <Todo /> */}
        <TodoList />
      </div>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/kegiatan-keseharianmu/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
