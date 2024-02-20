const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const User = mongoose.model('User', userSchema);
/**
 * Express route to calculate the average age of all users in MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function averageAgeOfUsers(req, res) {
  User.aggregate([
    {
      $group: {
        _id: null, // Group all documents
        averageAge: { $avg: "$age" }
      }
    }
  ]).then(result => {
    if (result.length > 0) {
      res.json({ averageAge: result[0].averageAge });
    } else {
      res.json({ message: "No users found or unable to calculate average age." });
    }
  }).catch(error => {
    console.error('Error calculating average age:', error);
    res.status(500).json({ error: "Internal server error" });
  });
}
// Define the route
app.get('/average-age', averageAgeOfUsers);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
