

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneSpot } from '../../store/spots2';
import { getAllReviews, createReview } from '../../store/reviews2';
// import CreateReviewForm from '../CreateReviewModal';
import './OneSpotIndex.css'
import star from '../../assets/star.png';
import quest from '../../assets/quest.jpg';
import CreateReviewFormModal from '../CreateReviewModal';
import DeleteReviewFormModal from '../DeleteReviewModal';
// import background from '../../assets/background.png'
// import background2 from '../../assets/background2.png'
// import reaviewshead from '../../assets/reaviewshead.png'

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var m = today.getDay() - birthDate.getDay();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  }
  return m;
}


const OneSpotIndex = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  let user = useSelector(state => state.session.user)
  let theSpot = useSelector(state => state.spots.onespot)
  let thereviews = useSelector(state => state.reviews.onespot)


  useEffect(() => {
    dispatch(getAllReviews(id))
    dispatch(getOneSpot(id)) // .then(dispatch(getOneSpot(id)))
  }, [id])


  let alreadyreviewed = []

  let buttonVis
  let spotimgs
  let reviewsCont
  let previewImage
  let sessionLinks

  if (theSpot === undefined || thereviews === undefined || id === undefined) {
    sessionLinks = (<div> hey</div>)
  } else if (!theSpot || !id > 0) {
    theSpot = null
  } else if (theSpot && theSpot?.id !== +id) {
    theSpot = null
  }
  else {
    previewImage = theSpot.SpotImages?.find((x) => x.preview === true).url
    spotimgs = theSpot.SpotImages?.filter((x) => x.preview !== true)
    let [a, b, c, d] = spotimgs
    sessionLinks = (
      <>
        <div className='picbox' style={{
          display: 'inline-flex', flexWrap: 'wrap',
          marginLeft: '3em', marginRight: '3em'
        }}>

          <div className='picbox spotImageBig' style={{
            objectFit: 'fill', 
            flexDirection: 'row',
            maxHeight: '550px', marginRight: '2em',
            display: 'inline-flex', width: '100%', 
            justifyContent: 'center',
            minWidth: '50%', 
          }} >

            <img src={previewImage} className='spotpreview' style={{  

            }} />

            <div className='sampleimg' style={{
              maxHeight: '550px',
            }}>

              <div style={{
                maxHeight: '550px',
                flexWrap: 'wrap', boxSizing: 'border-box',
                marginTop: '2em', flexDirection: 'row', display: 'flex',
                justifyContent: 'space-around'

              }}>
                <img src={a?.url || quest} className='spotImage'
                  style={{
                    'object-fit': 'contain',
                    // border: '3px',
                    maxHeight: '40%', maxWidth: '70%'
                  }} />

                <img src={b?.url || quest} className='spotImage'
                  style={{
                    'object-fit': 'contain', borderRadius: '20px',
                    maxHeight: '40%', maxWidth: '70%',


                  }} />

                <img src={c?.url || quest} className='spotImage'
                  style={{
                    'object-fit': 'contain', borderRadius: '20px',
                    maxHeight: '40%', maxWidth: '70%',
                    marginLeft: ''


                  }} />

                <img src={d?.url || quest} className='spotImage'
                  style={{
                    'object-fit': 'contain', borderRadius: '20px',
                    maxHeight: '40%', maxWidth: '70%',
                    'border-radius': '50%',

                  }} />

              </div>

            </div>
          </div>
        </div >
      </>
    )
    let alreadyreviewed = []


    // console.log(thereviews)
    if (user?.id > -1) {
      for (let x in thereviews) {
        alreadyreviewed.push(x.userId)
      }
      buttonVis = alreadyreviewed.length
      // console.log(buttonVis)
    }
    else buttonVis = false

    if (user && theSpot) {
      if (user.id === theSpot.ownerId) buttonVis = true
    }
    if (thereviews) {
      if (!thereviews) {
        reviewsCont = (
          <>
            <div> Be the first to review!</div>
          </>
        )
      }
      // console.log(thereviews)
      else reviewsCont = (
        <div className='reviewscontainer'>
          {(Object.values(thereviews)?.map(({ id, stars, review, userId, createdAt, User, spotId }) => (
            <div style={{
              fontFamily: 'Li',
              border: '2px solid black',
              borderRadius: '2em',
              'width': '30%', marginLeft: '1em',
              marginTop: '1em', marginBottom: '2em',
              paddingLeft: '2em'
            }}>
              {stars} / 5 stars
              <div style={{
                fontFamily: 'Light',
                fontSize: '1em',
                paddingLeft: '1em',
                justifyContent: 'space-between'
              }}
              >
                {User?.firstName}
                <div>
                  {userId === user?.id && <DeleteReviewFormModal id={id} spotId={spotId} style={{
                    paddingLeft: '3em'
                  }}
                  />}
                </div>
              </div>
              <div style={{
                fontSize: '.5em',
                paddingLeft: '4em',
              }}>
                posted {getAge(createdAt)} days ago
              </div>
              <div style={{
                marginLeft: '1em', marginTop: '1em',
                fontSize: '.8em', width: '80%', paddingBottom: '.6em',
                fontFamily: 'Li'
              }}>
                {review}
              </div>

            </div>

          )))}
        </div>
      )
    }
    // console.log(buttonVis)
  }
  // took out thereviews.length &&
  return id > 0 && theSpot && (

    <div className="swap-down2 bigstyle" style={{ marginTop: '6em' }}>
      <div>
        <div>
        </div>
      </div>
      <div className='titlearea' >

        <div className='nameandbutt namez' style={{ 'display': 'inline-flex' }}>
          <span>
            {theSpot.name}
          </span>

          <div>
            {theSpot.description}
          </div>

        </div>
        <div className='descript'>
          <div className='nameandbutt22'>
            <div className='starcont' style={{
              'display': 'inline-flex',
              alignItems: 'baseline',
              justifyContent: 'space-evenly'

            }}>
              <span className='ratin' style={{

                fontFamily: 'Bold',
                fontSize: '2em'
              }} >
                <img src={star} className='starspot' id='starrr' />
                {theSpot.avgStarRating}
              </span>
              <span className='ratin' id='rat' style={{
                // "text-decoration": "none",
                fontFamily: 'Bold',
                fontSize: '2em',
                paddingLeft: '4em',
                // textDecoration: null
              }}><div style={{ paddingLeft: '.5em', fontFamily: 'Bold' }}>

                  {theSpot.numReviews}

                  reviews
                </div>
              </span >
              <span style={{ paddingLeft: '8em' }}>
              </span>
              <div className='locationinfo' style={{ fontSize: '2em', fontFamily: 'Light' }}>
                <div style={{}}>
                  {theSpot.city}
                  <div style={{}} >
                    {theSpot.state}, {theSpot.country}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div>
        <div style={{}}>
          {sessionLinks}

        </div>
      </div>
      <div className='belowimg'>
        <div className='imgformat1'>
          Hosted by {theSpot.User.firstName}
          <div style={{ marginTop: '1em' }}>
            {/* <img src={background} className='background' /> */}
          </div>
        </div>
      </div>
      <div>
        <div className='belowimg'>
          <div className='imgformat1'>
            {theSpot.description}
            {/* <div style={{ marginTop: '2em' }}>
              <img src={background2} className='background' />
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className='belowimg'>
          <div className='imgformat1'>
            <div className='starcont'>
              <div className='rating' >
                <img src={star} className='starspot' style={{ 'height': "80%", 'width': '10%' }} />
                {theSpot.avgStarRating}
                <div style={{ paddingLeft: '2em' }}>
                  {theSpot.numReviews} reviews
                </div>
              </div>
            </div>
            <div>
              {/* <img src={reaviewshead} className='background' /> */}
            </div>
            {!alreadyreviewed.includes(user?.id) && user?.id !== theSpot?.ownerId && < CreateReviewFormModal id={id} />}
          </div>
        </div>
        <div className='reviewscontainer'>
          {reviewsCont}
        </div>
      </div>
    </div>

  )
}

export default OneSpotIndex