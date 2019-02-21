import React, {Component} from 'react';
import Login from './components/Login';
import './App.css';
import {AppBarPage} from './components/AppBar';
import TaskPlanner from "./components/TaskPlanner";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

    render() {

        const loginView = () => (
            <div>
                <AppBarPage/>
                <Login/>
            </div>
        );

        const taskPlannerView = () => (
            <div>
                <TaskPlanner/>
            </div>
        );

        const routesLogged = [
            {
                path: "/tasks",
                component: taskPlannerView
            }
        ];

        const routesNoLogged = [
            {
                path: "/",
                component: loginView
            }
        ];

        const pathsLogged = routesLogged.map((x) => {
            return (
                <Route
                    path={x.path}
                    component={x.component}
                    key={x}
                />
            );
        });

        const pathsNoLogged = routesNoLogged.map((x) => {
            return (
                <Route
                    path={x.path}
                    component={x.component}
                    key={x}
                />
            );
        });

        const isLogged = localStorage.getItem('isLoggedIn');

        console.log(isLogged);

        return (
            <Router>
                <div className="App">
                    {isLogged === "true" ? pathsLogged : pathsNoLogged}
                </div>
            </Router>
        );
    }
}

export default App;
