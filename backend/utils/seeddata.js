
// module.exports = (

const addressSample = ['1070 Second St', '200 3rd Ave', '401 Main Blvd', '50 Civic Ct', '808 Fith Rd', '3 Parkland Blvd', '1307 Garland St',
    '6095 Goldfish St', '777 Seventh Ct', '1910 Downtown Rd', '432 Gerber St', '111 Pavement Way'
]
const nameSample = ["Lover's Lounge", 'Ancient Area', "Devil's Den", "Great Grotto", "Makers Mark",
    "Garish Garden", "Yellow Yard", "Wishful Wonderland", "Dangerous Desert", "Lonely Lake", "Rich River",
    "Mourning Mountain", "Scary Stairs", "Debaucherous Den", "Oval Office", "Murder Mansion",
    "Deaths Door", "At the End", "Final Fracas", "Lepers Lake", "Nasty Nook",
    "Crazy Canyon", "Delightful Desert", "Enormous End", "Freaky Find", "Healing Harbor", "Ignoble Igloo",
    "Jumbo Joint", "Heaven's Heart", "Kinda Karachi", "Lovely Lound", "Neat Nook", "Overly Overt", "Pleasant Palace",
    "Quivering Quarry", "Rundown Ranch", "Steller Stockhouse", "Tidy Tidalpools", "Unseen University", "Voracious Virtue",
    "Wavey Windows", "The X", "Yellow Yard", "Zillion Zebras"
]
const priceSample = [
    50.11, 75.96, 85.76, 92.89,
    164.99, 177.55, 199.02, 200.02,
    309.18, 406.94, 534.09,
    620.99, 835.55, 840.89, 950.04, 993.93, 666.66, 721.09, 420.96, 543.12, 501.01, 999.99,
    1708.42, 1245.08, 1614.08, 1338.08, 1999.43, 1001.01, 1423.65,
    6920.40, 7400.01, 8600.99
]

const cityStateSample = [{ city: 'San Francisco', state: 'CA' }, { city: 'Los Angeles', state: 'CA' }, { city: 'Portland', state: 'OR' },
{ city: 'New York City', state: 'NY' }, { city: 'Miami', state: 'FL' }, { city: 'Austin', state: 'TX' }, { city: 'Chicago', state: 'IL' },
{ city: 'Little Rock', state: 'AR' }, { city: 'Topeka', state: 'KS' }, { city: 'Jackson', state: 'MS' }, { city: 'Salt Lake City', state: 'UT' },
{ city: 'Las Vegas', state: 'NV' }, { city: 'Boston', state: 'MA' }, { city: 'Atlanta', state: 'GA' }, { city: 'Olympia', state: 'WA' },
{ city: 'San Mateo', state: 'CA' }, { city: 'San Jose', state: 'CA' }, { city: 'San Bruno', state: 'CA' }, { city: 'San Carlos', state: 'CA' },
{ city: 'San Bernadino', state: 'CA' }, { city: 'San Juan', state: 'CA' }, { city: 'San Leandro', state: 'CA' }, { city: 'Palo Alto', state: 'CA' }
]

const descriptSample = ['is a great place with', 'is a cozy place with', 'is better than everything and includes',
    'the best in town!! Comes with', 'is a quiet restful place offering many things such as', ': amenities included are ', 'a blast from the past! It includes',
    'the place they everyone forgets to talk about, includes'
]
const descriptVsample = ['onsite laundry,', 'cleaning services,', 'strong wifi,', 'clean toilets,',
    'lots of plants,', 'cats to play wtih,', 'noisy neighbors,', 'open-bar,',
    'live music,', 'local art,', 'clean sheets,', 'crying babies,', 'no blood stains,',
    'serial-killer free,', 'foot rub,', 'hot showers,', 'cold food,', 'free parking,',
    'an old ham radio,', 'fresh stale toast,', 'twice cooked bread,', 'continetal breakfast',
    'no ghosts,', 'a totally normal childs doll,', 'a great view', 'a great view into neighbors yard,',
    'pirate treasure,', 'free handtowels,', 'fresh used toliet paper,', 'booze,', 'frisbees', '24/7 electronic music,',
    'backrub from my pet hamster,', 'giant bowl of macadameia nuts,', 'breakfast-in-thebackyard', 'a stern warning,'
]

