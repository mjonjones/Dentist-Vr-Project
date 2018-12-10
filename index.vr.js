import React from "react";
import { AppRegistry, View } from "react-vr";
import { MemoryRouter as Router, Redirect, Route, Switch } from "react-router";
import Welsh from "./Welsh";
import English from "./English";
import RouteEnglish from "./RouteEnglish";
import RouteWelsh from "./RouteWelsh";

// LOaded after client
export default class MyLiveTour extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={English} />
          <Route exact path="/Welsh" component={Welsh} />
        </Switch>
      </Router>
    );
  }
}

AppRegistry.registerComponent("MyLiveTour", () => MyLiveTour);
