import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SpotsIndex from './components/SpotsIndex'
import OneSpotIndex from './components/OneSpotIndex'
import CurrentIndex from "./components/CurrentIndex";

import './index.css';
import './utilities/forminput.css'

function App() {
    const dispatch = useDispatch();
    let user = useSelector(state => state.session.user)
    useEffect(() => {
        if (!user) dispatch(sessionActions.restoreUser())
    }, [dispatch]);
    return (

        <>
            <Navigation />

            <div id='outter'>
                <Switch>
                    <Route exact path='/'>
                        <SpotsIndex />
                    </Route>
                    <Route exact path='/current'>
                        <CurrentIndex />
                    </Route>
                    <Route exact path='/spot/:id'>
                        <OneSpotIndex />
                    </Route>


                    <Route>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 style={{ paddingTop: '5vw', fontFamily: 'Bold' }}>Sorry! Out Of Luck!</h1>
                            <h3 style={{ paddingTop: '8vw' }}>Sorry, we could not find what you are looking for</h3>
                        </div>
                    </Route>
                </Switch>

            </div>

        </>
    );
}
export default App;