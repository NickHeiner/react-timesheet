'use strict';

describe('hello world', function() {

    var React,
        TestUtils,
        Hello,
        element;

    beforeEach(function() {
        React = require('react/addons');
        TestUtils = React.addons.TestUtils;
    });

    beforeEach(function() {
        Hello = require('./hello');
        element = TestUtils.renderIntoDocument(<Hello />);
    });

    it('should instantiate HelloWorld', function() {
        expect(TestUtils.isCompositeComponent(element)).to.equal(true);
    });

});
