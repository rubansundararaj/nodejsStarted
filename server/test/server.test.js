const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

describe('POST/todos',()=>{
it('should create a new to do',(done) =>{

  var text = "Test to do";
  request(app).post('/todos').send({text})
});

});
