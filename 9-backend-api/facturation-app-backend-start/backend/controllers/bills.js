//contrôleur de la route /bills
exports.getList = (req, res) => {
  res.status(200).json([
    { bill: 'test' },
    { bill: 'test2' }
  ])
}

//contrôleur de la route /bills/:id
exports.getItem = (req, res) => {
  const myId = req.params.id
  const myBody = req.body
  const toto = req.query.toto

  res.status(200).json({ id: myId, toto, myBody  })
}
