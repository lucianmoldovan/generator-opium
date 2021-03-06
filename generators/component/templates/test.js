'use strict';

var chai = require('chai');
var expect = chai.expect;

var <%= componentName %> = require('../../components/<%= componentFileName %>');

describe('Component <%= componentName %>', function <%= componentName %>Test() {
    it('should exist', function (done) {
        expect(<%= componentName %>).not.to.be.an('undefined');
        expect(<%= componentName %>).to.be.an('object');
        done();
    });
});