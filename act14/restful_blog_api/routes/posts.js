//export Posts
module.exports = {
  //Obtener todos los posts
  getPosts(req, res, store) {
    res.status(200).send(store.posts)
  },
  // Obtener un post concreto
  getPost(req, res, store) {
    res.status(200).send(store.posts[req.params.postId])
  },
  //Añadir un post
  addPost(req, res ,store) {
    let newPost = req.body
    let id = store.posts.length
    store.posts.push(newPost)
    res.status(201).send({postId: id})
  },
  //Actualizar un post
  updatePost(req, res, store) {
    store.posts[req.params.postId] = req.body
    res.status(200).send(store.posts[req.params.postId])
  },
  //Eliminar un post
  removePost(req, res ,store) {
    store.posts.splice(req.params.postId, 1)
    res.status(204).send()
  }
}
