export const brand = {
  name: 'BW Metro Properties',
  advisor: 'Brandon Wilson',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-01-400xAUTO.fit.png',
  psrLogo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/PSR-logo-footer-600xAUTO.fit.max.png',
  phone: '202-998-4593',
  phoneHref: 'tel:+12029984593',
  email: 'brandon@bwmetroproperties.com',
  address: '8315 Lee Hwy, Fairfax, VA 22031',
  licenses: 'DC: SP40002157  ·  VA: 0225262536  ·  MD: 5014155',
  instagram: 'https://www.instagram.com/brandonwilsonrealtor_dmv',
};

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: 'Buyers', href: '/buyers' },
  { label: 'Sellers', href: '/sellers' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Explore Areas', href: '/explore-areas' },
  {
    label: 'Calculators',
    href: '#process',
    children: [
      { label: 'Affordability Calculator', href: '/affordability-calculator' },
      { label: 'Home Sale Calculator', href: '/home-sale-calculator' },
      { label: 'Mortgage Calculator', href: '/mortgage-calculator' },
    ],
  },
];

export const whyPoints = [
  { icon: 'strategy', title: 'Strategic Approach', text: 'Backed by data and deep local expertise.' },
  { icon: 'communication', title: 'Clear Communication', text: 'Proactive from start to finish.' },
  { icon: 'market', title: 'DMV Market Depth', text: 'Real understanding of local neighborhoods.' },
  { icon: 'negotiation', title: 'Skilled Negotiation', text: 'Positioned to maximize your value.' },
  { icon: 'military', title: 'Military & Federal', text: 'Discipline and organization throughout.' },
];

export const stats = [
  { value: '$5.1M', label: 'Career Sales Volume' },
  { value: '9', label: 'Transactions Closed' },
  { value: '$2.7M', label: 'Last 12 Months' },
];

export const serviceCards = [
  {
    id: 'buyers',
    eyebrow: 'Buyers',
    title: 'Buy a Home',
    text: 'A clear, structured plan that puts you in control of every showing, offer and negotiation.',
    tagline: 'Showings · offers · negotiation, handled',
    cta: 'Start Home Search',
    icon: 'home',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-1568.jpg',
    href: '/buyers',
  },
  {
    id: 'sellers',
    eyebrow: 'Sellers',
    title: 'Sell Your Home',
    text: 'Positioning, marketing and negotiation designed to attract the right buyers and the best terms.',
    tagline: 'Positioning · pricing · marketing, handled',
    cta: 'Get Home Value',
    icon: 'dollar',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg',
    href: '/sellers',
  },
  {
    id: 'communities',
    eyebrow: 'Communities',
    title: 'Explore Area',
    text: 'Discover the neighborhoods, market trends and lifestyle that fit the way you want to live.',
    tagline: 'Neighborhoods · trends · lifestyle, mapped',
    cta: 'Explore Opportunities',
    icon: 'map',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide.jpeg',
    href: '/explore-areas',
  },
];

