import {  useState } from 'react'
import axios from 'axios'

function Create() {
  const [task, setTask] = useState()
  const handleAdd = () => {
    axios.post('http://localhost:3000/add', {task: task})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return (
    <div className="create-form">
      <input type="text" placeholder="请输入任务" onChange={(e) => setTask(e.target.value)} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create