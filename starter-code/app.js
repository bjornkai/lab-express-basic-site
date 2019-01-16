const express = require('express');

const app = express();

//    '/' means localhost:3000 
//     ^ 
//     |
//    callback function as a 2nd argument
app.get('/', (request, response, next) => {
  // console.log("Something here will be displayed in the browser.")
  response.send('<p>Welcome to a Jim Morrison fan page!!!<p>')
});

app.get('/jmorrison', (reg, res, next) => {
  res.send('<img src="/images/jmorrison.jpg">')
})