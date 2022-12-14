

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Calendar from 'react-calendar';
import { getOneSpot } from '../../store/spots2';
import { getAllReviews } from '../../store/reviews2';
import ReviewCard from '../ReviewCard';
import { deciNum, overThou, strToNum, getAge, pathURL } from '../../utilities/location';
// import CreateReviewForm from '../CreateReviewModal';
import './OneSpotIndex.css'
import './calendar.css'
import star from '../../assets/star.png';
import quest from '../../assets/quest.jpg';
import propic from '../../assets/propic.png'
import tsuper from '../../assets/traitsuper.png'
import nophone from '../../assets/traitnophone.png'
import calen from '../../assets/traitcalen.png'


import amendcamera from '../../assets/amendcamera.png';
import amendcart from '../../assets/amendcart.png';
import amendcolor from '../../assets/amendcolor.png'
import amendgift from '../../assets/amendgift.png'
import amendheadphone from '../../assets/amendheadphone.png'
import amendtemp from '../../assets/amendtemp.png'
import amendwifi from '../../assets/amendwifi.png'
import amendbell from '../../assets/amendbell.png'





import CreateReviewFormModal from '../CreateReviewModal';
import DeleteReviewForm from '../DeleteReviewModal';
import OpenModalButton from "../OpenModalButton";
import '../CreateReviewModal/CreateReviewForm.css'
// import background from '../../assets/background.png'
// import background2 from '../../assets/background2.png'
// import reaviewshead from '../../assets/reaviewshead.png'

