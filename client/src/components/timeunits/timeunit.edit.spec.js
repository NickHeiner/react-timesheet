var React = require('react/addons'),
  TestUtils = React.addons.TestUtils;

describe('Timeunit Edit Component: ', function () {

  var TimeunitEdit;

  beforeEach(function () {
    TimeunitEdit = require('./timeunit.edit');
  });

  it('should instantiate the TimeunitEdit', function () {
    expect(TimeunitEdit).to.be.defined;
  });
});
