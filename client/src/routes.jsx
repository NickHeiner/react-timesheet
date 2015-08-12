var React = require('react/addons'),
    Router = require('react-router'),
    Route = Router.Route,
    Redirect = Router.Redirect,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute,

    App = require('./components/app'),
    Projects = require('./components/projects/projects'),
    Employees = require('./components/employees/employees'),
    Timesheets = require('./components/timesheets/timesheets');

module.exports = (
    <Route name="app" path="/" handler={App}>

        <Route name="projects" path="/projects" handler={Projects} />
        <Route name="employees" path="/employees" handler={Employees} />
        <Route name="timesheets" path="/timesheets" handler={Timesheets} />

        <Redirect to="employees" />

    </Route>
);


