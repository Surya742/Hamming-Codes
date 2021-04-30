import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import HammingCodes from './HammingCodes';
import Simulator from "./Simulator";
import imagePlay from "./imagePlay";
import textPlay from "./textPlay";

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/textPlay" component={textPlay} />
          <Route exact path="/imagePlay" component={imagePlay} />
          <Route exact path="/simulator" component={Simulator} />
          <Route path="/" component={HammingCodes} />
        </Switch>
    </Router>
  );
}