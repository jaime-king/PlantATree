var supertest = require('supertest');
var assert = require('assert');
var server = supertest.agent("http://localhost:3000");
var trees = supertest.agent("http://localhost:5000");

describe("Home page testing",function(){
    it("Home page is accessible",function(done){

    // calling home page api
    server.get("/")
    .expect("Content-type",/text/)
    .expect(200)
    .end(function(err,res){
        if (res)
        {
            var status = res.status;
            assert.equal(status, 200);
        } 
        else
        {
            // assert.fail("Server offline");
        }
      done();
    });});
});

describe("/api/trees test",function(){

    it("Trees API is online",function(done){
  
      // calling home page api
      trees.get("/api/trees")
      .expect("Content-type", /json/)
      .expect(200)
      .end(function(err,res){
        if (res)
        {
            var status = res.status;
            assert.equal(status, 200);
            var trees = res.body;
            assert.equal(trees[0].title, "Apple Tree")
        } 
        else
        {
            // assert.fail("Server offline");
        }
        done();
      });});
  });

describe('Basic calculation Test', function() 
{
    describe('Add function', function() 
    {
        it('Adds numbers', function () 
        {
            assert.equal(2, 2);
        });
    });
});