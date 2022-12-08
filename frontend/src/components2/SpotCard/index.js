
// import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
import star from '../../assets/star.png';
import EditSpotFormModal from '../EditSpotFormModal';
import quest from '../../assets/quest.jpg';

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
            month === 1 ? age = `${day+30} days old` :
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

        <div id={`SpotCard${id}`} className='spotcard wholething' style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1em',
            marginBottom: '1vw',
            width: '20vw',
            height: 'fit-content',
        }}>
            <div id={`SpotCardImgWrapper${id}`} className='piccontwrap allimg previmgwrap'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    objectFit: 'contain',
                    width: '20vw',
                    height: 'fit-content',
                    justifyContent: 'flex-start',
                }}
            >
                <div id={`SpotCardImg${id}`} className='piccont allimg previmg' style={{
                    display: 'flex',
                    width: '20vw',
                    height: '20vw',
                    borderRadius: '7%',
                    cursor: 'pointer',
                    background: `url(${previewImage}) no-repeat `,
                    justifySelf: 'flex-start',
                    backgroundSize: 'cover',
                }} onClick={() =>  history.push(`/${id}`) || window.scrollTo(0, 0) } />
            </div>

            <div className='spotinfocont' id={`SpotCardInfo${id}`} style={{
                display: 'flex',
                flexDirection: 'row',
                // maxHeight: '30%',
                // marginRight: '3em',
                lineHeight: '1vw',
                height: '20%',
                width: '100%',
                justifyContent: 'space-between',
                marginTop: '.3em',
                fontSize: '1vw'

            }}>

                <div className='spotinforow' id={`SpotCardInfoRow1${id}`} style={{
                    display: 'flex', flexDirection: 'column',
                    lineHeight: '1.5vw',
                    height: '35%'
                }}>
                    <span id={`SpotCardspan1${id}`} style={{
                        fontFamily: 'Bold'
                    }}>
                        {city}     ,   {state}</span>
                    <p id={`SpotCardtext1${id}`} style={{ height: '80%', fontFamily: 'Li', fontSize: '.7vw' }}>{getAge(createdAt.toString())}</p>
                    <span id={`SpotCardspan2${id}`} style={{ height: '80%', fontFamily: 'Li', fontSize: '.7vw', }}>{description.slice(0, 20)}...</span>
                    <div id={`SpotCarddiv3${id}`} style={{ display: 'inline-flex',fontFamily: 'Li', marginTop: '.3em' }}>$<p style={{ fontFamily: 'Bold', lineHeight: '1.5vw', width: 'fit-content', margin:'0 .5em 0 .15em' }}>{price}</p> night</div>
                </div>
                <div className='spotstarrow' id={`SpotCardInfoRow2${id}`} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: '1.5vw',

                }}>
                    <div className='spotstaravg' id={`SpotCardInfoRow2${id}`} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        height: 'fit-content',
                        
                    }} >
                        <div id={`editspot${id}`} style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            fontFamily: 'Bold',
                            // width: '100%'
                        }}>
                            <img id={`starSpot${id}`} src={star} className='starspot' style={{
                                maxHeight: '35%'
                            }} />
                            {avgRating}
                        </div>
                        {user.id === ownerId && <EditSpotFormModal idx={id} />}
                    </div>
                </div>
            </div>
        </div >

    )

}

export default SpotCard