const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/login', { title: 'login' });
});

module.exports = router;
 