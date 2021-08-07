import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/profile" component={Profile} exact />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
