const { url } = require('inspector');

const sqlite3 = require('sqlite3').verbose();
const dbname ='univers.db';
 
let db = new sqlite3.Database(dbname,(err)=>{
    if (err) throw err;
    console.log("base de donnee initialise dans le fichier :"
    +dbname);
});
db.run('CREATE TABLE IF NOT EXISTS planetes (id integer primary key autoincrement , name VARCHAR(255), image(url) VARCHAR(255),created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)')

db.run( "INSERT INTO planetes(name,image(url)) values (?,?)",["Mars ","url"]);
db.run( "INSERT INTO planetes(name,image(url)) values (?,?)",["pluton","url"]);
db.run( "INSERT INTO planetes(name,image(url)) values(?,?)",["Terre","url"]);
db.run( "INSERT INTO planetes(name,image(url)) values  (?,?)",["Jupiter","url"]);
db.run( "INSERT INTO planetes(name,image(url)) values  (?,?)",["Mercure","url"]);