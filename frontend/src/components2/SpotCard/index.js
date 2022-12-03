
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

        <div id={`SpotCard${id}`} className='spotcard wholething' style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '.7em',
            marginBottom: '2em',
            width: '20vw',
            height: '35vh'
        }}>
            <div id={`SpotCardImgWrapper${id}`} className='piccontwrap allimg previmgwrap'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    objectFit: 'contain',
                    width: '20vw',
                    height: '20vw',
                    justifyContent: 'flex-start',
                }}
            >
                <div id={`SpotCardImg${id}`} className='piccont allimg previmg' style={{
                    display: 'flex',
                    width: '20vw',
                    height: '15vw',
                    borderRadius: '7%',
                    cursor: 'pointer',
                    background: `url(${previewImage}) no-repeat `,
                    justifySelf: 'flex-start',
                    backgroundSize: 'cover',
                }} onClick={() => history.push(`/${id}`)} />
            </div>

            <div className='spotinfocont' id={`SpotCardInfo${id}`} style={{
                display: 'flex',
                flexDirection: 'row',
                // maxHeight: '30%',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: '.3em'


            }}>

                <div className='spotinforow' id={`SpotCardInfoRow1${id}`} style={{
                    display: 'flex', flexDirection: 'column',
                    // lineHeight: '1em',
                }}>
                    <span style={{
                        fontFamily: 'Bold'
                    }}>
                        {city}     ,   {state}</span>
                    <text style={{ height: '100%', fontFamily: 'Li', textSizeAdjust: '10%' }}>{getAge(createdAt.toString())}</text>
                    <span style={{ height: '100%', fontFamily: 'Li' }}>{description.slice(0, 20)}...</span>
                    <span style={{ height: '100%', fontFamily: 'Li' }}>$<text style={{ fontFamily: 'Bold' }}>{price}</text> night</span>
                </div>

                <span className='spotstarrow' id={`SpotCardInfoRow2${id}`} style={{
                    display: 'flex',
                    maxWidth: '10%',

                }}>
                    <img id={`starSpot${id}`} src={star} className='starspot' style={{
                        maxHeight: '25%'
                    }} />
                    <div className='spotstaravg' id={`SpotCardInfoRow2${id}`}>
                        {avgRating}
                    </div>
                </span>
            </div>
        </div >

    )

}

export default SpotCard