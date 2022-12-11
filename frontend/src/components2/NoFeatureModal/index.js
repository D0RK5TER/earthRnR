
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// import { useModal } from '../../context/Modal';
// import gitcon from '../../assets/gitcon.png';
// import linkcon from '../../assets/linkcon.png';

// export default NoFeatureModal;

// function NoFeatureModal({ idx }) {
//     const {closeModal} = useModal()

//     return (

//         <div id='myinfocont'>
//             <div id="myinfoheader">
//                 <div id='loginexitbutt' onClick={() => closeModal()}>
//                     <div>x</div>
//                 </div>
//                 <h3>Welcome to EarthRnR!</h3>
//                 <h5>No Us, Just Me</h5>
//             </div>
//             <div id='myinfopage'>
//                 <div id="gitcon" onClick={() => window.location = 'https://github.com/D0RK5TER/earthRnR'}>
//                     <img src={gitcon}
//                         style={{ float: 'left' }}
//                         alt='my buttons'
//                     />
//                 </div>
//                 <div className="linkcon" onClick={() => window.location = 'https://www.linkedin.com/in/p-dexter-assaf-63a7a3252/'}>
//                     {/* <button></button> */}
//                     <img src={linkcon}
//                         alt='my buttons'
//                     />
//                 </div>
//             </div>
//         </div>

//     );
// }

// // export default SpotImageForm;