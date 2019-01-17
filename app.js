const express = require('express');

const app = express();

app.get('/', (request, response, next) => {
  // console.log("Something here will be displayed in the browser.")
  response.send('<p>Welcome to a Jim Morrison fan page!!!<p>')
});

// app.get('/jmorrison', (reg, res, next) => {
//   res.send('<img src="/images/jmorrison.jpg">')
// })

app.get('/homepage', (req, res, next) => {
  res.sendFile(__dirname + '/views/homepage.html');
});


app.get('/about', (req, res, next) =>{
  res.sendFile(__dirname + '/views/about.html');
});


app.get('/gallery', (req, res, next) =>{
  res.sendFile(__dirname + '/views/gallery.html');
});




app.listen(3000, () => {
  console.log("My first express app running on port 3000")
});