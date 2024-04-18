import Create from "./Create"
import { useEffect, useState } from "react"
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs'

function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/get')
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  }, [])
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
            <div className="checkbox">
              <BsCircleFill className='icon' />
              <p>{todo.task}</p>
            </div>
            <div>
              <span><BsFillTrashFill className='icon' /></span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home