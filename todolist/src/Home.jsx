import Create from "./Create"
import { useEffect, useState } from "react"
import axios from 'axios'

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
          <div key={todo._id} >
            {todo.task}
          </div>
        )
      }
    </div>
  )
}

export default Home