const mongoose = require('mongoose');

/**
 * Establishes a connection to MongoDB using Mongoose
 */
function connectToMongoDB() {
    
    const mongoDBUri = 'mongodb://sr766368:@ac-xgnudp4-shard-00-00.zfhul2y.mongodb.net:27017,ac-xgnudp4-shard-00-01.zfhul2y.mongodb.net:27017,ac-xgnudp4-shard-00-02.zfhul2y.mongodb.net:27017/?ssl=true&replicaSet=atlas-yyfsln-shard-0&authSource=admin&retryWrites=true&w=majority';

    mongoose.connect(mongoDBUri, { useNewUrlParser: true, useUnifiedTopology: true });

    const db = mongoose.connection;

    // Handling connection errors
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    // Logging a success message upon successful connection
    db.once('open', function() {
        console.log('Connected to MongoDB successfully!');
    });
}

// Example of usage
connectToMongoDB();
