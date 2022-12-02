
import { useEffect, useState } from 'react';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
import star from '../../assets/star.png';


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
            month === 0 ? age = day > 1 ? `${day} days old` : `${day} day old` :
                curDay < birthDay ? age = `${day} days old` :
                    day > 2 ? age = `${curDay - 30 + day} days old` : age = `${day} day old`

    return age;
}


function SpotCard({ spot }) {
    const { previewImage, id, description,
        avgRating, createdAt, city, state, price } = spot

    const history = useHistory()
    return (

        <div id={`SpotCard${id}`} className='spotcard' style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            maxWidth: '20%',
            minWidth: '200px',
            minHeight: '200px',
            maxHeight: '300px',
            justifySelf: 'center',
            margin: '1em',
            overflow: 'hidden',
        }}>
            {/* <NavLink to={`/${id}`} style={{
                height: '70%', width: '100%', justifyContent: 'center',
                alignItems: 'center', justifySelf: 'center'
            }}> */}

            <div id={`SpotCardImg${id}`} className='piccont' style={{
                // display: 'flex',
                minHeight: '200px',
                minWidth: '200px',
                borderRadius: '7%',
                // flexWrap: 'wrap',
                // justifyContent: 'center',
                // boxSizing: 'border-box',
                // objectFit: 'fill',
                // margin: '1em',
                // alignItems: 'center', justifySelf: 'center',
                cursor: 'pointer',
                background: `url(${previewImage}) no-repeat `,
                backgroundSize: 'cover',
                overflow: 'hidden'


            }} onClick={() => history.push(`/${id}`)} />


            {/* <img id={`prevSpot${id}`} className='photo'
                    alt="profile-button" src={previewImage}
                    onClick={() => history.push(`/${id}`)} /> */}

            {/* </div> */}
            {/* </NavLink> */}

            <div className='spotinfocont' id={`SpotCardInfo${id}`} style={{
                display: 'flex', flexDirection: 'row'
                , flexWrap: 'wrap'
            }}>

                <div className='spotinforow' id={`SpotCardInfoRow1${id}`} style={{
                    height: '30%', display: 'flex', flexDirection: 'column', lineHeight: '1em',
                    maxWidth: '90%'
                }}>
                    <span style={{ height: '25%', fontFamily: 'Bold' }}> {city}     ,   {state}</span>
                    <text style={{ height: '25%', fontFamily: 'Li', textSizeAdjust: '10%' }}>{getAge(createdAt.toString())}</text>
                    <span style={{ height: '25%', fontFamily: 'Li' }}>{description.slice(0, 20)}...</span>
                    <span style={{ height: '25%', fontFamily: 'Li' }}>$<text style={{ fontFamily: 'Bold' }}>{price}</text> night</span>
                </div>

                <span className='spotstarrow' id={`SpotCardInfoRow2${id}`} style={{
                    display: 'flex', maxWidth: '10%'
                }}>
                    {/* <div className='spotstarimg' id={`SpotCardStar${id}`}> */}
                    <img id={`starSpot${id}`} src={star} className='starspot' style={{ maxHeight: '25%' }} />
                    <div className='spotstaravg' id={`SpotCardInfoRow2${id}`}>
                        {/* </div> */}
                        {avgRating}
                    </div>
                </span>
            </div>
        </div >

    )

}

export default SpotCard