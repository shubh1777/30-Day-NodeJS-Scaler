const jwt = require('jsonwebtoken');

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
    // Check if the authorization header is present
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // If authorization header is missing or it doesn't start with 'Bearer ', return 401 Unauthorized
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Extract the token from the authorization header
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, 'your-secret-key');

        // Attach the decoded token to the request object for use in other middleware or route handlers
        req.user = decoded;

        // Call next middleware or route handler
        next();
    } catch (error) {
        // If token verification fails, return 401 Unauthorized
        return res.status(401).json({ error: 'Unauthorized' });
    }
}
