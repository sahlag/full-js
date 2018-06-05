
const Product = require(__basedir + '/model/products.js').Product;
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
    // ajout d'un produit à la base de donnée
    Product.create(
        {
            name: 'transat',
            introduction: 'pour des vacances au bord de la mer',
            price: 35.99,
            createdAt: new Date(),
            publisher: 'youssef'

        },
        (err, product)=>{
            if(err) { next(err);}
            else{
                res.json(product);
            }
        }
    );
};
