import * as express from "express";

var app = express();
var value = 0;

app.use(express.static('public'));

app.get('/api/test', function(req, res){
  res.send({value: value += 2});
  console.log("a");
});


app.listen(3000, function (){
  console.log('Example app listening on port 3000!');
})
