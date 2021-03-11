//contrôleur de la route GET /bills
exports.getList = (req, res) => {
  res.status(200).json([
    { bill: 'test' },
    { bill: 'test2' }
  ])
}

//contrôleur de la route GET /bills/:id
exports.getItem = (req, res) => {
  const myId = req.params.id
  const myBody = req.body
  const toto = req.query.toto

  res.status(200).json({ id: myId, toto, myBody  })
}

//contrôleur de la route POST /bills/
exports.postItem = (req, res) => {
  console.log(req.body)
  //sauvegarde en BDD, retourne la donnée sauvegardée
  res.status(200).json({ myBody: req.body })
}

//contrôleur de la route PUT /bills/
exports.putItem = (req, res) => {
  console.log(req.body)
  //sauvegarde en BDD, retourne la donnée sauvegardée
  res.status(200).json({ myBody: req.body  })
}

//contrôleur de la route DELETE /bills/
exports.deleteItem = (req, res) => {
  console.log(req.params.id)
  //sauvegarde en BDD, retourne la donnée sauvegardée
  res.status(200).json({ id: req.params.id  })
}
