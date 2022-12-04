

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
  let onespotImages

  if (theSpot === undefined || thereviews === undefined || id === undefined) {
    onespotImages = (<div> hey</div>)
  } else if (!theSpot || !id > 0) {
    theSpot = null
  } else if (theSpot && theSpot?.id !== +id) {
    theSpot = null
  }
  else {
    previewImage = theSpot.SpotImages?.find((x) => x.preview === true).url
    spotimgs = theSpot.SpotImages?.filter((x) => x.preview !== true)
    let [a, b, c, d] = spotimgs
    onespotImages = (
      
        <div id='onespotpics'>
          <div className='onespotpreview'>
            <img src={previewImage} className='spotpreview' id='onepreviewimg' />
          </div>
          <div id='onespotsmallpicscont'>
            <div className='onespotsmallpics'>

              <img src={a?.url || quest} className='spotImage' />
            </div>
            <div className='onespotsmallpics'>

              <img src={b?.url || quest} className='spotImage' />
            </div>
            <div className='onespotsmallpics'>

              <img src={c?.url || quest} className='spotImage' />
            </div>
            <div className='onespotsmallpics'>
              <img src={d?.url || quest} className='spotImage' />
            </div>

          </div>


        </div>
      
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

    <div id='onespotcont'>
      <div className='titlearea' >
        <div id='onespotheader' className='nameandbutt namez'>
          {theSpot.name}
          <div id='onespotowner'>
            Hosted by {theSpot.User.firstName}
          </div>
        </div>
        <div className='descript' id='onespotsubheader'>
          <div id='onespotstar'>
            <img src={star} className='starspot' id='starrr' />
            {theSpot.avgStarRating}
          </div>

          <div id='onespotreviews'>
            <div id='onespotnumber'>
              {theSpot.numReviews}
            </div>
            <text>
              reviews
            </text>
          </div >


          <div id='onespotlocation'>
            <div id='onespotcity'>
              {theSpot.city}
            </div>
            <div id='onespotstate'>
              {theSpot.state}, {theSpot.country}
            </div>
          </div>


        </div>
      </div>

      <div>
        <div style={{}}>
          {onespotImages}

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