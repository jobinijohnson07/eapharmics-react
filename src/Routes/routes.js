import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../components/Login/login'
import Dashboard from '../components/Dashboard/dashboard';

// class Routes extends Component {
//    state = {};
//    render() {
// 	return (
// 	  <Router>
// 	    <Switch>
// 		  <Route path="/" component={Login} exact />
//           <Route path="/home" component={Home} />
// 		</Switch>
// 	   </Router>
// 	);
//    }
// }
const Routes =  () => (
		<Router>
			<Switch>
				<Route path="/" component={Login} exact />
				<Route path="/dashboard" component={Dashboard} />
			</Switch>
	   </Router>
)
export default Routes;


