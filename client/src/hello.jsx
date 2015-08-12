'use strict';

var React = require('react/addons'),
    Hello = React.createClass({
        render: function() {
            return (
                <div className="ui message">
                    <div className="ui huge header">{this.state.greeting}</div>
                    <div className="ui large header">{this.props.friend}</div>
                    <p>You are now an expert Browserifier</p>
                </div>
            )
        },
        getInitialState: function() {
            return {
                greeting: 'Howdy!'
            };
        },
        getDefaultProps: function() {
            return {
                friend: 'Partner!!'
            };
        }
    });

module.exports = Hello;
