
import './App.css';
import CreateTodo from './components/create-todo/CreateTodo';
import Header from './components/header/Header';
import TodoItem from './components/todo-item/TodoItem';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <div>
          <CreateTodo />
        </div>
        <div>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </div>
    </div>
  );
}


export default App;
