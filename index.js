
var express = require('express');
var app = express();
var port = (process.env.PORT || 8000);

app.use(express.static(__dirname));
app.get('/',function(req,res) {
  res.render('index')
})
app.listen(port,function(req,res) {
  console.log('app is running');
})
