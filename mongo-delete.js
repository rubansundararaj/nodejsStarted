const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true } ,(err, client)=>{
if(err)
{
return console.log('Unable to connect to server');
}
console.log('Connected to MongoDB server');
const db = client.db('TodoApp');
db.collection('Todos').deleteMany({task:'Cook dinner'}).then((result)=> {

  console.log(result);
});

//client.close();
});