const reviews = [
    'what a beautiful baby that lives here!5', 'i hated the way they look at me, but still would come back2',
    'I think they may have forgotten to change the sheets, and dust the shelves, or clean behind the picture frames2', ' Did you know that babies cry at night?!?1',
    'neighbors were always letting themselves inside, didnt enjoy that. I asked them to live and they said "what is home ownership anys?5', 'Appreciated the freshly cooked breakfast! Sorry about eating yours...4',
    'Why did i ever choose to come here, ugh. I knew thay I should have just stayed in bed1', 'smells like the inside of an old shoe. My old shoe, maybe it was my shoes now that I think about it3', 'dishes were left everywhere! Some were not even mine!3',
    'Loved the smell of the rain in the morning, i think they pump it in fresh, proably so they can track you with the pidgeons2', 'why wouldnt my window close3', '10/10 best time ever5',
    'OMG ikr u da bomb! Out fr5', 'Sick terrace bro. I tots would pull a gnar 360 if my ankle wasnt hurting the other night3', 'Best host I ever met!4', "that one lady wouldn't stop screaming? I asked her whats wrong and I think she might be possessed1",
    "I thought I might die when I found that dead body, but i was reborn! Have you found Jesus Christ yet?4", "no one has mentioned all the skulls...2"
]


const images = ['https://thumbs.dreamstime.com/b/interior-old-dirty-garage-interior-old-dirty-garage-full-stuff-108307302.jpg',
    "https://thumbs.dreamstime.com/b/interior-old-dirty-garage-interior-old-dirty-garage-full-stuff-108307302.jpg",
    "https://thumbs.dreamstime.com/b/interior-messy-home-room-scattered-stuff-mess-disorder-concept-view-living-134666124.jpg",
    "https://thumbs.dreamstime.com/b/modern-kitchen-cleaning-washing-up-dirty-dishes-clean-cluttered-breakfast-bar-205360665.jpg",
    "https://thumbs.dreamstime.com/b/messy-room-living-clothes-other-stuff-40962956.jpg",
    "https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?b=1&s=170667a&w=0&k=20&c=VdQrz3S2SUrRRN_IqlGYVjtgwxdR-QMK49dYvIHW5W8=",
    "https://media.istockphoto.com/id/530417618/photo/baked-salmon-garnished-with-asparagus-and-tomatoes-with-herbs.jpg?b=1&s=170667a&w=0&k=20&c=4FCfIIKB5bACQs1_IzxnVeEfBi4Q9KKcjnoJdJyOqVE=",
    "https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?b=1&s=170667a&w=0&k=20&c=XMEINFZ2B_pWYgTwFO6z90sTQXpWoyXD14mmuWUbajI=",
    "https://media.istockphoto.com/id/104704117/photo/restaurant-plates.jpg?s=612x612&w=0&k=20&c=MhFdN_qVgzoHov-kgFx0qWSW0nZht4lZV1zinC3Ea44=",
    "https://media.istockphoto.com/id/1427534719/photo/unrecognizable-friends-and-family-sharing-food-at-dinning-room.jpg?s=612x612&w=0&k=20&c=fjDIjCxYrauptYQ0zV5KNRbCDv7I3yjn7n-B69r1soo="
]


