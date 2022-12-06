import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import * as sessionActions from "./store/session2";
import Navigation from "./components2/Navigation";
import SpotsIndex from './components2/SpotsIndex'
import OneSpotIndex from './components2/OneSpotIndex'
import CurrentIndex from "./components2/CurrentIndex";
import './index.css';


//took out my 404 page made header and most of any excess
//No routes working

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    // useEffect(() => {
    //   dispatch(sessionActions.getAllSpots())
    // }, []);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => dispatch(setIsLoaded(true)))
        //    .then( dispatch(getAllSpots()))
    }, [dispatch]);
    ///trying top 
    return (
        <div id='outtermost' style={{ width: '100vw', height: '200vh' }}>
            <div id='navi' style={{ width: '100vw', position: 'sticky', top: '0px' }}>
                <Navigation isLoaded={isLoaded} style={{ position: 'sticky' }} />
            </div>
            <div id='outter' style={{
                width: '100vw', height: '200vh'
            }}>
                {/* {isLoaded && (  */}
                <Switch>
                    <Route exact path='/'>
                        <SpotsIndex />
                    </Route>
                    <Route exact path='/current'>
                        <CurrentIndex />
                    </Route>
                    <Route exact path='/:id'>
                        <OneSpotIndex />
                    </Route>
                    {/*  
                        <Route>
                        <h1 style={{ padding: '2em' }}>Sorry! Out Of Luck!</h1>
                    </Route> */}
                </Switch>
            </div>
        </div>
    );
}
export default App;