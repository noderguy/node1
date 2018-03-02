const express = require('express');
const app = express();
const userRoutes = require('./routes/user-routes');


app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.use(userRoutes);

app.listen(3000, (req, res)=>{
  console.log('app now listening on port 3000');
})
