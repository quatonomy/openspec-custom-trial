import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGO_URI || 'mongodb://localhost:27017');

export async function connectToMongo() {
    await client.connect();

    console.log('Connected to MongoDB');

    return client.db("ts-demo");
}