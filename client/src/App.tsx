// export default App

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import UpdateTicketStatusPage from "./pages/UpdateTicketStatus";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Redirect to="/tickets" />} />
        <Route exact path="/tickets" component={HomePage} />
        <Route
          exact
          path="/tickets/:id"
          component={UpdateTicketStatusPage}
        />
      </div>
    </Router>
  );
};

export default App;
