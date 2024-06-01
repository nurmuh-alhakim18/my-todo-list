import './App.css'
import Todo from './components/Todo.jsx'

let todos = [
  {
    id: 1,
    act: "Create Guest Experience mobile check-in",
  }, 
  {
    id: 2,
    act: "Document current CI/CD process",
  },
  {
    id: 3,
    act: "Perform Code Review for final Pillow-Talk release",
  },
  {
    id: 4,
    act: "Implement new Color Palette from Design Team",
  },
  {
    id: 5,
    act: "Fix Image uploading process for guest check-in",
  },
  {
    id: 6,
    act: "Provide on-boarding documentation",
  }
]

function renderTodoList() {
  return todos.map(todo => {
    return (
      <>
        <Todo todo={todo} />
      </>
    )
  })
}

function App() {
  return (
    <>
      <h1 className='text-3xl mt-10 mb-10 font-bold text-white'>Chores ToDo List</h1>
      {renderTodoList()}

      <hr className="mt-10 mb-10 border-2 border-slate-700"/>

      <h1 className="text-3xl mt-10 mb-10 font-bold text-white">Done : 0</h1>
      <div className="form max-w-1/2 flex flex-col gap-4">
        <label htmlFor="inputTodo" className='text-white'>Add todo</label>
        <input type="text" id="inputTodo" className="outline-none shadow-none border-4 border-solid border-slate-700 rounded-lg p-2 focus:border-white text-white"/>
        <button className="h-10 bg-sky-400 px-3 py-1 rounded-lg self-start font-bold">ADD TASK</button>
      </div>
    </>
  )
}

export default App
