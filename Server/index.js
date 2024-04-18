import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import TodoModel from './models/Todo.js'

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect('mongodb+srv://gaoyan:gaoyan@mern-todolist.nv8oqsn.mongodb.net/?retryWrites=true&w=majority&appName=mern-todolist')
  .then(
    console.log('数据库已连接')
  )
app.get('/get', (req, res) => {
  TodoModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})
app.put('/update/:id', (req, res) => {
  const { id } = req.params
  console.log(id);
  TodoModel.findByIdAndUpdate(
    {
      _id: id
    },
    {
      done: true
    }
  ).then(result => res.json(result))
  .catch(err => res.json(err))
})
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params
  console.log(id);
  TodoModel.findByIdAndDelete(
    {
      _id: id
    },
  ).then(result => res.json(result))
  .catch(err => res.json(err))
})
app.post('/add', (req, res) => {
  const task = req.body.task
  TodoModel.create({
    task: task
  })
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.listen(3000, () => {
  console.log('Server is Running')
})
