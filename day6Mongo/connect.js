
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function test() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}


async function add() {
    try {
        await client.connect();
        const db = client.db("testDB"); // creates if not exists
        const users = db.collection("users");

        const result = await users.insertMany([
            { name: "Alice", age: 30, email: "alice@example.com" },
            { name: "Bob", age: 25, email: "bob@example.com" }
        ]);

        console.log(`${result.insertedCount} documents inserted.`);
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

async function read() {
    try {
        await client.connect();
        const collection = client.db("testDB").collection("users");

        const users = await collection.find().toArray();
        console.log("All users:", users);
    } finally {
        await client.close();
    }
}


async function update() {
    try {
        await client.connect();
        const collection = client.db("testDB").collection("users");

        const result = await collection.updateOne(
            { name: "Alice" }, // filter
            { $set: { age: 31 } } // update
        );

        console.log(`${result.modifiedCount} document(s) updated`);
    } finally {
        await client.close();
    }
}

async function remove() {
    try {
        await client.connect();
        const collection = client.db("testDB").collection("users");

        const result = await collection.deleteOne({ name: "Bob" });
        console.log(`${result.deletedCount} document(s) deleted`);
        console.log(`${result.acknowledged} document(s) deleted`);
    } finally {
        await client.close();
    }
}


read().catch(console.dir);
