const express = require('express');
const { MongoClient } = require('mongodb');
const sneakersController = require('./controllers/sneakers');

const app = express();
app.use(express.json());
const port = 3000;


const uri = "mongodb+srv://heliochomel:12345@apicommerce.fyj41we.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

async function connectToMongo() {
    try {
        await client.connect();
        console.log("Connecté à MongoDB");
    } catch (e) {
        console.error(e);
    }
}

app.post('/sneakers', sneakersController.createSneacker);

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
    connectToMongo();
});

