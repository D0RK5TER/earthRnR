
// import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
import star from '../../assets/star.png';
import EditSpotFormModal from '../EditSpotFormModal';
import quest from '../../assets/quest.jpg';
import OpenModalButton from "../OpenModalButton";

function getAge(birth) {
    let age = ''
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    const curMonth = curDate.getMonth();
    const curDay = curDate.getDay();

    const birthDate = new Date(birth.toString());
    const birthYear = birthDate.getFullYear();
    const birthMonth = birthDate.getMonth();
    const birthDay = birthDate.getDay();

    let year = curYear - birthYear;
    let month = curMonth - birthMonth;
    let day = curDay - birthDay;

    year > 0 ? age = `Over ${year} years old!` :
        month > 1 ? age = `Over ${month} months old!` :
            month === 1 ? age = `${day + 30} days old` :
                day > 1 ? age = `${day} days old` : age = `${day} day old`

    return age;
}


function SpotCard({ spot, user }) {
    const { previewImage, id, description,
        avgRating, createdAt, city, state,
        ownerId, price } = spot
    // console.log(user)
    const history = useHistory()

    // console.log()

    if (!spot) return null;
    if (spot.previewImage === 'No preview') spot.previewImage = quest

    // if (spa.previewImage === 'No preview') spa.previewImage = quest    
    // else {
    //     for (let spa in spots) {
    //         if (spa.previewImage === 'No preview') spa.previewImage = quest
    //     }
    // }


    return (

        <div id={`SpotCard${id}`} className='spotcard wholething'>
            <div id={`SpotCardImgWrapper${id}`}
                onClick={() => history.push(`/${id}`) || window.scrollTo(0, 0)}
                className='piccontwrap allimg previmgwrap'>

                <img key={`SpotCardImg${id}`}
                    className='imgprev allimg previmg'
                    src={`${previewImage}`}
                    alt='previewimageforcard'
                />

            </div>

            <div className='spotinfocont' >

                <div className='spotinfoleft' >
                    <span id={`SpotCardp1${id}`} >
                        {city}     ,   {state}
                    </span>
                    <p className='smallerinfotext'>
                        {getAge(createdAt.toString())}
                    </p>
                    <p className='smallerinfotext'>
                        {description.slice(0, 25)}...
                    </p>
                    <div className='priceper pricenight' >
                        ${price}<p>night</p>
                    </div>
                </div>



                <div className='spotinforight' id={`SpotCardInfoRow2${id}`}>

                    <div className='inforightstar'>
                        <img id={`starSpot${id}`} src={star}
                            className='infostarimage' alt='star for card' />
                        {avgRating !== 0 ? avgRating : '0.00'}
                    </div>
                    <div className='editbuttspotcard'>
                        {user.id === ownerId &&
                        
                            <OpenModalButton
                                id='editspotbut'
                                buttonText="Edit"
                                modalComponent={<EditSpotFormModal idx={id} />}
                            />
                        }
                    </div>
                </div>

            </div>
        </div >

    )

}

export default SpotCard