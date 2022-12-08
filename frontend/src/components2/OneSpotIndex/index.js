

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOneSpot } from '../../store/spots2';
import { getAllReviews } from '../../store/reviews2';
// import CreateReviewForm from '../CreateReviewModal';
import './OneSpotIndex.css'
import star from '../../assets/star.png';
import quest from '../../assets/quest.jpg';
import CreateReviewFormModal from '../CreateReviewModal';
import DeleteReviewFormModal from '../DeleteReviewModal';
// import background from '../../assets/background.png'
// import background2 from '../../assets/background2.png'
// import reaviewshead from '../../assets/reaviewshead.png'

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
  age = (year * 364) + (month * 30) + day

  return age;
}


const OneSpotIndex = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  let user = useSelector(state => state.session.user)
  let theSpot = useSelector(state => state.spots.onespot)
  let thereviews = useSelector(state => state.reviews.allreviews)




  let buttonVis = true
  let spotimgs
  let reviewsCont
  let previewImage
  let onespotImages
  let ratingsneak = true
  // if (theSpot?.id === undefined || thereviews === undefined || id === undefined) {
  //   onespotImages = (<div> hey</div>)
  // } else if (theSpot && theSpot?.id !== +id) {
  //   theSpot = null
  // }
  // theSpot = theSpot.id
  if (Object?.values(theSpot).length ) theSpot = theSpot[id]
  if (theSpot && thereviews && id > 0) {
    previewImage = theSpot.SpotImages?.find((x) => x.preview === true).url
    spotimgs = theSpot.SpotImages?.filter((x) => x.preview !== true)
    // console.log(spotimgs)
    while (spotimgs.length < 4) spotimgs.push({ url: quest })
    let [a, b, c, d] = spotimgs
    // console.log(previewImage)
    if (!a?.url) a = { url: quest }
    if (!b?.url) b = { url: quest }
    if (!c?.url) c = { url: quest }
    if (!d?.url) d = { url: quest }
    onespotImages = (
      <div id='onespotpics'>

        <div id='previewcont'>
          <img id='onespotpreview' src={`${previewImage}`} key={a} />
        </div>

        <div id='smallcont'>

          <div id='smallcont1'>
            <div className='spotImage' id='spotimg1'>
              <img src={`${a.url}`} className='gridpics' key={a} />
            </div>
            <div className='spotImage' id='spotimg2'>
              <img src={`${b.url}`} className='gridpics' key={a} />
            </div>
          </div>
          <div id='smallcont2'>
            <div className='spotImage' id='spotimg3'>
              <img src={`${c.url}`} className='gridpics' key={a} />
            </div>
            <div className='spotImage' id='spotimg4'>
              <img src={`${d.url}`} className='gridpics' key={a} />
            </div>
          </div>

        </div>

      </div >

    )
    thereviews = Object.values(thereviews)
    if (!thereviews.length) {
      ratingsneak = false
      reviewsCont = (
        <div id='firsttimereview' key={theSpot.description}>
          <h2> Be the first to review!</h2>
        </div>
      )
    }
    else {
      if (thereviews.length) {
        for (let x of thereviews) {
          // console.log(x)
          if (x.userId === user?.id) buttonVis = false
        }
      }
      if (!user?.id) buttonVis = false
      reviewsCont =
        Object.values(thereviews)?.map(
          ({ id, stars, review, userId, createdAt, User, spotId }) => (
            <div className='onereview single one' key={id + spotId + review}>

              <div className='profilepicture reviewheader'>
                <div className='profilepic reviewpic'>
                  pic
                </div>
                <div className='profilename profileage'>
                  <div className='reviewname'>
                    {User?.firstName}
                  </div>
                  <div className='reviewage'>
                    posted {new Date(createdAt).toDateString()}
                  </div>
                </div>
                {userId === user?.id && <DeleteReviewFormModal id={id} spotId={spotId} key={id + review} />}
              </div>
              <div className='bottomhalf reviewbottom'>
                <div className='reviewscore starscore'>
                  {stars}/5
                </div>
                <div className='reviewreview onereview'>
                  {review}
                </div>
              </div>

            </div>
          )
        )
    }

  } else theSpot = null




  useEffect(() => {
    // if (!theSpot) {
    dispatch(getOneSpot(id))
    dispatch(getAllReviews(id))
    // }
  }, [id])




  return theSpot && +id === theSpot?.id && thereviews && (

    <div id='onespotcont'>
      <div id='onespotinnercont'>


        <div className='titlearea' >

          <div id='onespotheader' className='nameandbutt namez'>
            {theSpot?.name}
            <div id='onespotdetails'>
              hosted by {theSpot.User.firstName}
            </div>
          </div>
          <div id='onespotsubheader'>
            <div id='onespotstar'>
              <img src={star} className='starspot' id='starrr' />
              <div id='ratingnum'>
                {theSpot.avgStarRating}
              </div>
            </div>
            <div id='onespotreviews' onClick={(e) => { e.preventDefault(); window.location.replace(`/${theSpot.id}#jumpmark`) }}>
              <div id='onespotnumber'>
                {theSpot.numReviews}
              </div>
              <div id='reviewstext'>
                reviews
              </div>
            </div >


            <div id='onespotlocation'>
              <div id='onespotcity'>
                {`${theSpot.city}, ${theSpot.state}`}
              </div>
              <div id='onespotstate'>
                {theSpot.country}
              </div>
            </div>


          </div>
        </div>



        {onespotImages}
        <div>
          <div id='belowimg'>

            <div id='belowheader'>

              <div id='hostspotinfo'>
                <div id='hostnameheader'>
                  <div id='hostnameage'>
                    <div id='hostnamemid'>
                      {`${theSpot.User.firstName} `}
                    </div>
                    has been a host here for
                    <div id='hostnamelast'>
                      {` ${getAge(theSpot.createdAt)}`}
                    </div>
                    days
                  </div>
                  <div id='hostpicture'>
                    pic
                  </div>
                </div>

                <div id='spotdescription'>
                  <div>
                    {theSpot.description}
                  </div>
                  Number of Beds: 2
                </div>
              </div>



              <div id='bookingcont'>

                Bookings
              </div>
            </div>

            <div id='jumpmark' style={{ marginBottom: '4em' }}></div>
          </div>

          <div id='reviewscont'>

            <div id='reviewsheader'>

              {ratingsneak && <div id='reviewsleft' >
                <div id='reviewsleftleft'>
                  <img src={star} id='reviewsstar' />
                  <div id='reviewsrating'>
                    {theSpot.avgStarRating}
                  </div>
                </div>

                <div id='reviewsleftright'>
                  <div id='reviewdot' className='dot'>
                    •
                  </div>
                  <div id='onespotnumber'>
                    {theSpot.numReviews}
                  </div>
                  <div id='reviewsright'>
                    reviews
                  </div>
                </div >
              </div>}

              <div id='reviewsright'>
                {ratingsneak && user?.id !== theSpot?.ownerId && buttonVis && < CreateReviewFormModal id={id} key={theSpot.id + theSpot.name} />}
              </div>
            </div>

            <div id='reviewscontbot'>
              {ratingsneak ? reviewsCont : (
                <div id='noreviews'>
                  <div id='norevhead'>
                    {reviewsCont}
                  </div>
                  <div id='hugebutton'>
                    {user?.id !== theSpot?.ownerId && user?.id && <CreateReviewFormModal id={id} key={theSpot.id + theSpot.description} />}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default OneSpotIndex