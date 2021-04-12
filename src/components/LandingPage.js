import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import HammingCodes from './HammingCodes';
import Simulator from "./Simulator";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/simulator" component={Simulator} />
          <Route path="/" component={HammingCodes} />
        </Switch>
    </Router>
  );
}