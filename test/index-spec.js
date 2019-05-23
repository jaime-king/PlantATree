var assert = require('assert');
// we would use this to test a specific method in our index file, 
// but we are just testing that CI works correctly first.

//var calculator = require('../index');
describe('calculator', function() 
{
    describe('add function', function() 
    {
        it('adds numbers', function () 
        {
            //var result = calculator.add(1, 1);
            assert.equal(2, 2);
        });
    });
});