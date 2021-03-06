// Les imports
const User = require(__basedir + '/model/user').User;
const bcrypt = require('bcrypt');
/**
 * Enregistrer l'utilisateur en BDD 
 * /!\ Le mot de passe sera hashé avec bcrypt
 * @param req
 * @param res
 * @param next
 */

module.exports.register = (req, res, next) => {
    // Récupération de l'utilisateur
    const userRecrived = req.body;

    // on verifie le MDP  existe 
    if(userRecrived.plainPassword){
        // hasher le mot de passe
        bcrypt.hash(userRecrived.plainPassword, 16, (err, hash) =>{
            if (err) { next(err); }
            else {
       userRecrived.password = hash;
       userRecrived.plainPassword = '';
            User.create(userRecrived, (err, user) => {
                if(err) 
                 {next(err); } 
                    else {  
                    res.json({result: true});
                    }
            } 
            );
            }
        });
    } else {
        res.json({result: false});
    }

};

module.exports.login = (req, res, next) => {
    // récupération des donnéé
    const datas = req.body;
  if (datas.username) {
    User.find(
        {
            'username': datas.username
        },
        (err, user) => {
            if(err) {next(err);}
            else {
                // vérification du mdp
                bcrypt.compare(datas.plainPassword, user.password, (err, res) => {
                 if(err) { res.json({result: false});}
                 else {
                     if(res){res.json({result: true}); }
                     else { res.json({result: false});}
                 }
                });
            }
        }
    )
} else {
    res.json({result: false});
}
}
