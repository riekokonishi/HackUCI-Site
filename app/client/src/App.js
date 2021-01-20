import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from "react-router-dom";
import history from "./history";
import "./App.scss";
import "./globals/hack-styles.scss";

import { AppNavbar, Footer } from "./app/components/";
import {
  Application,
  Apply,
  Confirmation,
  Dashboard,
  Home,
  Schedule,
  LiveExpo,
  Login,
  ResetPassword,
  SendResetPassword,
  Sponsorship,
  NotFound,
  Verify,
  StarterPacks
} from "./app/views";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <AppNavbar />
        <div className="app-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/apply" component={Apply} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/starter-packs" component={StarterPacks} />
            <Route
              exact
              path="/starter-packs/:optionalDirections"
              component={StarterPacks}
            />
            <Route exact path="/stage" component={LiveExpo} />
            <Route exact path="/live">
              <Redirect to="/schedule" />
            </Route>
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/send-reset-password"
              component={SendResetPassword}
            />
            <Route exact path="/reset/:token" component={ResetPassword} />
            <Route exact path="/verify/:token" component={Verify} />
            <Route exact path="/sponsors" component={Sponsorship} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