const cheap = [
    "https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6f661499-126e-4228-b9a6-4e023c2933a4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a3fd4325-e4dc-4d5d-bf49-9a48b6ba4724.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/49732403/06cb9f75_original.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/807726ca-56db-4106-b7dd-d2c9c7728944.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/251b1662-7b18-49b3-80a7-9c6e41077edb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/18eb8852-cc46-4c22-9d76-affc4966b28e.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/74308694/4717f934_original.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/25d4e80d-1508-4558-bbf0-849377fde62f.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/7cc10af4-14c9-42c6-bf22-c22c5364d954.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6b0f6999-d79b-4913-89ce-14fddf904627.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/7099edfe-fe1d-454c-a144-fa0f13bf6dac.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/09e63a49-5324-49fa-8c44-795ad0774fbb.jpg?im_w=720",
]
const cheapsmall = [
    "https://a0.muscache.com/im/pictures/bdde3943-aaea-4270-834c-191f9cac5d36.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/d7ece09a-928e-4a21-84a2-c52aae90fac9.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/f58918f8-8aec-4874-bd9f-6cfed4e9cd51.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/7e1a2aed-8769-4013-9be8-1726682bd537.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/99754403-101c-4483-bff5-505588b5c1f8.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/d6c38107-536e-4e2b-a66e-25ac203c6701.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/d83035a3-cd3e-4dc6-9a79-8ca77bd02caa.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/18a09a89-288a-47ee-9829-39a5ac81ad8f.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/084b6c0c-9a4e-4d9e-9202-09e1d1f24785.jpg?im_w=480",
]

const mid = [
    "https://a0.muscache.com/im/pictures/f906fe29-49de-4375-a485-a8148c5e0de0.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/50477634-42c5-4b7f-85ae-dc3f683e8a40.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/38ee1534-7f33-4f6f-a52a-7e1683971344.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/712a31dd-fad0-4882-ba33-783e5e8620e4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/58f0d2d7-e5d5-4235-8bd2-9af249bf7247.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6e239267-4905-4856-a250-91dcd11546e1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e5f2aa0a-e63a-40c4-b658-560d64ac3151.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/bf24bd42-f72a-4a8d-b76b-13273ca8bbb0.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a48babea-89d7-4697-b035-bdd753f58c58.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/d78aa6a4-163e-4308-82e0-8e2c10d1e7a2.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/7f58bb20-e68a-4ae9-9e5a-64949975ffc9.jpg?im_w=720",
]
const midsmall = [
    "https://a0.muscache.com/im/pictures/e1e61ce2-882c-4ef0-95d7-91b65edf90c0.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/92ea610f-b313-4baa-a326-73c8477bd3ab.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/55b9bf32-6fba-4a26-81b6-70b89d3ccf5f.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/86e8cb85-a766-41a4-b0f0-e6c3aeb177b6.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/16634524-0dfd-428c-8b17-d2e817032430.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/eedbe6a4-3ac5-47d5-bbf8-f4c373de05b0.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/16074266/cd11edec_original.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/74475782/a6f67f6e_original.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/e6035e6c-84c2-4ab5-9c76-bf7ea514c91d.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/b68de971-6b0c-482a-9f9e-c160ad64fb63.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/79f4933f-4a7f-4f46-b82b-9c1f3f08c2d3.jpg?im_w=480",
]
const big = [
    "https://a0.muscache.com/im/pictures/de8e6fd5-3966-4c90-bd03-36ebb00d97c4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/2bfa9fd4-08cc-4014-b7ec-898f80a24525.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1776527e-598d-48b1-a3a2-c6c5671b40a3.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a565783e-0503-417b-bb99-0de56a1230b9.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/5b064a4b-c0c9-48c7-b340-01ad0e29584b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0e022b3d-a7da-4662-acbf-46fda3a357e4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/318a618c-4753-452c-853d-04116f16f468.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/28b3cb18-2fd1-4148-a463-119b8694d363.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9cd82edf-144f-457b-9fcc-8428a82ea6d1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6109d4f9-c85e-4769-a280-0105cd2077ae.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9ed8a604-ec76-4e31-a865-4c63e78b54de.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/723db311-65bc-4a05-a983-70778578a551.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/95175219-fe90-4107-95d6-e4d34797d43b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c31b1e0a-7a27-4593-bc99-112a0b9c5ab1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1de63bb0-bc5d-4398-a9a9-895d12ab89b7.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e51f72a6-1428-485a-9887-736aaa117a48.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a9b047c3-0e64-4a3a-8454-f29f027b82fe.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/87486b1a-0c28-4d81-a509-1797836bd422.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/18e94a0c-ddc2-445b-aa80-6cc9ab8d766b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e4cdb27a-88ce-40b8-81d3-73be7bf35403.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/559d9a97-1a14-41b5-8121-73f1ae66a326.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/710ed78b-2707-44d3-9ce3-8c396879c541.jpg?im_w=720",
]
const bigsmall = [
    "https://a0.muscache.com/im/pictures/c0542080-1c36-414b-b5e8-12c17a50494f.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/fa047f67-6550-4429-8888-ad317513e2ba.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/a221214c-0bca-4b9a-a670-d28a9d5ceab9.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/5641c859-3074-42d5-8f08-8044d5a52bd2.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/3f319524-a690-4d4a-85e2-4437a59c9f68.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/775bbd73-ed4a-4145-ba0b-78ac0718cbe2.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/24ec86b7-b66b-4e79-b370-bab7408d0002.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/c6801c55-747b-445a-8878-6b68b2d1042d.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/286f363c-ee82-4aaa-aab6-073bc68734fc.jpg?im_w=480",
]

