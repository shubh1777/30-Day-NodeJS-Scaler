const express = require('express');
const app = express();
const authenticationMiddleware= require('./protected-route');

// Apply authentication middleware to specific routes or groups of routes
app.get('/protected-route', authenticationMiddleware, (req, res) => {
    // This route handler will only be reached if authentication succeeds
    res.send('Authenticated!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
