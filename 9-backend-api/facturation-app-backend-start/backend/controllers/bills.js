const Bill = require('../models/Bill')

//contrôleur de la route GET /bills
exports.getList = (req, res) => {
  // on interroge la base de donnée
  Bill.find().then((bills) => {
    // si il a des données, on les renvoie en JSON
    res.status(200).json(bills)
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))

}

//contrôleur de la route GET /bills/:id
exports.getItem = (req, res) => {
  // on interroge la base de donnée
  Bill.findOne({
    _id: req.params.id
  }).then((bill) => {
    // si il a des données, on les renvoie en JSON
    res.status(200).json(bill)
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}

//contrôleur de la route POST /bills/
exports.postItem = (req, res) => {
  // console.log(req.body)
  // on fait des vérifications sur la donnée passée dans le body
  if(!req.body.billNumber || !req.body.date) {
    // si il y a une erreur on interrompt l'opération...
    res.status(400).json({ error: 'Les paramètres date et billNumber sont obligatoires.' })
  }
  
  //si tout va bien
  //on crée un nouveau document Mongo avec le model Bill
  const bill = new Bill({
    ...req.body //ici on passe les données envoyées dans le body de la requête post
  })
  
  //sauvegarde en BDD, retourne la donnée sauvegardée
  bill.save().then(() => {

    // retourne la réponse au format JSON
    res.status(200).json({
      message: 'Facture crée !'
    })
  // en cas d'erreur à l'enregistrement en BDD...
  }).catch(error => res.status(400).json({ error }))
}

//contrôleur de la route PUT /bills/:id
exports.putItem = (req, res) => {
  
  //mise à jour de l'élément en BDD
  Bill.updateOne({ _id: req.params.id },{ ...req.body })
  .then(() => {
    // retourne la réponse au format JSON
    res.status(200).json({
      message: 'Facture mise à jour !'
    })
  // en cas d'erreur à l'enregistrement en BDD...
  }).catch(error => res.status(400).json({ error }))
}

//contrôleur de la route DELETE /bills/:id
exports.deleteItem = (req, res) => {
  // on interroge la base de donnée
  Bill.deleteOne({
    _id: req.params.id
  }).then((bill) => {
    // si la facture est trouvée, on la supprime, puis renvoie un message de confirmation
    res.status(200).json({
      message: 'Facture supprimée'
    })
    // en cas d'erreur on capture le message d'erreur pour l'aficher dans la réponse en JSON
  }).catch(error => res.status(400).json({ error }))
}
