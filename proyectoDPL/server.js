//Imports
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')
const fs = require("fs");

// Getting the content from the file
let content = fs.readFileSync("proyecto.json");

//Instead and definition to the JSON type
let store = JSON.parse(content);

//Express app - Configurations
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

//Routes Dishes
//GET and POST /dishes
app.get('/dishes', (req, res) => {
  routes.dishes.getDishes(req,res,store)
})
app.post('/dishes', (req, res) => {
  routes.dishes.addDish(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT and DELETE /dishes/:dishId/
app.put('/dishes/:dishId',(req,res) =>{
  routes.dishes.updateDish(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
app.delete('/dishes/:dishId',(req,res)=>{
  routes.dishes.removeDish(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//Consulta uno especifico GET /dishes/:dishId/
app.get('/dishes/:dishId', (req, res) => {
  routes.dishes.getDish(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})

//Routes Comments
//GET and POST /dishes/:dishId/comments
app.get('/dishes/:dishId/comments', (req, res) => {
  routes.comments.getComments(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
app.post('/dishes/:dishId/comments', (req, res) => {
  routes.comments.addComment(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT and DELETE /dishes/:dishId/comments/:commentId
app.put('/dishes/:dishId/comments/:commentId', (req, res) => {
  routes.comments.updateComment(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
app.delete('/dishes/:dishId/comments/:commentId',(req,res) =>{
  routes.comments.removeComment(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//Consulta uno especifico GET /dishes/:dishId/comments/:commentId
app.get('/dishes/:dishId/comments/:commentId', (req, res) => {
  routes.comments.getComment(req,res,store)
})

//Routes Promotions
//GET and POST /promotions
app.get('/promotions', (req, res) => {
  routes.promotions.getPromotions(req,res,store)
})
app.post('/promotions', (req, res) => {
  routes.promotions.addPromotion(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT and DELETE /promotions/:promotionId/
app.put('/promotions/:promotionId',(req,res) =>{
  routes.promotions.updatePromotion(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
app.delete('/promotions/:promotionId',(req,res)=>{
  routes.promotions.removePromotion(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//Consulta uno especifico GET /promotions/:promotionId/
app.get('/promotions/:promotionId', (req, res) => {
  routes.promotions.getPromotion(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})

//Routes Leaders
//GET and POST /leaders
app.get('/leaders', (req, res) => {
  routes.leaders.getLeaders(req,res,store)
})
app.post('/leaders', (req, res) => {
  routes.leaders.addLeader(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT and DELETE /leaders/:leaderId/
app.put('/leaders/:leaderId',(req,res) =>{
  routes.leaders.updateLeader(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
app.delete('/leaders/:leaderId',(req,res)=>{
  routes.leaders.removeLeader(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//Consulta uno especifico GET /leaders/:leaderId/
app.get('/leaders/:leaderId', (req, res) => {
  routes.leaders.getLeader(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})

//Routes Feedbacks
//GET and POST /feedbacks
app.get('/feedbacks', (req, res) => {
  routes.feedback.getFeedbacks(req,res,store)
})
app.post('/feedbacks', (req, res) => {
  routes.feedback.addFeedback(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//PUT and DELETE /feedbacks/:feedbackId/
app.put('/feedbacks/:feedbackId',(req,res) =>{
  routes.feedback.updateFeedback(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
app.delete('/feedbacks/:feedbackId',(req,res)=>{
  routes.feedback.removeFeedback(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})
//Consulta uno especifico GET /feedbacks/:feedbackId/
app.get('/feedbacks/:feedbackId', (req, res) => {
  routes.feedback.getFeedback(req,res,store)
  //Se sobreescribe el fichero proyecto.json
  fs.writeFileSync("proyecto.json", JSON.stringify(store))
})

app.listen(3000)
