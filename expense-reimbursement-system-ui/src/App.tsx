import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginComponent } from "./components/login-component/LoginComponent";
import NavBarComponent from "./components/navbar-component/NavBarComponent";
import { HomeComponent } from "./components/home-component/HomeComponent";
import { ProfileComponent } from "./components/profile-component/ProfileComponent";
import { ManageComponent } from "./components/manage-component/ManageComponent";
import { ReimbursementsComponent } from "./components/reimbursements-component/ReimbursementsComponent";
import { User } from "./models/User";
import { Role } from "./models/Role";

function App() {
  const [currentUser, setCurrentUser] = useState(
    new User(0, "", "", "", "", new Role(0, ""))
  );

  return (
    <div className="App">
      <Router>
        {/* <NavBarComponent /> */}
        <Switch>
          {/* Login Component */}
          {/* <Route path="/login" component={LoginComponent} /> */}
          <Route
            path="/login"
            render={() => <LoginComponent updateUser={setCurrentUser} />}
          />
          {/* Profile Component */}
          {/* <Route path="/profile" component={ProfileComponent} /> */}
          <Route
            path="/profile"
            render={() => <ProfileComponent currentUser={currentUser} />}
          />
          {/* Manage Component */}
          <Route path="/manage" component={ManageComponent} />
          {/* Reimbursement Component */}
          <Route path="/reimbursements" component={ReimbursementsComponent} />
          {/* Home Page Component */}
          <Route path="/" component={HomeComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
