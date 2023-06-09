const { MongoClient} = require('mongodb')

let db;

async function connect() {
    if(db) return db;

}