/* eslint-disable react/prop-types */
import trashLogo from '../assets/trash.svg'
import '../App.css'

function Todo({todo}) {
  return (
    <div className="todo flex justify-between max-w-1/2 mt-5" key={todo.id}>
      <div className="flex gap-10">
        <input type="checkbox" className="border-green-400 accent-green-400 hover:cursor-pointer" />
        <p className="text-white">{todo.act}</p>
      </div>
      <button className="border border-red-700 p-1 rounded-md">
        <img src={trashLogo} className="w-4" alt="trash" />
      </button>
    </div>
  )
}

export default Todo