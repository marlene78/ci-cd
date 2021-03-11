const Bell = require('../models/bellModel');

/**
 * Liste des sonneries
 */
exports.list_all_bell = (req, res) => {
  Bell.find({bell_id: req.params.bell_id}, (error, bells) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(bells);
    }
  })
}

/**
 * Update des votes
 */

exports.update_a_bell = (req, res) => {
  
  Bell.update(
    {"_id" : req.params.bell_id}, 
    { $inc: { note: 1 } },  (error, bell)  => {
      if(error){
        res.status(500);
        res.json({message: "Erreur serveur."})
      }else{
          res.status(201);
          res.json(bell);
      }
  })
  

}



/**
 * Création d'une sonnerie
 */
exports.create_a_bell = (req, res) => {

  let regex = new RegExp( '/(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/');
  let url = regex.test(req.body.lien);
  if(url == true){
      
    let new_bell = new Bell(req.body);
      
    new_bell.save((error, bell) => {
        if(error){
          res.status(500);
          console.log(error);
          res.json({message: "Erreur serveur."})
        }else{
          res.status(201);
          res.json(bell);   
        
        }
      })
  }else{
    res.json({message: "Url non valide"})
  }
}




/**
 * Affiche une sonnerie en fonction de son id
 */
exports.get_a_bell = (req, res) => {

  Bell.findById(req.params.bell_id, (error , bell) =>{
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(201);
      res.json(bell);
      
    }
  })
}
