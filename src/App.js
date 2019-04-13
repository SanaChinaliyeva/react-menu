import React, {Component, Fragment} from 'react';
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import ContactsBook from "./containers/ContactsBook/ContactsBook";
import AddContact from "./containers/AddContact/AddContact";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                    <Fragment>
                        <Header/>
                        <Switch>
                            <Route path="/" exact component={ContactsBook} />
                            <Route path="/addcontact" exact component={AddContact} />
                        </Switch>
                    </Fragment>
            </div>
        );
    }
}

export default App;
