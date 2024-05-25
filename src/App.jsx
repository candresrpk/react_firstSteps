import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'
import CreateTodo from './components/CreateTodo'


const defaultTodos = [
  {text: 'comer monda', completed: true},
  {text: 'cocinar', completed: false},
  {text: 'estudiar arameo antiguo', completed: true},
  {text: 'vender el alma', completed: true},
  {text: 'comprar 3 chamucos', completed: false},
  {text: 'bailar cumbia', completed: true},

]


function App() {
  return (
    <>
      <TodoCounter done ={3} total={10}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem text={todo.text} completed={todo.completed} key={todo.text} />
        ))}
      </TodoList>
      <CreateTodo/>
    </>
  )
}

export default App
