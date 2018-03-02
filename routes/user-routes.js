const router = require('express').Router();

router.get('/', (req, res)=>{
  res.render('index');
});

router.post('/signup', (req, res)=>{
  // user model
})

module.exports = router;
