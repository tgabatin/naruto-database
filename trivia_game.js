const readline = require('readline');
const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connect to the required database
client.connect(err => {
    if (err) throw err;
    console.log('Connected to the MongoDB database!')


});
