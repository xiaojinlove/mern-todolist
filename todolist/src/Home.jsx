import Create from "./Create"
import { useEffect, useState } from "react"
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs'

function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/get')
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  }, [])
  const handleEdit = (id) => {
    axios.put(`http://localhost:3000/update/${id}`)
    .then(res => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
    .then(res => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {
        todos.length === 0
        ?
        <div><h2>没有记录</h2></div>
        :
        todos.map(todo => 
          <div key={todo._id} className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              { todo.done ? 
                <BsFillCheckCircleFill className="icon"></BsFillCheckCircleFill> : 
                <BsCircleFill className='icon' />
              }
              <p className={todo.done ? 'line_through' : ''}>{todo.task}</p>
            </div>
            <div>
              <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}/></span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home