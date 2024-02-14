const cache = {};
/**
 * Caching middleware for Express.
 * @param {number} ttl - Time to live in milliseconds.
 */


function cachingMiddleware(ttl = 5000) { // Default cache expiration time is 5000ms (5 seconds)
    return (req, res, next) => {
        const key = req.originalUrl;
        const now = Date.now();
        if (cache[key] && now - cache[key].timestamp < ttl) {
            console.log('Returning cached response for:', key);
            res.send(cache[key].data);
        } else {
            // Overwrite res.send to cache the response data.
            const originalSend = res.send.bind(res);
            res.send = (data) => {
                cache[key] = {
                    timestamp: Date.now(),
                    data: data
                };
                originalSend(data);
            };
            next();
        }
    };
}
module.exports = cachingMiddleware; // Export the caching middleware