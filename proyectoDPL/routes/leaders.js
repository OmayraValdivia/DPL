//export Leaders
module.exports = {
  //Obtener todos los leaders
  getLeaders(req, res, store) {
    res.status(200).send(store.leaders)
  },
  // Obtener un leader concreto
  getLeader(req, res, store) {
    res.status(200).send(store.leaders[req.params.leaderId])
  },
  //Añadir un leader
  addLeader(req, res ,store) {
    let newPost = req.body
    let id = store.leaders.length
    store.leaders.push(newPost)
    res.status(201).send({leaderId: id})
  },
  //Actualizar un leader
  updateLeader(req, res, store) {
    store.leaders[req.params.leaderId] = req.body
    res.status(200).send(store.leaders[req.params.leaderId])
  },
  //Eliminar un leader
  removeLeader(req, res ,store) {
    store.leaders.splice(req.params.leaderId, 1)
    res.status(204).send()
  }
}
