const express = require('express');
const path = require('path');
 

// function staticFileServer(req, res){
    const port = 3000; // You can use any port that is free on your system
    const app = express();
// Serve static files from the "public" directory
app.use(express.static('public'));


app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
    
});
// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});

// app(req, res);
// }
// module.exports = staticFileServer;
