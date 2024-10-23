const mongo = require("mongoose");

async function mongoConnection() {
    mongo.connect(process.env.mongoUrl); 

    const db = mongo.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log(`Connected to database!!`));
}

module.exports = mongoConnection;