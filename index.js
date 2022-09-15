
const { Router } = require('express');
const { url } = require('inspector');
const express = require('express') ;
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const dbname ='univers.db';
 
let db = new sqlite3.Database(dbname,(err)=>{
    if (err) throw err;
    console.log("base de donnee initialise dans le fichier :"
    +dbname);
});
//db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(255),image VARCHAR(255)  ,created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL);');

/* db.run( "INSERT INTO planetes(nom ,image ) values (?,?)",["Mars","https://upload.wikimedia.org/wikipedia/commons/3/36/Mars_Valles_Marineris_EDIT.jpg"]);
db.run( "INSERT INTO planetes(nom, image) values (?,?)",["pluton","https://fr.wikipedia.org/wiki/Pluton_%28plan%C3%A8te_naine%29#/media/Fichier:Nh-pluto-in-true-color_2x.jpg"]);
db.run( "INSERT INTO planetes(nom,image) values(?,?)",["Terre","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Earth_by_the_EPIC_Team_on_21_April_2018.png/280px-Earth_by_the_EPIC_Team_on_21_April_2018.png"]);
db.run( "INSERT INTO planetes(nom ,image) values  (?,?)",["Jupiter","https://fr.wikipedia.org/wiki/Jupiter_%28plan%C3%A8te%29#/media/Fichier:Junopiter.jpg"]);
db.run( "INSERT INTO planetes(nom,image) values  (?,?)",["Mercure","https://fr.wikipedia.org/wiki/Mercure_%28plan%C3%A8te%29#/media/Fichier:Mercury_in_color_-_Prockter07_centered.jpg"]); 
 */

    router.get('/',function(req,res) {
        db.all("select* from planetes",(err,data)=>{
            if(err) throw  err;
            res.send('les planetes sont :\r\n' +JSON.stringify(data));
        })
    })
    module.exports = router