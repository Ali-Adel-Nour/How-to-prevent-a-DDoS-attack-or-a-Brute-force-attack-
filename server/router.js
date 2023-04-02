const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
});
router.get('/api', (req, res) => {
  res.send('Only Certain number requests allowed');
});

router.post('/example', (req, res) => {
  res.send('This is an example POST route.');
});

module.exports = router;