const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser: true } ,(err, client)=>{
if(err)
{
return console.log('Unable to connect to server');
}
console.log('Connected to MongoDB server');
// const db = client.db('TodoApp');
// db.collection('Todos').findOneAndUpdate(
//   {_id :new ObjectID('5c7b47a180103f2616e512db')},
//   {
//     $set: {
//       completed:false
//     }
//   },
//   {
//     returnOrginal:false
//   }
//
//
//   ).then((result)=> {
//
//   console.log(result);
// });

const db = client.db('TodoApp');
db.collection('users').findOneAndUpdate(
  {_id :new ObjectID("5c7b4cb89aeb015c7c279c73")},
  {
    $set: {
      name:'Muruga'
    },
    $inc: {
      age:2
    }
  },
{
    returnNewDocument:true
},


  ).then((result)=> {

  console.log(result);
});

//client.close();
});
