var _ = require('lodash');
var proxyquire = require('proxyquireify')(require);
var mockComponent = require('../../mock');

describe('Navbar Component: ', function () {

    var Navbar,
        element,
        proxies,
        React,
        TestUtils;
    beforeEach(function () {
        React = require('react/addons');
        TestUtils = React.addons.TestUtils;
    });

    beforeEach(function () {
        proxies = {
            'react-router': {
                RouteHandler: mockComponent('RouteHandler'),
                Link: mockComponent('Link'),
                State: {
                    getRoutes: sinon.stub().returns([{name: 'projects'}])
                }
            },
            '@noCallThru': true
        };

        Navbar = proxyquire('./navbar', proxies);
        element = TestUtils.renderIntoDocument(<Navbar />);
    });

    it('should instantiate the navbar', function() {
        expect(TestUtils.isCompositeComponent(element)).to.equal(true);
    });

    it('should make the projects tab active', function() {
        var activeLink = TestUtils.findRenderedDOMComponentWithClass(element, 'active');
        expect(activeLink.getDOMNode().innerText).to.equal('Projects');
    });

});
