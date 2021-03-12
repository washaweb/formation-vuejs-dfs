const express = require('express')
const router = express.Router()

// les middleWare permettent d'externaliser et
//de globaliser la logique du traitement d'une requête
const verifyParams = require('../middleware/verifyParams')

//importer les fonctions du contrôleur des routes pour bills/
const ctrl = require('../controllers/bills')

// route /bills/
router.get('/', ctrl.getList )

// route /bills/:id
//le router executera la requête dans l'ordre des middlewares,
//pour finir avec le contrôleur de la requête
router.get('/:id', verifyParams, ctrl.getItem)
router.post('/', ctrl.postItem)
router.put('/:id', verifyParams, ctrl.putItem)
router.patch('/:id', verifyParams, ctrl.patchItem)
router.delete('/:id', verifyParams, ctrl.deleteItem)

module.exports = router