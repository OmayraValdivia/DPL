//imports
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

//instead
let store = {
  posts: [{
    name: 'Omayra',
    url: 'https://cifpmajadamarcial.es',
    text: 'Ejercicio 14 DPL.',
    comments: [{
      text: 'Comentario'
    }]
  }]
}

//Express app - Configurations
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//Routes Posts
//GET and POST /posts
app.get('/posts', (req, res) => {
  routes.posts.getPosts(req,res,store)
})
app.post('/posts', (req, res) => {
  routes.posts.addPost(req,res,store)
})
//PUT and DELETE /posts/:postId/
app.put('/posts/:postId',(req,res) =>{
  routes.posts.updatePost(req,res,store)
})
app.delete('/posts/:postId',(req,res)=>{
  routes.posts.removePost(req,res,store)
})
//Consulta uno especifico
app.get('/posts/:postId', (req, res) => {
  routes.posts.getPost(req,res,store)
})

//Routes Comments
//GET and POST /posts/:postId/comments
app.get('/posts/:postId/comments', (req, res) => {
  routes.comments.getComments(req,res,store)
})
app.post('/posts/:postId/comments', (req, res) => {
  routes.comments.addComment(req,res,store)
})
//PUT and DELETE /posts/:postId/comments/:commentId
app.put('/posts/:postId/comments/:commentId', (req, res) => {
  routes.comments.updateComment(req,res,store)
})
app.delete('/posts/:postId/comments/:commentId',(req,res) =>{
  routes.comments.removeComment(req,res,store)
})
//Consulta uno especifico
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  routes.comments.getComment(req,res,store)
})

app.listen(3000)
