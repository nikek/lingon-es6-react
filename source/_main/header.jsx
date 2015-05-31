'use strict';

var Link = ReactRouter.Link;

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      routes: routesConfig
    };
  }

  generateLinks() {
    return this.state.routes.map(
      function(route, i) {
        if(!i) return;
        return <li key={i}><Link to={route.name}>{route.title}</Link></li>
      }
    )
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to={this.state.routes[0].name} className="navbar-brand">ES6 React Lingon</Link>
          </div>

          <ul className="nav navbar-nav">
            { this.generateLinks() }
          </ul>
        </div>
      </nav>
    );
  }
}