export const featuredProperties = [
  {
    id: 'p1',
    price: '$2,950,000',
    address: '40957 Waxwing Drive',
    city: 'Leesburg, VA',
    beds: 6,
    baths: 6,
    sqft: '7,082',
    tag: 'Open House',
    image: 'https://readdy.ai/api/search-image?query=Luxury%20colonial%20estate%20home%20exterior%20in%20Leesburg%20Virginia%2C%20grand%20brick%20and%20stone%20facade%2C%20symmetrical%20windows%2C%20manicured%20lawn%20with%20mature%20trees%2C%20warm%20golden%20late%20afternoon%20light%2C%20elegant%20upscale%20suburban%20setting%2C%20editorial%20real%20estate%20photography%2C%20clean%20harmonious%20composition&width=800&height=600&seq=featured-leesburg-01&orientation=landscape',
  },
  {
    id: 'p2',
    price: '$1,685,000',
    address: '5112 Westpath Court',
    city: 'Bethesda, MD',
    beds: 5,
    baths: 4,
    sqft: '3,977',
    tag: 'Open House',
    image: 'https://readdy.ai/api/search-image?query=Handsome%20traditional%20colonial%20home%20exterior%20in%20Bethesda%20Maryland%2C%20white%20siding%20with%20black%20shutters%2C%20brick%20walkway%2C%20neat%20boxwood%20hedges%2C%20soft%20morning%20light%2C%20refined%20residential%20neighborhood%2C%20editorial%20real%20estate%20photography%2C%20beautiful%20curb%20appeal&width=800&height=600&seq=featured-bethesda-01&orientation=landscape',
  },
  {
    id: 'p3',
    price: '$1,369,900',
    address: '6108 22nd Road N',
    city: 'Arlington, VA',
    beds: 4,
    baths: 2,
    sqft: '2,880',
    tag: 'New',
    image: 'https://readdy.ai/api/search-image?query=Classic%20red%20brick%20home%20exterior%20in%20Arlington%20Virginia%2C%20covered%20front%20porch%2C%20stone%20accents%2C%20tidy%20landscaped%20garden%2C%20bright%20daylight%2C%20welcoming%20upscale%20suburban%20street%2C%20editorial%20real%20estate%20photography%2C%20crisp%20and%20inviting&width=800&height=600&seq=featured-arlington-01&orientation=landscape',
  },
  {
    id: 'p4',
    price: '$1,295,000',
    address: '710 Woodside Parkway',
    city: 'Silver Spring, MD',
    beds: 4,
    baths: 3,
    sqft: '3,110',
    tag: 'Open House',
    image: 'https://readdy.ai/api/search-image?query=Charming%20craftsman%20style%20home%20exterior%20in%20Silver%20Spring%20Maryland%2C%20deep%20front%20porch%20with%20tapered%20columns%2C%20warm%20wood%20and%20stone%20details%2C%20lush%20green%20yard%2C%20soft%20daylight%2C%20editorial%20real%20estate%20photography%2C%20cozy%20and%20refined&width=800&height=600&seq=featured-silverspring-01&orientation=landscape',
  },
  {
    id: 'p5',
    price: '$1,295,000',
    address: '12904 Walkers Lane',
    city: 'Bowie, MD',
    beds: 6,
    baths: 5,
    sqft: '4,780',
    tag: 'New',
    image: 'https://readdy.ai/api/search-image?query=Spacious%20brick%20colonial%20home%20exterior%20in%20Bowie%20Maryland%2C%20two%20story%20with%20columned%20entrance%2C%20wide%20driveway%2C%20well%20kept%20green%20lawn%2C%20warm%20afternoon%20light%2C%20upscale%20suburban%20setting%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=featured-bowie-01&orientation=landscape',
  },
  {
    id: 'p6',
    price: '$1,300,000',
    address: '4412 Butterworth Place NW',
    city: 'Washington, DC',
    beds: 3,
    baths: 3,
    sqft: '1,918',
    tag: 'Open House',
    image: 'https://readdy.ai/api/search-image?query=Historic%20brick%20rowhouse%20exterior%20in%20Washington%20DC%2C%20elegant%20bay%20window%2C%20wrought%20iron%20railing%2C%20colorful%20front%20door%2C%20tidy%20sidewalk%20tree%20line%2C%20warm%20golden%20hour%20light%2C%20editorial%20real%20estate%20photography%2C%20charming%20urban%20residential&width=800&height=600&seq=featured-dc-01&orientation=landscape',
  },
];

