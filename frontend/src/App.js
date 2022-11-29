// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Switch, Route, Redirect } from "react-router-dom";
// import * as sessionActions from "./store/session";
// import * as loggedActions from "./store/logged";
// import Navigation from "./components/Navigation";
// import SpotsIndex from './components/SpotsIndex'
// import OneSpotIndex from './components/OneSpotIndex'
// import CurrentUserIndex from "./components/CurrentUserIndex";
// import './index.css';
// import Failure from "./components/404";

// function App() {
//   const dispatch = useDispatch();
//   const [isLoaded, setIsLoaded] = useState(false);

//   // useEffect(() => {
//   //   dispatch(sessionActions.getAllSpots())
//   // }, []);
//   useEffect(() => {
//     dispatch(sessionActions.restoreUser())
//     // .then(() => dispatch(setIsLoaded(true)))

//     dispatch(loggedActions.getASpots())
//   }, [dispatch]);

//   return (
//     <>


//       <Navigation isLoaded={isLoaded} />

//       <Switch>
//         <Route exact path="/" component={SpotsIndex} />
//         <Route exact path="/spots">
//           <SpotsIndex isLoaded={isLoaded} />
//         </Route>
//         <Route exact path="/spots/:id" >
//           <OneSpotIndex isLoaded={isLoaded} />
//         </Route>

//         <Route exact path='/404ish' component={Failure} />

//         <Redirect to='/404ish' />
//       </Switch>

//     </>

//   );



// }

// export default App;
//         // <div className="mainContent">
//         //   <div>
//         //     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//         //       {spots && (spots.map(({ previewImage, name }) => (
//         //         <div className="photocontainer">
//         //           <img className="photo" alt="" src={previewImage} />
//         //           <p className="namearea">
//         //             {name}
//         //           </p>
//         //         </div>
//         //       )))}
//         //     </div>

//         //   </div>
//         // </div>