const dates = [
    ['01-01', '01-06'], ['02-01', '02-06'], ['03-01', '03-06'], ['04-01', '04-06'],
    ['01-22', '01-24'],
    ['05-01', '05-06'], ['07-01', '07-06'], ['08-01', '08-06'],
    ['05-22', '05-24'], ['06-11', '06-15'], ['07-13', '07-17'],
    ['09-01', '09-06'], ['10-01', '10-06'],
    ['09-22', '09-24'], ['11-13', '11-17']
]



const spotSkeleton = {
    city: null,
    state: null,
    country: 'USA',
    lat: 37.783617,
    lng: -122.411507,
    address: null,
    ownerId: null, name: null,
    description: null, price: null
}

const bookingSkeleton = {
    spotId: 0,
    userId: 0,
    startDate: '2023-',
    endDate: '2023-'
}

const spotimageSkeleton = {
    spotId: 0,
    url: '',
    preview: null
}


const reviewimageSkeleton = {
    reviewId: 0,
    url: ''
}

const reviewSkeleton = {
    spotId: 0,
    userId: 0,
    review: '',
    stars: 0
}

//  const getRandom = (max) => Math.floor(Math.random() * max);




const topWorldSmall = [
    "https://a0.muscache.com/im/pictures/effa45d0-9d5a-4d9b-a7f9-96f068fab14c.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1c1158ec-586c-487e-a2e3-74bfba76e89f.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9d08ae25-3ac5-4f15-85fd-30911418205b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c7ecaa29-a2a6-4e50-8dd5-a4719096fb4b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/941cc6e4-4178-489b-b92c-1df3af7a3464.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/30afd7b6-a13d-48f6-b057-20b83bd3dc27.jpg?im_w=720",
]

