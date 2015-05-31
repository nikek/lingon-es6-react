'use strict';

// Expecting:
// * window.React
// * window.ReactRouter

var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var routesConfig = [
  { type: DefaultRoute, name: 'home', handler: Home, title: 'Home' },
  { type: Route, name: 'about', handler: About, title: 'About' },
  { type: Route, name: 'users', handler: Users, title: 'Users' },
  { type: Route, name: 'list', handler: List, title: 'List' }
];

var routes = (
  <Route path="/" handler={Main}>
    { routesConfig.map(r => React.createElement(r.type, r)) }
  </Route>
);

ReactRouter.run(routes, ReactRouter.HistoryLocation,
  (Root) =>
    React.render(<Root/>, document.body)
);