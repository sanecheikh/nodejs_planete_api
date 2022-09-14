
const { url } = require('inspector');


const sqlite3 = require('sqlite3').verbose();
const dbname ='univers.db';
 
let db = new sqlite3.Database(dbname,(err)=>{
    if (err) throw err;
    console.log("base de donnee initialise dans le fichier :"
    +dbname);
});
//db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255),image url  ,created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL);');

db.run( "INSERT INTO planetes(name) values (?)",["Mars "]);
db.run( "INSERT INTO planetes(name) values (?)",["pluton"]);
db.run( "INSERT INTO planetes(name) values(?)",["Terre"]);
db.run( "INSERT INTO planetes(name) values  (?)",["Jupiter"]);
db.run( "INSERT INTO planetes(name) values  (?)",["Mercure"]); 