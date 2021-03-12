
const verifyParams = (req, res, next) => {
  console.log(req.params)
  if(req.params.id == 0){
    res.status(400).json({ error: 'un paramètre est manquant' })
  } else {
    next()
  }
  // si je ne fais pas next, le server n'envoie pas de réponse !!!
}


module.exports = verifyParams