const topWorld = [
    "https://a0.muscache.com/im/pictures/8f15fa4b-486e-4d80-a62c-62497a9d5f89.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/3fc17eb7-812d-405b-b242-ab3ba9c962f9.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-696318029797058361/original/45b7a9c4-9da0-44a2-bc7f-f359bc2f2217.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-704614543441557189/original/81006167-98ae-41af-b7db-0cb92ea2f843.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-27451296/original/6bc4e7ab-62b4-424a-9c8a-2e56d2e0364b.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-749996089802009824/original/375f3bdf-59b7-49c2-a9b5-c486465a08c7.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-749996089802009824/original/e17c9704-68e8-478b-90ce-86e822ef921b.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-665192724737738897/original/b464d7b5-fa43-4631-a793-f56e43e19c2a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46142048/original/e9438c6b-da39-4d11-a28b-8fc4abc9e0e6.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/853fae3e-88e4-4cf2-a289-d20c4f3489fa.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-42436986/original/7c1d4ae8-78bb-457a-9c68-5d4c8d88792e.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/f489cebe-3ae6-41bd-a283-809bf363d63b.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/cfdf5973-9fc1-42d3-bde1-a072fdbe1825.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/7f4bc3b4-0355-404e-9c93-a3073900aa3d.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/2e59c7d2-3766-42cb-ba86-9958cbe307bc.jpg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-665192724737738897/original/335aa9f0-0d00-48f2-bf00-055b0aaf4d37.jpeg?im_w=1200",
    "https://a0.muscache.com/im/pictures/miso/Hosting-749996089802009824/original/8fefceb0-da83-461c-9441-1dc5ce1c0174.jpeg?im_w=1200",
]

const lake = [
    "https://a0.muscache.com/im/pictures/3283ba39-e834-484d-84d5-afa5f5d03f47.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/14e75ee2-90a7-4770-bf15-c9d6449fe481.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e1bf0857-7717-4bbc-9888-c241f5982fac.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/edf4a592-a585-420a-b300-063c2bd98658.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-29240198/original/74363a6b-05ad-434f-82ce-3b0614f7f775.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/95175219-fe90-4107-95d6-e4d34797d43b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c31b1e0a-7a27-4593-bc99-112a0b9c5ab1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1de63bb0-bc5d-4398-a9a9-895d12ab89b7.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e51f72a6-1428-485a-9887-736aaa117a48.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a9b047c3-0e64-4a3a-8454-f29f027b82fe.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/87486b1a-0c28-4d81-a509-1797836bd422.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/18e94a0c-ddc2-445b-aa80-6cc9ab8d766b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e4cdb27a-88ce-40b8-81d3-73be7bf35403.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/559d9a97-1a14-41b5-8121-73f1ae66a326.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/710ed78b-2707-44d3-9ce3-8c396879c541.jpg?im_w=720",
]

const lakeSmall = [
    "https://a0.muscache.com/im/pictures/afe71e1b-c582-4c8e-b886-24c61f8d2b1c.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0168de71-5a25-482b-a24a-60021203b5c8.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45380567/original/555af945-0596-4c73-a704-2ea4a8956c8d.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-45380567/original/8ae8d4a4-560d-44e8-b8d4-7de5da28f466.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/ed209f94-d014-4a33-af93-6112eb67bf77.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/efd9b4fd-bd59-43c9-ab1a-c698ed4e70a6.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-53045905/original/9bcff738-c129-401e-b514-ec8c3544d995.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/60e7c87c-ea29-4e63-9f1c-513432556e52.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/14593259/7164c171_original.jpg?im_w=720",
]

const rv = [
    "https://a0.muscache.com/im/pictures/f1cc8ace-1d69-4025-b416-a0d9b1acfeba.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/7395420/393fb803_original.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-576031903521223375/original/e6880ecf-3f63-448d-aae8-75a7b55b5df9.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/9b58c534-6223-4ecd-81e2-6b6d5b7204c4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/265aaac3-ac6c-4bc5-997b-0bdbf4bcd04a.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/f6734841-4bd2-4919-b75a-5333907a0389.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-14886949/original/a9d72542-cd1f-418d-b070-a73035f94fe4.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-50597302/original/eb1bb383-4b70-45ae-b3ce-596f83436e6f.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/25d4e80d-1508-4558-bbf0-849377fde62f.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/7cc10af4-14c9-42c6-bf22-c22c5364d954.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6b0f6999-d79b-4913-89ce-14fddf904627.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/7099edfe-fe1d-454c-a144-fa0f13bf6dac.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/09e63a49-5324-49fa-8c44-795ad0774fbb.jpg?im_w=720",
]
const rvSmall = [
    "https://a0.muscache.com/im/pictures/bdde3943-aaea-4270-834c-191f9cac5d36.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/d7ece09a-928e-4a21-84a2-c52aae90fac9.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/f58918f8-8aec-4874-bd9f-6cfed4e9cd51.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/7e1a2aed-8769-4013-9be8-1726682bd537.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/99754403-101c-4483-bff5-505588b5c1f8.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/d6c38107-536e-4e2b-a66e-25ac203c6701.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/d83035a3-cd3e-4dc6-9a79-8ca77bd02caa.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/18a09a89-288a-47ee-9829-39a5ac81ad8f.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/084b6c0c-9a4e-4d9e-9202-09e1d1f24785.jpg?im_w=480",
]

