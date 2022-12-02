// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import * as sessionActions from "../store/session";
// import ProfileButton from './Navigation/ProfileButton';
// import UserButton from './Navigation/UserButton';
// import logo from '../assets/logo.jpg';
// import quest from '../assets/quest.jpg';
// import './EditSpotFormModal/EditSpotForm.css'
// // import './Navigation/Navigation.css'

// export default function CurrentUserIndex() {
//     // const dispatch = useDispatch()
//     const userspots = useSelector(state => state.logged.myspots)
//     const user = useSelector(state => state.session.user)
//     let previewImage
//     if (userspots) {
//         for (let spa of userspots) {
//             if (spa.previewImage === 'No preview') spa.previewImage = quest
//         }
//     }

//     return (
//         <div><nav>
//             <div className='topbar'>
//                 <NavLink exact to="/" className={'homebutt'}  >
//                     <img src={logo} style={{ paddingRight: '15px' }} />
//                     earthRnR
//                 </NavLink>
//                 <div>
//                     <p>Your Spots!</p>
//                 </div>
//                 <div>
//                     <ProfileButton user={user} />
//                 </div>

//             </div>
//             <div className="mainContent">

//                 <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//                     {userspots && (userspots.map(({ previewImage, name, id }) => (
//                         <div className="photocontainer editspotphoto" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'column' }}>
//                             <img className="photo" alt="" src={previewImage} style={{ paddingBottom: '.5em' }} />
//                             <p className="namearea" style={{ margin: '0 0' }}>
//                                 {name}
//                             </p>
//                             <EditSpotFormModal props={id} />
//                         </div>
//                     )))}
//                 </div>
//             </div></nav>
//         </div>



//     );
// }


// // function currentuserSpots({ spots, user }) {


// //     let userSpots = []
// //     let previewImage = quest
// //     if (!spots) return null
// //     if (spots) {
// //         for (let spa of spots) {
// //             if (spa.previewImage === 'No preview') spa.previewImage = previewImage
// //             if (spa.ownerId === user.id) userSpots.push(spa)
// //         }
// //     }
// // }
//     // <Route path='/spots/current'>
// // </Route>
// //{/* <button onClick={resetBookData}>Reset Book Data</button> *