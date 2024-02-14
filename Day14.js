const express = require('express');
const cachingMiddleware = require('./cachingMiddleware.js');
const app = express();
const port = 3000;
// Cache storage
const cache = {};

// Use the caching middleware globally or on specific routes
app.use(cachingMiddleware(10000)); // Setting cache expiration to 10000ms (10 seconds)
// Example route
app.get('/data', (req, res) => {
    // Simulate database read or heavy computation
    setTimeout(() => {
        res.send(`Data fetched at ${new Date()}`);
    }, 1500);
});
app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});
