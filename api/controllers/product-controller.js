
const Product = require(__basedir + '/model/products.js').Product;
const mongoose= require('mongoose');
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
if(mongoose.Types.ObjectId.isValid(id)){
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
}
