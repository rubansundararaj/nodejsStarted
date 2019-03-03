
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

var app = express();
app.use(bodyParser.json());
app.listen(3000,() => {
console.log('Started on port 3000');

});

app.post('/todos',(req, res) =>{
var todo = new Todo({
  text:req.body.text
});
todo.save().then(doc=>{
res.send(doc);
},
err=>
{
res.status(400).send(err);
})
//console.log(req.body);

});
app.get('/todos',(req, res) =>{

Todo.find().then(to =>{
  res.send({'todo':to});
}, e=>{
  res.status(400).send(e);
});

});

app.get('/todos/:id',(req, res) =>{

var tid = req.params.id;


if(!ObjectID.isValid(tid)){
  console.log('Id is not valid');
  return res.status(400).send();
}
else {




Todo.findById({_id:tid}).then(to=>{

if(!to){
   console.log("ID Not found");
    return res.status(400).send();
}
console.log('using Find by ID: ',to);
res.send(to);
res.end();
},
err=>{
console.log("Error in grabing the data");
  return res.status(400).send();

});


}




});
module.exports = {app};
