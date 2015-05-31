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
      <nav className="navbar  navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={this.state.routes[0].name} className="navbar-brand">ES6 React Lingon</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              { this.generateLinks() }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


