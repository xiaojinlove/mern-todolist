import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import TodoModel from './models/Todo'

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect('mongodb+srv://gaoyan:gaoyan@mern-todolist.nv8oqsn.mongodb.net/?retryWrites=true&w=majority&appName=mern-todolist')
  .then(
    console.log('数据库已连接')
  )

app.post('/add', (req, res) => {
  const task = req.body.task
  TodoModel.create({
    task: task
  })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.listen(3000, () => {
  console.log('Server is Running');
})
