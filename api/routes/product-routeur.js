// Les imports
const express = require('express');
const router = express.Router();

const productController = require(__basedir + '/controllers/product-controller');

/**
 * Route: liste des produits
 */

 router.route('/')

 // Liste de produits
 .get( productController.list)

 // Ajout d'in produit
.post( productController.add)
// Modification du produit
.put( productController.update)

;
// détail dun produit
router.route('/:id') 
.get(productController.show)
// suppression d'un produit
.delete( productController.delete)
;
 module.exports = router;