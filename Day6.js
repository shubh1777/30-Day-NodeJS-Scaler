const express = require('express');
const app = express();
const port = 3000; // You can use any available port here

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
  // Extract the "name" query parameter
  const name = req.query.name;

  // Check if "name" is provided, default to "Guest" if not
  const greeting = name ? `Hello, ${name}!` : "Hello, Guest!";

  // Send the greeting as the response
  res.send(greeting);
}

// Define the route for "/greet"
app.get('/greet', greetHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
