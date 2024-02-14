const express = require('express');
const app = express();
const port = 3000;
// Rate-limiting middleware
function rateLimitMiddleware(req, res, next) {
    const requestLimit = 5; // Max number of requests
    const windowMs = 60 * 1000; // Time window in milliseconds (e.g., 1 minute)
    if (!global.requests) {
        global.requests = {};
    }
    const currentTime = Date.now();
    const ip = req.ip;
    if (!global.requests[ip]) {
        global.requests[ip] = [];
    }
    global.requests[ip].push(currentTime);
    global.requests[ip] = global.requests[ip].filter(timestamp => currentTime - timestamp < windowMs);
    if (global.requests[ip].length > requestLimit) {
        res.status(429).send('Too Many Requests');
    } else {
        next();
    }
}
// Applying the rate-limiting middleware globally
app.use(rateLimitMiddleware);
// Test route
app.get('/', (req, res) => {
    res.send('Completed Day 12 Challenge!');
});
app.get('/test', (req, res) => {
    res.send('Successfully Completed Day 12 Challenge by Scalar');
});
// Starting the server
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