const dirt = [
    "https://a0.muscache.com/im/pictures/a47af5dd-1391-454a-8218-d879a93a6033.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c579efd0-3a7a-4132-8bbb-cf7eeadc9806.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9b731de6-b8b6-4eae-aba2-631216bf1bfc.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-28254684/original/99bd44d1-abca-4b1c-b5da-eb05eaac9193.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/11bcbeec-749c-4897-8593-1ec6f6dc04ad.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1c18c035-2e01-4b7d-b8d2-27c5ef55633d.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e4d6c3c3-6c88-4c23-a965-d6fcedb1ef22.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/251b1662-7b18-49b3-80a7-9c6e41077edb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/73beed18-c0a6-4fb1-a1f9-013bc1eeddf2.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/5360d123-8256-4b09-8612-6742852375d6.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6f661499-126e-4228-b9a6-4e023c2933a4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a3fd4325-e4dc-4d5d-bf49-9a48b6ba4724.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/49732403/06cb9f75_original.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/807726ca-56db-4106-b7dd-d2c9c7728944.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/251b1662-7b18-49b3-80a7-9c6e41077edb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/18eb8852-cc46-4c22-9d76-affc4966b28e.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/74308694/4717f934_original.jpg?im_w=720",
]

const dirtSmall = [
    "https://a0.muscache.com/im/pictures/522e3474-60c2-4118-826a-8bc310166a84.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/cfb4ccbd-704b-44f2-a8a3-fb42354c1cee.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c9187b3a-0d9d-4308-8e42-17a56511afac.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-21959683/original/00f9ca18-a368-45d3-b5dc-82bdf5163592.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-21959683/original/0af1d913-64c4-4355-bd74-fdc6575e96bf.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/802bc522-f1ee-414d-b224-d8fccf45dd87.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-48246773/original/9f729f01-3ecd-4919-a74f-07b580d8b4d2.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-48246773/original/286bb767-ea7f-4c9f-9162-4b0dee4740f0.jpeg?im_w=720",
]

const treeh = [
    "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53256465/original/a3a6d577-5c0f-4648-a458-68d7fa18ed98.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/99c9f356-dccd-433b-9f22-720b593fcf02.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-50923781/original/17f57e70-5eca-43cd-87d5-d1d0d002b9cc.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/930b2498-a62b-420b-8e5d-a2b5e4447516.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/379f84f9-d418-41ad-b1b3-e1f9d007124d.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-610511843622686196/original/253bfa1e-8c53-4dc0-a3af-0a75728c0708.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/a8ef5d47-0b5a-4189-abaf-322753e942b2.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/ec582058-831d-42b1-b9ef-d11f7e38e1bd.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/d7f2828f-3287-4d8c-ba1a-8222e0dfdbdc.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/38794512-d935-4268-837e-246d470bde04.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-24598097/original/91290830-0db6-40c0-a23b-86a904ee5239.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/44f1ff39-a2e9-4323-ad2b-54b24c9b6e60.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/85522965/de7d0eb2_original.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/d7f2828f-3287-4d8c-ba1a-8222e0dfdbdc.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0a04e59f-b0b3-4ef0-a630-cfc2975d0654.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/73198cba-b765-4719-9492-85995c4ba7b3.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/80e82bbd-8a43-44cb-86ec-e4c03bb25d7d.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1bc571e9-3251-4804-893e-f03172eab7b3.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/f906fe29-49de-4375-a485-a8148c5e0de0.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/50477634-42c5-4b7f-85ae-dc3f683e8a40.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/38ee1534-7f33-4f6f-a52a-7e1683971344.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/712a31dd-fad0-4882-ba33-783e5e8620e4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/58f0d2d7-e5d5-4235-8bd2-9af249bf7247.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6e239267-4905-4856-a250-91dcd11546e1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e5f2aa0a-e63a-40c4-b658-560d64ac3151.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/bf24bd42-f72a-4a8d-b76b-13273ca8bbb0.jpg?im_w=720",
]

