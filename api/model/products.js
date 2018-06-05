// les imports
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// Création de schéma
const productSchema = new Schema({
  name: {
      type:String,
      required:'Le nom du produit doit étre renseigné',
      unique: true
  },
  introduction: {
      type: String,
      required: 'ntroduction obligatoire'
  },
  price: Number,
  nbViews: Number,
  isPublished: Boolean,
  createdAt: {
        type: Date,
        required: 'Date de création obligatoire'
  }, 
  updatedAt: Date,
  publisher: {
        type: String,
        required: 'Publicateur obligatoire'
  } 
});

//Création du model

const Product = mongoose.model('Product', productSchema);

// Export de model
module.exports.Product = Product;
