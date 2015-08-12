'use strict';

var React = require('react/addons'),
    _ = require('lodash'),
    Hello = require('./hello'),
    HelloList = React.createClass({
        render: function() {
            var helloNodes = _.map(this.props.friends, function(friend) {
                return <Hello friend={friend} transform={this.props.transform} />
            }, this);
            return (<div>{helloNodes}</div>);
        },
        getDefaultProps: function() {
            return {
                friends: [],
                transform: _.identity
            };
        }
    }),

    friendList = ['bobby b', 'gregor mccoy'];

React.render(<HelloList friends={friendList} transform={_.snakeCase} />, document.getElementById('app'));
