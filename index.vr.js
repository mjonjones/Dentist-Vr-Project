import React from "react";
import { AppRegistry } from "react-vr";
import { MemoryRouter as Router, Redirect, Route, Switch } from "react-router";
import Welsh from "./Welsh";
import English from "./English";

// LOaded after client
export default class MyLiveTour extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={English} />
          <Route exact path="/Welsh" component={Welsh} />
          <Route exact path="/English" component={English} />
        </Switch>
      </Router>
    );
  }
}

AppRegistry.registerComponent("MyLiveTour", () => MyLiveTour);
