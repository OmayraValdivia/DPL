//export Feedbacks
module.exports = {
  //Obtener todos los feedbacks
  getFeedbacks(req, res, store) {
    res.status(200).send(store.feedback)
  },
  // Obtener un feedback concreto
  getFeedback(req, res, store) {
    res.status(200).send(store.feedback[req.params.feedbackId])
  },
  //Añadir un feedback
  addFeedback(req, res ,store) {
    let newFeedback = req.body
    let id = store.feedback.length
    store.feedback.push(newFeedback)
    res.status(201).send({feedbackId: id})
  },
  //Actualizar un feedback
  updateFeedback(req, res, store) {
    store.feedback[req.params.feedbackId] = req.body
    res.status(200).send(store.feedback[req.params.feedbackId])
  },
  //Eliminar un feedback
  removeFeedback(req, res ,store) {
    store.feedback.splice(req.params.feedbackId, 1)
    res.status(204).send()
  }
}