export const communities = [
  { name: 'Washington', href: '/washington', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg' },
  { name: 'Arlington', href: '/arlington', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg' },
  { name: 'Alexandria', href: '/alexandria', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg' },
  { name: 'Falls Church', href: '/falls-church', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Falls-Chruch-VA-Area-Guide-AUTOx1150.fit.jpeg' },
  { name: 'Bethesda', href: '/bethesda', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg' },
  { name: 'Silver Spring', href: '/silver-spring', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg' },
  { name: 'Logan Circle', href: '/washington', image: 'https://readdy.ai/api/search-image?query=Historic%20brick%20row%20houses%20along%20a%20tree%20lined%20street%20in%20Logan%20Circle%20Washington%20DC%2C%20colorful%20painted%20doors%2C%20wrought%20iron%20railings%2C%20warm%20golden%20afternoon%20light%2C%20upmarket%20urban%20neighborhood%2C%20editorial%20city%20photography%2C%20harmonious%20composition&width=800&height=600&seq=community-logan-circle-01&orientation=landscape' },
  { name: 'Shaw / U Street', href: '/shaw-u-street-corridor', image: 'https://readdy.ai/api/search-image?query=Charming%20historic%20townhomes%20in%20Shaw%20Washington%20DC%2C%20brick%20facades%20with%20bright%20accent%20doors%2C%20flower%20boxes%2C%20leafy%20street%20trees%2C%20soft%20daylight%2C%20vibrant%20urban%20neighborhood%2C%20editorial%20city%20photography&width=800&height=600&seq=community-shaw-01&orientation=landscape' },
  { name: 'Adams Morgan', href: '/washington', image: 'https://readdy.ai/api/search-image?query=Colorful%20Victorian%20row%20houses%20in%20Adams%20Morgan%20Washington%20DC%2C%20painted%20brick%20facades%2C%20turrets%20and%20bay%20windows%2C%20tree%20lined%20street%2C%20warm%20late%20afternoon%20light%2C%20lively%20urban%20setting%2C%20editorial%20city%20photography&width=800&height=600&seq=community-adams-morgan-01&orientation=landscape' },
  { name: 'Gables Dupont Circle', href: '/washington', image: 'https://readdy.ai/api/search-image?query=Contemporary%20condo%20building%20exterior%20near%20Dupont%20Circle%20Washington%20DC%2C%20modern%20brick%20and%20glass%20facade%2C%20landscaped%20entrance%2C%20soft%20daylight%2C%20elegant%20urban%20street%2C%20editorial%20architectural%20photography%2C%20clean%20lines&width=800&height=600&seq=community-dupont-01&orientation=landscape' },
];

export const serviceTabs = [
  {
    id: 'buy',
    tab: 'Buy With Us',
    title: 'Buy With Us',
    text: 'Concierge-level guidance tailored to your lifestyle, goals, and timeline — with strategy, discretion, and clarity at every step.',
  },
  {
    id: 'sell',
    tab: 'Sell With Us',
    title: 'Sell With Us',
    text: 'Thoughtful pricing, elevated presentation, and hands-on representation designed to position your home at the highest level.',
  },
  {
    id: 'staging',
    tab: 'Strategic Staging',
    title: 'Strategic Staging',
    text: 'Expert preparation and visual storytelling that helps buyers connect emotionally, see value clearly, and act with confidence.',
  },
  {
    id: 'local',
    tab: 'Local Expertise',
    title: 'Local Expertise',
    text: 'Deep DMV market knowledge paired with honest advice, steady leadership, and insight built from years of experience.',
  },
];

export const lookingTo = [
  { icon: 'buy', eyebrow: 'Looking to', title: 'Buy', text: 'Start your search with a clear, structured plan.', href: '#services', image: 'https://readdy.ai/api/search-image?query=Bright%20modern%20condo%20interior%20in%20Washington%20DC%2C%20open%20living%20space%2C%20large%20windows%20with%20soft%20city%20light%2C%20neutral%20furnishings%2C%20warm%20minimal%20styling%2C%20editorial%20interior%20photography%2C%20calm%20inviting%20mood&width=800&height=600&seq=lookingto-buy-01&orientation=landscape' },
  { icon: 'sell', eyebrow: 'Looking to', title: 'Sell', text: 'Know your value and position your home to win.', href: '/sellers', image: 'https://readdy.ai/api/search-image?query=Beautifully%20presented%20townhouse%20exterior%20in%20the%20DMV%2C%20brick%20facade%20with%20white%20trim%2C%20manicured%20garden%20and%20walkway%2C%20warm%20golden%20light%2C%20desirable%20suburban%20street%2C%20editorial%20real%20estate%20photography%2C%20polished%20curb%20appeal&width=800&height=600&seq=lookingto-sell-01&orientation=landscape' },
  { icon: 'staging', eyebrow: 'Strategic', title: 'Staging', text: 'Prepare and present your home to stand out.', href: '#services', image: 'https://readdy.ai/api/search-image?query=Professionally%20staged%20living%20room%20with%20warm%20neutral%20tones%2C%20elegant%20minimal%20furniture%2C%20styled%20shelves%20and%20coffee%20table%2C%20natural%20light%20through%20large%20windows%2C%20editorial%20interior%20photography%2C%20refined%20calm%20atmosphere&width=800&height=600&seq=lookingto-staging-01&orientation=landscape' },
  { icon: 'expertise', eyebrow: 'Local', title: 'Expertise', text: 'Lean on real DMV neighborhood knowledge.', href: '#areas', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg' },
];

export const processSteps = [
  { step: '01', title: 'Personalized Consultation', text: 'We start with a conversation to understand your goals, timeline, and priorities.' },
  { step: '02', title: 'Strategic Planning', text: 'A clear plan for buying or selling, using data, market insights, and proven strategies.' },
  { step: '03', title: 'Hands-On Guidance', text: 'From property tours to offer strategy and negotiations, I handle the details so you don’t have to.' },
  { step: '04', title: 'Closing & Beyond', text: 'I stay with you through closing and provide ongoing support into your next chapter.' },
];

export const exploreAreas = [
  { id: 'a1', name: 'Alexandria', x: 24, y: 64, price: '$875K', days: '21', listings: '146', sales: '38' },
  { id: 'a2', name: 'Arlington', x: 39, y: 47, price: '$1.02M', days: '19', listings: '112', sales: '29' },
  { id: 'a3', name: 'Bethesda', x: 53, y: 27, price: '$1.34M', days: '24', listings: '98', sales: '22' },
  { id: 'a4', name: 'Falls Church', x: 27, y: 39, price: '$960K', days: '22', listings: '74', sales: '18' },
  { id: 'a5', name: 'Fort Washington', x: 61, y: 76, price: '$640K', days: '28', listings: '63', sales: '16' },
  { id: 'a6', name: 'Oxon Hill', x: 68, y: 66, price: '$520K', days: '30', listings: '58', sales: '14' },
  { id: 'a7', name: 'Silver Spring', x: 46, y: 18, price: '$720K', days: '23', listings: '131', sales: '34' },
  { id: 'a8', name: 'Washington', x: 35, y: 67, price: '$1.18M', days: '26', listings: '204', sales: '47' },
];

export const partners = [
  { name: 'Mortgage Specialist', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/buy-AUTOx1150.fit.jpg' },
  { name: 'Home Inspector', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor15-AUTOx1150.fit.jpeg' },
  { name: 'Contractor', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor1-AUTOx1150.fit.jpeg' },
  { name: 'Plumber', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/pexels-bulat369-1243575272-32588548-AUTOx1150.fit.jpg' },
  { name: 'Electrician', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/pexels-ranjeet-860714737-27928762-AUTOx1150.fit.jpg' },
];

export const testimonials = [
  {
    name: 'Andie Coutoulakis',
    role: 'Buyer · Northern Virginia',
    rating: 5,
    text: 'Brandon was awesome to work with! He is friendly, patient, and walked us through our home buying process so it was not intimidating at all. I am active duty military and utilized the VA loan — Brandon also serves, and he knew the ins and outs of the loan which helped us a lot. I highly recommend Brandon to anyone that wants a realtor that’s by their side.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKR_rGc6HmbFfX9-SSSiOWq-sc_Zkov1v8p4JdQ3qmfr4wOuMA=s120-c-rp-mo',
  },
  {
    name: 'Rodrigo Soto',
    role: 'Buyer · Washington, DC',
    rating: 5,
    text: 'I had a great experience working with Brandon to buy my first home in Columbia Heights. As a first-time homebuyer, he was incredibly helpful, patient, and responsive every step of the way — he made the entire process much less intimidating and helped me find a place I’m excited to call home.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVqAPZm9bnz-sA6jNUHdbxnz7EpyhBKFL7cY5iRLSGojscyrQ05sg=s120-c-rp-mo',
  },
  {
    name: 'Ronny Escobar',
    role: 'Investor · Maryland',
    rating: 5,
    text: 'I can’t recommend Brandon highly enough. From start to finish he was attentive, responsive, and genuinely invested. While I was traveling internationally an unexpected maintenance issue came up and Brandon stepped in and coordinated everything — that gave me tremendous peace of mind. He treats you like a partner, not just another client.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWx7wgvt9uHcbI4Zvz2cxmJRIBafYGTrZbc22e_eHjqvfdTE8kH=s120-c-rp-mo',
  },
  {
    name: 'Kris Otto',
    role: 'Buyer · Virginia',
    rating: 5,
    text: 'Five stars doesn’t feel like enough. From the day we started looking to the day we closed took less than two months. What I appreciated most was his honesty — he never tried to sell me on a property just to close a deal, and always made sure I had what I needed to make the right decision.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjXyi39bkNxZxkNW6t7MzXhHPSfx-KBrWFD-dajuBHrwwgDihLE0=s120-c-rp-mo-ba12',
  },
  {
    name: 'Sam Winkeler',
    role: 'Lender Partner · DMV',
    rating: 5,
    text: 'Brandon is a true professional who knows the DMV real estate market inside and out, and his attention to detail when writing contracts is second to none. His knowledge, communication, and commitment to his clients make him an outstanding Realtor.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocJ7cdJIOjTzDjvrDSfruZpKSox1QVtsj4-tYqi9zNMamzQ_DQ=s120-c-rp-mo',
  },
  {
    name: 'Eliel Vega',
    role: 'Buyer · Maryland',
    rating: 5,
    text: 'Brandon has been with me in my search for about 2 years. He is educated and well-informed, and if he doesn’t know the answer he finds it — and comes back with options. He goes above and beyond and truly made me feel like I was not alone during this entire process.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjUTSrDKYZLRaML3b-liR6HbUir7j6zb9cVAL2V9DMD6fdVWSCjp=s120-c-rp-mo-ba12',
  },
  {
    name: 'Allen Yarbrough',
    role: 'Seller · Washington, DC',
    rating: 5,
    text: 'Big thanks to Major Brandon Wilson for helping me sell my condo in just 21 days! As a fellow veteran, I truly appreciated his discipline, commitment, and straightforward approach. If you’re looking for someone who gets results and has your back, Brandon is the one to call.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocKdPhDr7ovIH10rVU6tqJPJG_uEVSsFoAuFx5HlXRjRGI0LqQ=s120-c-rp-mo',
  },
  {
    name: 'Leah Taylor',
    role: 'Buyer · Washington, DC',
    rating: 5,
    text: 'He helped me and my wife find our dream home and made the entire process feel smooth. Brandon is very knowledgeable, friendly, and proactive, which made us feel confident and well taken care of. He completed all documentation in a timely manner so we were never left uninformed.',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjWOHUdzJcaEp_jhoo3kvJBCd6g_zHHdHSy5q2YUcJ20tU_X8zBx=s120-c-rp-mo',
  },
  {
    name: 'Kayla Washington',
    role: 'Buyer · Washington, DC',
    rating: 5,
    text: 'Brandon was truly a pleasure to work with! He was prompt, professional, and made the entire process smooth and stress-free from start to finish. I highly recommend him.',
    avatar: 'https://lh3.googleusercontent.com/a/ACg8ocL_fMVEv6ZUbq4NTudfVXm8Tx5CHxJlshcVxyA-qO4xe2zjxQ=s120-c-rp-mo',
  },
];

export const instagramPosts = [
  { id: 'i1', image: 'https://readdy.ai/api/search-image?query=Historic%20terraced%20row%20houses%20in%20Logan%20Circle%20Washington%20DC%2C%20warm%20brick%20facades%2C%20tree%20lined%20sidewalk%2C%20soft%20golden%20light%2C%20charming%20urban%20street%20scene%2C%20editorial%20city%20photography%2C%20harmonious%20composition&width=800&height=800&seq=instagram-logan-01&orientation=squarish', alt: 'Logan Circle, Washington DC row houses' },
  { id: 'i2', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg', alt: 'Old Town Alexandria streetscape' },
  { id: 'i3', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor1-AUTOx1150.fit.jpeg', alt: 'Contractor partner at work on a home project' },
  { id: 'i4', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg', alt: 'Bethesda Row neighborhood at golden hour' },
  { id: 'i5', image: 'https://readdy.ai/api/search-image?query=Historic%20townhomes%20in%20Shaw%20Washington%20DC%2C%20brick%20facades%20with%20colorful%20doors%2C%20leafy%20street%20trees%2C%20warm%20afternoon%20light%2C%20vibrant%20urban%20neighborhood%20scene%2C%20editorial%20city%20photography&width=800&height=800&seq=instagram-shaw-01&orientation=squarish', alt: 'Shaw, Washington DC townhomes' },
  { id: 'i6', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg', alt: 'Silver Spring, Maryland street scene' },
];

export const footerColumns = [
  {
    title: 'Buy',
    links: [
      { label: 'Buyers', href: '#services' },
      { label: 'Exclusive Listings', href: '/exclusive-listings' },
      { label: 'Properties', href: '/properties' },
      { label: 'VIP Home Search', href: '/vip-home-search' },
      { label: 'Rentals', href: '/rentals' },
    ],
  },
  {
    title: 'Sell',
    links: [
      { label: 'Sellers', href: '/sellers' },
      { label: 'Home Valuation', href: '/home-valuation' },
      { label: 'Recently Sold', href: '/recently-sold' },
      { label: 'Staging', href: '#services' },
      { label: 'Calculators', href: '/affordability-calculator' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Explore Areas', href: '/explore-areas' },
      { label: 'Communities We Serve', href: '#communities' },
      { label: 'Resources & Partners', href: '/resources' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Get in Touch', href: '/get-in-touch' },
    ],
  },
];

export const quickSearchAreas = [
  'Washington, DC',
  'Arlington, VA',
  'Alexandria, VA',
  'Falls Church, VA',
  'Bethesda, MD',
  'Silver Spring, MD',
  'Fort Washington, MD',
  'Oxon Hill, MD',
];

export const socialLinks = [
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/people/Brandon-Wilson-Realtor-MRP-ABR/61577357866577/' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/brandonwilsonrealtor_dmv' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/brandon-wilson-5a95b01b' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@BWMetroProperties' },
];

// Grouped navigation used by the right-side slide-in drawer.
// Content mirrors the real BW Metro Properties menu, rendered as a single
// vertical scrollable list and mapped to our own page anchors.
export const menuGroups = [
  {
    label: 'Buyers',
    items: [
      { label: 'Buyers', href: '/buyers' },
      { label: 'Exclusive Listings', href: '/exclusive-listings' },
      { label: 'Properties', href: '/properties' },
      { label: 'Explore Areas', href: '/explore-areas' },
      { label: 'VIP Home Search', href: '/vip-home-search' },
      { label: 'Rentals', href: '/rentals' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Get in Touch', href: '/get-in-touch' },
      { label: 'Resources & Partners', href: '/resources' },
    ],
  },
  {
    label: 'Sellers',
    items: [
      { label: 'Sell Your Home', href: '/sellers' },
      { label: 'Home Valuation', href: '/home-valuation' },
      { label: 'Cash Offer', href: '/cash-offer' },
      { label: 'Recently Sold', href: '/recently-sold' },
    ],
  },
  {
    label: 'Calculators',
    items: [
      { label: 'Affordability Calculator', href: '/affordability-calculator' },
      { label: 'Home Sale Calculator', href: '/home-sale-calculator' },
      { label: 'Mortgage Calculator', href: '/mortgage-calculator' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { label: 'Washington', href: '/washington' },
      { label: 'Arlington', href: '/arlington' },
      { label: 'Alexandria', href: '/alexandria' },
      { label: 'Falls Church', href: '/falls-church' },
      { label: 'Bethesda', href: '/bethesda' },
      { label: 'Silver Spring', href: '/silver-spring' },
      { label: 'Shaw / U Street Corridor', href: '/shaw-u-street-corridor' },
    ],
  },
];