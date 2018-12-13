//Export Comments
module.exports = {
  //Obtener todos los comentarios
  getComments(req, res, store) {
    res.status(200).send(store.dishes[req.params.dishId].comments)
  },
  //Obtener un comentario concreto
  getComment(req, res, store) {
    res.status(200).send(store.dishes[req.params.dishId].comments[req.params.commentId])
  },
  //Añadir un comentario
  addComment(req, res, store) {
    let newComment = req.body
    let id = store.dishes[req.params.dishId].comments.length
    let comments = store.dishes[req.params.dishId].comments
    comments.push(newComment)
    res.status(201).send({commentId: id})
  },
  //Actualizar un comentario
  updateComment(req, res,store) {
    store.dishes[req.params.dishId].comments[req.params.commentId] = req.body
    res.status(200).send(store.dishes[req.params.dishId].comments[req.params.commentId])
  },
  //Eliminar un comentario
  removeComment(req, res, store) {
    store.dishes[req.params.dishId].comments.splice(req.params.commentId)
    res.status(204).send()
  }
}
