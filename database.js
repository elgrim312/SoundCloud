/**
 * Created by constantin on 25/05/2016.
 */

//Modele Mongoose des DATAS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//@todo gerer la date en insertion DB
var Data = new Schema(
    {name: String}
);

mongoose.model('data', Data);
//Connexion a la Base de Données
mongoose.connect('mongodb://localhost/data');