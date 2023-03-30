const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const PORT = 8000;

app.use(express.static('public'))


app.use('/loveit', require('./controllers/loveit'));

app.use('/leaveit', require('./controllers/leaveit'));


app.get('/', (req, res) => {
    res.render('home');
  });





app.listen(PORT, () =>{
    console.log(`The port is live at ${PORT}`)
})