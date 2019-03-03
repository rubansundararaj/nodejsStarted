const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true } ,(err, client)=>{
if(err)
{
return console.log('Unable to connect to server');

}
console.log('connected to database');
const db = client.db('TodoApp');
db.collection('Todos');
db.collection('Todos').insertOne({
task: 'wash the floor',
completed: false

}, (err, result)=>{
  if(err){
    return console.log('unable to insert', err);
  }
  console.log(JSON.stringify(result.ops, undefined, 2));
});

// const db = client.db('TodoApp');
//
// db.collection('users').insertOne({
// name: 'Catch the ball',
// age: 10,
// address: 'Singapore'
//
// }, (err, result)=>{
//   if(err){
//     return console.log('unable to insert', err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
// });

client.close();
});
