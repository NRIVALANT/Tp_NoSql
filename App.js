const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const router = require('./routes/routes');

const app = express();
const port = process.env.PORT ;

app.use(express.json());
app.use("/users", router);
app.use("/cook", router);
app.use("/commentary", router);

mongoose
  .connect(uri)
  .then(() => {
    console.log('Connecté à la base de données MongoDB');
    app.listen(port, () => {
      console.log(`Serveur démarré sur http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('Erreur de connexion à MongoDB', err);
    process.exit(1);
  });