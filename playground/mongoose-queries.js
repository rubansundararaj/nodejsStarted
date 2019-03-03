const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {ObjectID} = require('mongodb');

var id = '5c7ba86b2a2ab14e986a82b2';


if(!ObjectID.isValid(id)){
  console.log('Id is not valid');
}
else {



Todo.find({_id:id}).then(to=>{
console.log('using Find: ',to);
},
err=>{
console.log(err);
});



Todo.findById({_id:id}).then(to=>{

if(!to){
  return console.log("ID Not found");
}
console.log('using Find by ID: ',to);
},
err=>{
console.log("Error in grabing the data");

});

Todo.findOne({_id:id}).then(to=>{
  if(!to){
    return console.log("ID Not found");
  }
console.log('using Find one: ',to);
},
err=>{
console.log("Error in grabing the data");

});
}