const treehSmall = [
    "https://a0.muscache.com/im/pictures/e1e61ce2-882c-4ef0-95d7-91b65edf90c0.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/92ea610f-b313-4baa-a326-73c8477bd3ab.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/55b9bf32-6fba-4a26-81b6-70b89d3ccf5f.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/86e8cb85-a766-41a4-b0f0-e6c3aeb177b6.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/16634524-0dfd-428c-8b17-d2e817032430.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/eedbe6a4-3ac5-47d5-bbf8-f4c373de05b0.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/16074266/cd11edec_original.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/74475782/a6f67f6e_original.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/e6035e6c-84c2-4ab5-9c76-bf7ea514c91d.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/b68de971-6b0c-482a-9f9e-c160ad64fb63.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/79f4933f-4a7f-4f46-b82b-9c1f3f08c2d3.jpg?im_w=480",
]

const mansion = [
    "https://a0.muscache.com/im/pictures/de8e6fd5-3966-4c90-bd03-36ebb00d97c4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/2bfa9fd4-08cc-4014-b7ec-898f80a24525.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1776527e-598d-48b1-a3a2-c6c5671b40a3.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a565783e-0503-417b-bb99-0de56a1230b9.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/ebb5df30-ad26-4f8c-b67d-391b89e49fe1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/5b064a4b-c0c9-48c7-b340-01ad0e29584b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0e022b3d-a7da-4662-acbf-46fda3a357e4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/318a618c-4753-452c-853d-04116f16f468.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/28b3cb18-2fd1-4148-a463-119b8694d363.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9cd82edf-144f-457b-9fcc-8428a82ea6d1.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/6109d4f9-c85e-4769-a280-0105cd2077ae.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9ed8a604-ec76-4e31-a865-4c63e78b54de.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/723db311-65bc-4a05-a983-70778578a551.jpg?im_w=720",
]

const mansionSmall = [
    "https://a0.muscache.com/im/pictures/c0542080-1c36-414b-b5e8-12c17a50494f.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/fa047f67-6550-4429-8888-ad317513e2ba.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/a221214c-0bca-4b9a-a670-d28a9d5ceab9.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/5641c859-3074-42d5-8f08-8044d5a52bd2.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/3f319524-a690-4d4a-85e2-4437a59c9f68.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/775bbd73-ed4a-4145-ba0b-78ac0718cbe2.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/24ec86b7-b66b-4e79-b370-bab7408d0002.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/c6801c55-747b-445a-8878-6b68b2d1042d.jpg?im_w=480",
    "https://a0.muscache.com/im/pictures/286f363c-ee82-4aaa-aab6-073bc68734fc.jpg?im_w=480",
]


module.exports = {
    addressSample, nameSample, priceSample,
    cityStateSample, descriptSample, descriptVsample,
    reviews,
    images,
    cheap, cheapsmall, mid, midsmall, big, bigsmall,
    topWorld, topWorldSmall, lake, lakeSmall, rv, rvSmall,
    dirt, dirtSmall, treeh, treehSmall, mansion, mansionSmall,
    dates,
    bookingSkeleton, spotimageSkeleton, reviewSkeleton,
    reviewimageSkeleton, spotSkeleton,
}