const OneSpotIndex = () => {
  // const { closeModal } = useModal();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [value, onChange] = useState(new Date());
  let history = useHistory()
  let place = pathURL(history)
  let user = useSelector(state => state.session.user)
  let theSpot = useSelector(state => state.spots.onespot)
  let thereviews = useSelector(state => state.reviews.allreviews)



  let bookingsixnight
  let cleaningfee
  let servicefee
  let total

  let buttonVis = true
  let spotimgs
  // let reviewsCont
  let previewImage
  let onespotImages
  let ratingsneak = true


  if (theSpot !== undefined && theSpot[id]?.id === (+id) && thereviews && +id > 0) {

    theSpot = theSpot[+id]
    bookingsixnight = `${Math.floor(theSpot.price) * 6 > 1000 ?
      overThou(Math.floor(theSpot.price * 6)) :
      '$' + theSpot.price.toString()}`
    cleaningfee = `$${deciNum(theSpot.price * .35)}`
    servicefee = `$${deciNum(theSpot.price * .1)}`
    strToNum(bookingsixnight) + strToNum(cleaningfee) + strToNum(servicefee) > 1000 ?
      total = overThou(strToNum(bookingsixnight) + strToNum(cleaningfee) + strToNum(servicefee)) :
      total = strToNum(bookingsixnight) + strToNum(cleaningfee) + strToNum(servicefee)
    previewImage = theSpot.SpotImages?.find((x) => x.preview === true).url
    spotimgs = theSpot.SpotImages?.filter((x) => x.preview !== true)

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
          <img id='onespotpreview' src={`${previewImage}`} key={a} alt={`${a.url}`} />
        </div>

        <div id='smallcont'>
          <div id='smallcont1'>
            <div className='spotImage' id='spotimg1'>
              <img src={`${a.url}`} className='gridpics' key={a} alt={`${a.url}`} />
            </div>
            <div className='spotImage' id='spotimg2'>
              <img src={`${b.url}`} className='gridpics' key={a} alt={`${b.url}`} />
            </div>
          </div>
          <div id='smallcont2'>
            <div className='spotImage' id='spotimg3'>
              <img src={`${c.url}`} className='gridpics' key={a} alt={`${c.url}`} />
            </div>
            <div className='spotImage' id='spotimg4'>
              <img src={`${d.url}`} className='gridpics' key={a} alt={`${b.url}`} />
            </div>
          </div>

        </div>

      </div >

    )
    if (Object.values(thereviews).length) {
      for (let x of Object.values(thereviews)) {
        if (x.spotId !== theSpot.id) continue
        if (x.userId === user?.id) buttonVis = false
      }
      thereviews = Object.values(thereviews).filter(x => x.spotId === theSpot.id)
    }

  }
  // else theSpot = undefined




  useEffect(() => {
    dispatch(getOneSpot(id)).then(() => dispatch(getAllReviews(id)))
  }, [id, dispatch]) //took out id


  // theSpot !== undefined && +id === theSpot?.id && thereviews && 

  return theSpot?.id && thereviews && (

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
              <img src={star} className='starspot' id='starrr' alt='star img' />
              <div id='ratingnum'>
                {theSpot.avgStarRating}
              </div>
            </div>
            <div id='onespotreviews' onClick={(e) => window.location.replace(`/spot/${theSpot.id}#jumpmark`)}>
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

            <div id='belowheader' className='belowimgleft'>

              <div id='hostspotinfo'>
                <div id='hostnameheader'>
                  <div>
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
                    <div id='spotsizedesc'>
                      Ipsum Lorem Till I Get SumMorum Columns
                    </div>
                  </div>
                  <div id='hostpicture'>
                    <img src={propic} />
                  </div>
                </div>




                <div id='belowimagetext'>
                  <div id='spotfeatureslist'>

                    <div id='traitlist1'>
                      <img src={tsuper} alt='superhoss' />
                      <div id='traitscol1'>
                        <div id='traitscoltop1'>
                          {`${theSpot.User.firstName} is a super host`}                        </div>
                        <div id='traitscolbot1'>
                          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        </div>
                      </div>
                    </div>
                    <div id='traitlist2'>
                      <img src={nophone} alt='nophonehere' />
                      <div id='traitscol2'>
                        <div id='traitscoltop2'>
                          {`${theSpot.name} has no phone`}
                        </div>
                        <div id='traitscolbot2'>
                          This is actually a good thing nowadays. sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </div>
                      </div>
                    </div>



                    <div id='traitlist3'>
                      <img src={calen} alt='checkyoself' />
                      <div id='traitscol3'>
                        <div id='traitscoltop3'>
                          {`${theSpot.name} has self check-in!`}
                        </div>
                        <div id='traitscolbot3'>
                          Cause who actually wants to meet the hose nowadays? sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </div>
                      </div>
                    </div>



                    <div id='spotaircover'>
                      <img id='earthinsure'
                        src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg'
                        alt='airinsurance stuff' />
                      <div id='earthinsuredesc'>
                        Every booking includes free protection from Host crazy antics, straight up lies
                        , and other issues like not leaving the key where they said it was.
                      </div>
                    </div>

                    <div id='spotdescription'>
                      <h4>What this spot has to offer!</h4>
                      {theSpot.description} is the spot description but it is not long enough. Need more Columns for
                      doing it with goood lengthy randomized desc. For now, Cause who actually wants to meet the host nowadays? sed quia consequuntur
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </div>

                    <div id='spotamenities'>
                      <h3>What is included in your stay!</h3>

                      <div id='spotamendicons'>
                        <div id='spotamend1'>
                          <div className='leftcon'>
                            <img src={amendwifi} alt='amenditiecon' />
                            Wifi - FTL speeds
                          </div>
                          <div className='leftcon'>
                            <img src={amendheadphone} alt='amenditiecon' />
                            Headphones are provided for some reason!
                          </div>
                          <div className='leftcon'>
                            <img src={amendtemp} alt='amenditiecon' />
                            I don't like paying for heat
                          </div>
                          <div className='leftcon'>
                            <img src={amendbell} alt='amenditiecon' />
                            We will provide prompt wakeup service every morning
                          </div>

                        </div>
                        <div id='spotamend2'>
                          <div className='rightcon'>
                            <img src={amendcolor} alt='amenditiecon' />
                            Art supplies provided
                          </div>
                          <div className='rightcon'>
                            <img src={amendcart} alt='amenditiecon' />
                            Free Shopping Cart rides every visit to the store
                          </div>
                          <div className='rightcon'>
                            <img src={amendcamera} alt='amenditiecon' />
                            We Are Watching
                          </div>
                          <div className='rightcon'>
                            <img src={amendgift} alt='amenditiecon' />
                            <p>Presents are sent to you to ensure good reviews!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <>
                      <h2>{ }6 nights at { }</h2>
                      <div id='spotbookingcalendar'>
                        <div id='thismonth'>

                          <Calendar onChange={onChange} value={value} />
                        </div>
                        <div id='nextmonth'>

                          <Calendar onChange={onChange} value={value} />
                        </div>

                      </div >
                    </>


                  </div>
                </div>
              </div>
            </div>



            <div id='bookingcont'>
              <div id='navbarblock'>

              </div>
              <div id='bookingbody'>

                <div id='priceheader'>
                  <p>${Math.round(theSpot.price)} <p>night</p></p>

                  <div id='rightside'>

                    <img src={star} id='rightsidestar' alt='star img' />&nbsp;
                    {theSpot.avgStarRating}

                    &nbsp;·&nbsp;
                    <div id='rightsidereviews'
                      onClick={(e) => { e.preventDefault(); window.location.replace(`/spot/${theSpot.id}#jumpmark`) }}>
                      {`${theSpot.numReviews} reviews`}
                    </div >
                  </div>
                </div>

                <div id='bookdatescont'>
                  <div id='bookdatestop'>
                    <div id='bookdatestopleft'>
                    </div>
                    <div id='bookdatestopright'>
                    </div>
                  </div>
                  <div id='bookdatesbottom'>
                  </div>
                </div>

                <button id='bookingsubmitbutton' type="submit">Reserve</button>
                <div id='warningcharge'>
                  We "won't" charge you yet!
                </div>
                <div className='bookingcalc'>
                  <p>{`$${Math.floor(theSpot.price)} x 6 nights`}</p>
                  <p>{bookingsixnight}</p>
                </div>
                <div className='bookingcalc'>
                  <p>Cleaning Fee:</p>
                  <p>{cleaningfee}</p>
                </div>
                <div className='bookingcalc'>
                  <p>Service Fee:</p>
                  <p>{servicefee}</p>
                </div>
                <div className='bookingcalc' id='bookingcalctotal'>
                  <p>Total before taxes</p>
                  <p>
                    {total}
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div id='jumpmark' style={{ marginBottom: '4em' }}></div>

          <div id='reviewscont'>

            <div id='reviewsheader'>
              {ratingsneak && <div id='reviewsleft' >
                <div id='reviewsleftleft'>
                  <img src={star} id='reviewsstar' alt='small star img' />
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
                {user?.id !== theSpot?.ownerId && buttonVis &&
                  <OpenModalButton
                    id='createreviewbutt'
                    buttonText="Create a Review!"
                    modalComponent={<CreateReviewFormModal id={id} key={theSpot.id + theSpot.name} />}
                  />
                }
              </div>
            </div>

            <div id='reviewscontbot'>
              {Object.values(thereviews).map(rev => <ReviewCard review={rev} user={user} place={place} id={id} />)}
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default OneSpotIndex