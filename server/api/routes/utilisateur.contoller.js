const express = require("express");
const router = express.Router();
const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Utilisateur = db.Utilisateur

router.post("/utilisateurs", (req, res) => {
    Utilisateur.create({
    noms : req.body.noms,
    email : req.body.email,
    pwd : req.body.pwd,
    photo : req.body.photo,
    type_paiement : req.body.type_paiement,
    numero_carte :req.body.numero_carte,
    code_secret : req.body.code_secret
  })
  .then((utilisateurs) => res.status(201).json(utilisateurs))
  .catch((err) => res.status(400).json(err));
});

router.post("/utilisateurs/login", (req, res, next) => {
    Utilisateur
      .findAll({ where: { email: req.body.email }, include: [db.LocalisationUtilisateur]})
      .then((utilisateur) => {
        if (utilisateur.length < 1) {
          return res.status(404).json({
            message: "email non trouvé, cet employé n existe pas",
          });
        }
        bcrypt.compare(req.body.pwd, utilisateur[0].pwd, (err, result) => {
          if (err) {
            return res.status(401).json({
              message: "authentification échouée",
            });
          }
          if (result) {
            const token = jwt.sign(
              {
                noms : utilisateur[0].noms,
                email : utilisateur[0].email,
                pwd : utilisateur[0].pwd,
                photo : utilisateur[0].photo,
                type_paiement : utilisateur[0].type_paiement,
                numero_carte :utilisateur[0].numero_carte,
                code_secret : utilisateur[0].code_secret
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h",
              }
            );
  
            return res.status(200).json({
              message: "authentification reussie",
              token: token,
            });
          }
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: err,
       });
    });
});
  
module.exports = router;