const { MongoClient } = require('mongodb');

const url    = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'tienda'

const Mdb = {
    find: async (filter, collection) => {
        await client.connect();
        const db = client.db(dbName);
        const col = db.collection(collection);
        const documents  = await col.find(filter).toArray()
        return documents
    }
}

module.exports = Mdb

