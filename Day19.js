const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        // Simple regex for basic email validation
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
});
const User = mongoose.model('User', UserSchema);
/**
 * @param {Object} user - User object with properties username and email
 */
function addUserWithValidation(user) {
  const newUser = new User(user);
  newUser.save((err, savedUser) => {
    if (err) {
      console.error('Error adding user:', err.message);
    } else {
      console.log('User added successfully:', savedUser);
    }
  });
}
addUserWithValidation({ username: 'john_doe', email: 'invalid-email' });
// Expected server log: Error adding user: <error message including 'is not a valid email address'>
addUserWithValidation({ username: 'jane_doe', email: 'jane.doe@example.com' });
// Expected server log: User added successfully: <user details>


