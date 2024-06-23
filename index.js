// import express
const express = require('express');

// create an express app
const app = express();

// use the express-static middleware
app.use(express.static('static'));

/*app.get('/ep-pusher-auth-user-id', function(req, res) {
  res.send('12');
});
app.get('/hello', function (req, res) {
  res.send('Hello World');
});*/

// start the server listening for requests
app.listen(3000, () => console.log('Server is running...')); 



