//Export Comments
module.exports = {
  //Obtener todos los comentarios
  getComments(req, res, store) {
    res.status(200).send(store.posts[req.params.postId].comments)
  },
  //Obtener un comentario concreto
  getComment(req, res, store) {
    res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
  },
  //Añadir un comentario
  addComment(req, res, store) {
    let newComment = req.body
    let id = store.posts[req.params.postId].comments.length
    let comments = store.posts[req.params.postId].comments
    comments.push(newComment)
    res.status(201).send({commentId: id})
  },
  //Actualizar un comentario
  updateComment(req, res,store) {
    store.posts[req.params.postId].comments[req.params.commentId] = req.body
    res.status(200).send(store.posts[req.params.postId].comments[req.params.commentId])
  },
  //Eliminar un comentario
  removeComment(req, res, store) {
    store.posts[req.params.postId].comments.splice(req.params.commentId)
    res.status(204).send()
  }
}
