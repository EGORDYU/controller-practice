const express = require('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.render('leaveit/movies', {movies: ['Siegfried', 'Any movie he recently showed']})
  });

  router.get('/products', (req, res) => {
    res.render('leaveit/products', {products: ['Cocaine', 'Blood Diamonds']})
  });


module.exports = router;