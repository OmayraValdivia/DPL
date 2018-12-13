//export Promotions
module.exports = {
  //Obtener todos los promotions
  getPromotions(req, res, store) {
    res.status(200).send(store.promotions)
  },
  // Obtener un promotion concreto
  getPromotion(req, res, store) {
    res.status(200).send(store.promotions[req.params.promotionId])
  },
  //Añadir un promotion
  addPromotion(req, res ,store) {
    let newPromotion = req.body
    let id = store.promotions.length
    store.promotions.push(newPromotion)
    res.status(201).send({promotionId: id})
  },
  //Actualizar un promotion
  updatePromotion(req, res, store) {
    store.promotions[req.params.promotionId] = req.body
    res.status(200).send(store.promotions[req.params.promotionId])
  },
  //Eliminar un promotion
  removePromotion(req, res ,store) {
    store.promotions.splice(req.params.promotionId, 1)
    res.status(204).send()
  }
}
