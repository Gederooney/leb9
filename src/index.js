import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import Landing from "./components/Landing";
import Delivery from "./components/Delivery";
import Meeting from "./components/Meeting";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Fragment>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/delivery" component={Delivery} />
					<Route exact path="/meeting" component={Meeting} />
				</Switch>
			</Fragment>
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
