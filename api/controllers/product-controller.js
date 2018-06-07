
const Product = require(__basedir + '/model/products.js').Product;
const mongoose= require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
/**
 *  Récupère la liste des produits
 */

module.exports.list =(req, res, next) => {
    // Récupération des produits
    Product.find(
        (err, products)=>{
       if(err) { next (err);}
       else{
           res.json(products);
       }
        }
    );
} ;

/**
 * Ajout un produit en BDD
 */
module.exports.add = (req,res, next) =>{

    console.log(req.body);

    const productRecieved = req.body;
    // console.log(productRecieved);
    // res.json(productRecieved);
  
    // ajout d'un produit à la base de donnée
    Product.create(
        productRecieved,

        (err, product) => {
            if(err) { next(err);}
            else {
                res.json(product);
            }
        }
    );
};

/**
 * Récupuration d'un produit par rapport à son id
 */
module.exports.show = (req, res, next) =>{
    // Récupétaion de l'id
   const id = req.params.id;
if(ObjectId.isValid(id)){
    // Récupération de produit
    Product.findOne(
      { '_id' : id}, 
      (err, product) => {
        if(err) { next(err);}
        else {
            res.json(product);
        } 
    } 
    );
}else{
    res.json(null);
}
};

/**
 * Modification d'un produit
 */
module.exports.update = (req, res, next) => { 
    // si l'id du produit envoyeé est valide: om modifie
    if(productToUpdate._id && ObjectId.isValid(productToUpdate._id)){
    // Modification de produit
    const productToUpdate = req.body;
        Product.update(
        // Les condition que doivent les enregitrements pour etre modifier
           { '_id': productToUpdate._id },
        // les modification a effectuer
            productToUpdate,
        // fonction de rappel (callback) à éxecuter lorsque les modification...
        // ... ont été faites
            (err, nblines) => {
             if(err) {next(err); }
                else {
          res.json({ result : true});
                }
            }
        );
    } else {
    res.json({ result : false });
    }
};
