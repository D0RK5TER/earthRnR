import React, { useEffect } from "react";
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
    // const [isLoaded, setIsLoaded] = useState(false);
    // let user = useSelector(state => state.session.user)
    useEffect(() => {
        // if(!user)
        dispatch(sessionActions.restoreUser())
        // .then(() => dispatch(setIsLoaded(true)))
        // setIsLoaded(true)
        // .then(() => dispatch(setIsLoaded(true)))  ///took out again
    }, [dispatch]);
    ///trying top 
    return (

        <div id='freeze'>
            <Navigation />

            <div id='outter'>


                {/* {isLoaded && ( */}
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

                    <Route>
                        <h1 style={{ padding: '2em' }}>Sorry! Out Of Luck!</h1>
                    </Route>

                </Switch>

            </div>

        </div>
    );
}
export default App;