//export Dishes
module.exports = {
  //Obtener todos los dishes
  getDishes(req, res, store) {
    res.status(200).send(store.dishes)
  },
  // Obtener un dish concreto
  getDish(req, res, store) {
    res.status(200).send(store.dishes[req.params.dishId])
  },
  //Añadir un dish
  addDish(req, res ,store) {
    let newPost = req.body
    let id = store.dishes.length
    store.dishes.push(newPost)
    res.status(201).send({dishId: id})
  },
  //Actualizar un dish
  updateDish(req, res, store) {
    store.dishes[req.params.dishId] = req.body
    res.status(200).send(store.dishes[req.params.dishId])
  },
  //Eliminar un dish
  removeDish(req, res ,store) {
    store.dishes.splice(req.params.dishId, 1)
    res.status(204).send()
  }
}
