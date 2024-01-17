const utils = require('./utils');

module.exports.valueProps = async function (ctx) {
  const items = [
    {
      title: 'Free Shipping & Easy Returns',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi a euismod bibendum. Sed congue sem at aliquet interdum.'
    },
    {
      title: '365 Night Trial',
      details: 'Donec vehicula porta metus, id malesuada massa ornare in. Vivamus vitae nisi aliquet, luctus urna sed, viverra leo.'
    },
    {
      title: 'Lifetime Warranty',
      details: 'Ut pellentesque id nisi vitae bibendum. Proin a consectetur magna. Nam sit amet metus ac metus condimentum aliquet.'
    },
    {
      title: 'Easy Financing Available',
      details: 'Aliquam erat volutpat. Suspendisse vitae lectus id massa tristique mattis. Nunc consectetur luctus augue sed'
    }
  ]
  return items;
}

module.exports.mattressAnimation = async function (ctx) {
  const layers = [
    {
      title: 'Quilted Memory Foam Cover',
      details: 'Easily concealed beneath the<br class="hidden-md hidden-lg"> sheets, this<br class="visible-md visible-lg"> high-quality cover<br class="visible-sm"> features quilted open-cell memory foam and a hexagonal, top-tick design for maximum airflow, keeping you comfortable both in and out of sleep.'
    },
    {
      title: 'Cooling Comfort Layer',
      details: '2" of cooling-gel bead infused memory<br class="visible-md"> foam promotes increased<br class="visible-xxs"> air circulation<br class="visible-md"> by redirecting and releasing heat away from your body. The contouring memory foam promotes proper spine alignment<br class="hidden-md hidden-lg"> for support<br class="visible-md"> all night long.'
    },
    {
      title: 'Fast Response Transition Layer',
      details: 'The 2" transitional layer is<br class="visible-xxs"> composed of proprietary high resilience, medium-firm foam and works hard to distribute motion and add additional support. <br class="visible-xssm">Rest easy with the perfect alignment <br class="visible-xssm">and <br class="visible-xxs">wake up feeling fully restored.'
    },
    {
      title: 'Durable Base Layer',
      details: 'The foundation for better sleep<br class="hidden-md hidden-lg"> starts here. <br class="visible-md visible-lg">7" of sink-resistant, <br class="hidden-md hidden-lg">high-density, foam maintains the appearance and feel of your mattress.  Unrivaled durability makes it the<br class="visible-md"> perfect foundation for the comfort layers above.'
    }
  ]
  return layers;
}

module.exports.tkSlides = async function (ctx) {
  slides = [
    {
      heading: 'Get Life-Changing Sleep',
      content: 'Lull Original Mattresses are crafted with three layers of high-quality memory foam and are designed for all body types and sleeping positions.',
      cta: true,
      videoUrl: '../assets/1.mp4'
    },
    {
      heading: 'Invest in Your Sleep',
      content: 'Make The Original Lull Mattress your new secret weapon for a happier, healthier, more energetic day. Try it stress-free for 365 nights and feel the difference a Lull can make!',
      cta: false,
      videoUrl: '../assets/2.mp4'
    },
    {
      heading: 'Flippin\' Out for Lull',
      content: 'People are jumping for joy over the unbeatable comfort and support Lull provides. Experience the excitement of upgrading to a Lull mattress.',
      cta: false,
      videoUrl: '../assets/3.mp4'
    },
    {
      heading: 'From Compressed to<br> <i>Impressed</i> in 5 min',
      content: 'Get your new perfect mattress with free shipping right to your door in only 1-4 business days. Simply unroll, unpack, and watch it expand in just 5 minutes!',
      cta: true,
      videoUrl: '../assets/4.mp4'
    },
    {
      heading: 'Namaste in Bed',
      content: 'More stretching, less stressing. Studies show that a good night\'s sleep can improve your mood, reduce stress, boost your immune system, and help your brain fire on all cylinders.',
      cta: false,
      videoUrl: '../assets/5.mp4'
    },
    {
      heading: 'Shop Day or Night from the Comfort of Home',
      content: 'The Original Lull Mattress is more than just memory foam. Its a triple-layer paradise that\'ll change the way you sleep, forever!',
      cta: true,
      videoUrl: '../assets/6.mp4'
    },
    {
      heading: 'Get Cozy Now, Pay Later',
      content: 'Invest in your dreams. Literally. Get the Original Lull Mattress now and pay over time with easy financing for as low as $28/mo.<a class="question financing-modal-link" href="#" data-sku="LU-MA-WH-TW" data-quantity="1">?</a> No hidden fees.',
      cta: true,
      videoUrl: '../assets/7.mp4'
    },
    {
      heading: 'Better Sleep = Better Days',
      content: 'Made with the highest quality foam, the Original Lull Mattress is the perfect spot for “me” time. Great sleep reduces stress, boosts the immune system, & helps you stay happy.',
      cta: true,
      videoUrl: '../assets/8.mp4'
    },
    {
      heading: 'The People Have Spoken',
      content: 'Lull is the only mattress company with 4.5 stars & over 4,321 verified reviews! We never pay for or hide reviews & guarantee a full refund if you don\'t see yours on our site.',
      cta: false,
      videoUrl: '../assets/9.mp4'
    },
    {
      heading: 'Lull Checks All the Boxes ✅',
      content: 'Nobody likes buyer\'s remorse. That\'s why Lull offers a risk-free, 365 night trial! If you\'re not in love with your Lull mattress within a year, we\'ll arrange a quick and easy return.',
      cta: false,
      videoUrl: '../assets/10.mp4'
    },
    {
      heading: 'Easy as 1, 2, <i>zzz</i>',
      content: 'You\'re just a few clicks away from a Lull mattress being delivered right to your front door. Setup is a snap and you\'ll be drifting off to dreamland in no time.',
      cta: false,
      videoUrl: '../assets/11.mp4'
    },
    {
      heading: 'Sleeping is Believing',
      content: 'Try the Original Lull Mattress in your home for 365 nights. We know you\'re going to love it. If we\'re wrong, we\'ll arrange a quick and easy return.',
      cta: true,
      videoUrl: '../assets/12.mp4'
    }
  ]
  return slides;
}

module.exports.tkTweets = async function (ctx) {
  tweets = [
    {
      reviews: [
        {
          review: 'Big shoutout to <strong>@LullBed</strong> for helping our apartment feel more like home! It\'s only our first night using it, but I can assure you my body definitely feels the difference!',
          name: '@taydempereira',
          source: 'instagram'
        },
        {
          review: 'I literally changed the way I sleep. Best investment!! The perfect mix of comfort and support. Bye bye back and neck pain, you\'ve been here for way too long! Loving my cooling gel-infused foam mattress with all my heart <strong>@LullBed</strong>',
          name: '@mariapretelt',
          source: 'instagram'
        },
        {
          review: 'Got my new Lull mattress in. I\'m in heaven!!',
          name: '@kyla.moravec',
          source: 'facebook'
        },
        {
          review: 'Look what came in the mail! I\'m super excited to finally have a full, good nights sleep on my new <strong>@LullBed</strong> mattress after a long exhausting week of relocating! The delivery is such a convenience and it comes right to your doorstep!!! You can catch me snoozing for the next few days.',
          name: '@paigexalexandria',
          source: 'instagram'
        },
        {
          review: 'The new bed I got is so comfortable, I don\'t think I\'ve ever slept so good!! <strong>@LullBed</strong>',
          name: '@sydneejaynexo',
          source: 'twitter'
        },
        {
          review: 'Wow I\'m in love with my new bed thank you <strong>@LullBed</strong>',
          name: '@__Mel4',
          source: 'twitter'
        },
        {
          review: 'If any of y\'all are looking to buy a new mattress I can\'t recommend <strong>@LullBed</strong> enough. I haven\'t slept this well in my entire life.',
          name: '@barfieldthecat',
          source: 'twitter'
        }
      ]
    }
  ]
  return tweets;
}

module.exports.tkFaqs = async function (ctx) {
  faqs = [
    {
      username: 'lullfan_1',
      question: 'How does the 365-Night Trial work for the Lull mattress?',
      answer: 'After you order your Lull mattress, we\'ll ship it right to your doorstep for free. Try it out in your home for a full year. If you don\'t love it within the first 365 nights, arrange a quick and easy return. We\'ll even send a courier to pick up the mattress for free!',
      date: '2021-01-31'
    },
    {
      username: 'mr_sandman',
      question: 'Does the mattress sleep hot like other memory foam mattresses?',
      answer: 'The Lull mattress is designed to keep you comfortable all night long. The top layer of the mattress is made of 1.5” gel infused viscoelastic memory foam. This layer provides dramatically enhanced air flow and draws heat away from your body.',
      date: '2021-02-01'
    },
    {
      username: 'savy_snoozer',
      question: 'How do I get the mattress back in the box?',
      answer: 'You don\'t. We pick it up fully expanded. If you are not completely satisfied with your sleeping experience within the first 365 nights, we will arrange for a free pickup and removal of your Lull mattress in its expanded form. Lull makes every effort possible to donate returned trial mattresses to charities and organizations in need of beds.',
      date: '2021-02-02'
    },
    {
      username: 'dr_dreamzz',
      question: 'How long before I receive my mattress?',
      answer: 'Lull mattresses typically ships in 1-4 business days following your order. Once your mattress has shipped, we will provide you with information to track your order.',
      date: '2021-02-03'
    }
  ]
  return faqs;
}


module.exports.frameReviews = async function (ctx) {
  const frameReviews = [
    {
      heading: 'Lull Bed Frame Reviews',
      reviews: [
        {
          stars: '5',
          reviewTitle: 'Total Package',
          review: 'The frame is beautiful. It was easy to put together and it provides nice support. I love the way it looks, it really is a clean look.',
          name: 'Timber'
        },
        {
          stars: '5',
          reviewTitle: 'Great Frame',
          review: 'The frame was really easy to put together. The book that comes with it said it would take 10 minutes and I didn\'t believe it, but it did. It\'s really sturdy and everything I expected.',
          name: 'Valerie G.'
        },
        {
          stars: '5',
          reviewTitle: 'Great',
          review: 'Arrived just like promised, very easy to set up, comfortable, my husband has very bad sciatica and after just the first night he felt better. It definitely helps his back pain.',
          name: 'Nancy G.'
        },
        {
          stars: '5',
          reviewTitle: 'Fabulous',
          review: 'It looks fabulous. It\'s strong and sturdy. Easy to put together.',
          name: 'Charles V.'
        },
        {
          stars: '5',
          reviewTitle: 'Fantastic!',
          review: 'High quality, easy to put together, solid piece of furniture.',
          name: 'Ann'
        },
        {
          stars: '5',
          reviewTitle: 'Lull Bed Frame',
          review: 'This frame is amazing. You can put it together in a few minutes without any tools. It\'s strong and the design is clean and elegant. Will go great in any room. It\'s a steal if you ask me!',
          name: 'Elba M.'
        },
        {
          stars: '5',
          reviewTitle: 'Would Recommend',
          review: 'I like the clean appearance of it. It was very simple. It goes really well with the room and is super supportive compared to our other frame!',
          name: 'Brandy R.'
        },
        {
          stars: '5',
          reviewTitle: 'Perfect Craftsmanship',
          review: 'Super easy to put together and in less than five minutes. It\'s beautifully manufactured and everything fits together perfectly.',
          name: 'Dean C.'
        },
        {
          stars: '5',
          reviewTitle: 'Nice Frame',
          review: 'I love it, it\'s the perfect height above the ground, not too far above it but not too low. It looks gorgeous in my room, it\'s a nice frame.',
          name: 'Kimberly'
        },
        {
          stars: '5',
          reviewTitle: 'Silent and Sturdy',
          review: 'No squeaks, no rattles, no sound from this bed frame whatsoever! It\'s really great.',
          name: 'Robert F.'
        }
      ]
    }	
  ]
  return frameReviews;
}

module.exports.ourWay = async function (ctx) {
 const ourWay = [
    {
      title: 'Title One',
      titleClass: 'shipping',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis, leo in scelerisque laoreet, ligula nunc faucibus purus, at ornare lectus justo et neque. Duis hendrerit ante elit, vel congue mi luctus sed.'
    },
    {
      title: 'Title Two',
      titleClass: 'trial',
      content: 'Integer ullamcorper facilisis massa nec cursus. Praesent consequat, erat ac ullamcorper dignissim, ipsum neque fringilla orci, non condimentum mi mi vitae metus. Nunc dolor risus, semper cursus lorem cursus, efficitur placerat turpis.</a>'
    },
    {
      title: 'Title Three',
      titleClass: 'returns',
      content: 'Phasellus eget urna vitae dolor ornare placerat condimentum vel tellus. Cras fermentum, ex ac pharetra mollis, elit enim vestibulum arcu, eget porttitor augue libero nec erat. Nam ac congue eros.'
    },
    {
      title: 'Title Four',
      titleClass: 'warranty',
      content: 'Cras vel eleifend sem. Pellentesque dignissim, felis non porta hendrerit, nunc nisl iaculis diam, nec fringilla enim mauris interdum nulla. Ut hendrerit lacus mauris, sed auctor est facilisis eget.'
    }
  ];
  return ourWay;
}

module.exports.suggestedItems = async function (ctx) {
  const suggestedItems = [
    {
      title: 'More Lull Favorites',
      items: [
        {
          itemName: 'Luxe Hybrid Mattress',
          shortName: 'luxe',
          linkName: 'luxe hybrid',
          url: 'shop-luxe',
          description: 'A luxurious combination of comfort, support, and cooling technology.'
        },
        {
          itemName: 'Original Lull Mattress',
          shortName: 'mattress',
          linkName: 'original',
          url: 'shop',
          description: 'Lull\'s premium gel memory foam mattress.<br>&nbsp;'
        },
        {
          itemName: 'Mattress Protector',
          shortName: 'protector',
          linkName: 'protector',
          url: 'mattress-protector',
          description: 'Extend the life of your Lull Mattress and keep it safe from spills, stains and allergens.'
        },
        {
          itemName: 'Lull Mattress Foundation',
          shortName: 'foundation',
          linkName: 'foundation',
          url: 'mattress-foundation',
          description: 'The box spring reimagined. Ultra sturdy support that\'s easy to assemble.'
        },
        {
          itemName: 'Original Lull Pillow',
          shortName: 'pillow',
          linkName: 'pillow',
          url: 'pillow',
          description: 'A three-layer design provides the perfect combination of comfort and support.'
        },
        {
          itemName: 'Original Lull Duvet',
          shortName: 'duvet',
          linkName: 'duvet',
          url: 'duvet-insert',
          description: 'Millions of premium fibers keep you warm in the winter and cool in the summer.'
        },
        {
          itemName: 'Cotton Blend Sheets',
          shortName: 'cotton-sheets',
          linkName: 'sheets',
          url: 'cotton-blend-sheets',
          description: 'Silky, soft, and breathable &ndash; high quality sheets at an unbeatable price.'
        }
      ]
    }];
   return suggestedItems;
 }

 module.exports.faq = async function (ctx) {
  const faq = [
    {
      question: 'What is an upholstered bed frame?',
      answer: 'Upholstered bed frames feature padding and either a textile or fabric overlay around the frame. The variations in design offer tufted and untufted headboards, for a sophisticated or more minimalist feel.'
    },
    {
      question: 'Does the ' + utils.getProductName('UU') + ' require any tools for assembly?',
      answer: 'All of the tools and hardware needed to put the ' + utils.getProductName('UU') + ' together are included in your shipment—simply follow our step-by-step instructions for safe and easy assembly.'
    },
    {
      question: 'What is the ' + utils.getProductName('UU') + ' made of?',
      answer: `<div class="chart-head row">
                <div class="col-xs-6"><p>Component</p></div>
                <div class="col-xs-6"><p>Material</p></div>
              </div>
              <div class="chart-body row">
                <div class="col-xs-6"><p>Headboard</p></div>
                <div class="col-xs-6"><p>Wood</p></div>
                <div class="col-xs-6"><p>Rails</p></div>
                <div class="col-xs-6"><p>Wood</p></div>
                <div class="col-xs-6"><p>Slats</p></div>
                <div class="col-xs-6"><p>Wood</p></div>
                <div class="col-xs-6"><p>Fabric</p></div>
                <div class="col-xs-6"><p>Polyester</p></div>
                <div class="col-xs-6"><p>Center Beam</p></div>
                <div class="col-xs-6"><p>Steel</p></div>
                <div class="col-xs-6"><p>Corner Joint</p></div>
                <div class="col-xs-6"><p>Steel</p></div>
                <div class="col-xs-6"><p>Legs</p></div>
                <div class="col-xs-6"><p>Plastic</p></div>
                <div class="col-xs-6"><p>Screw</p></div>
                <div class="col-xs-6"><p>Steel</p></div>
              </div>`
    }
  ];
  return faq;
}

module.exports.valuePropsSheets = async function (ctx) {
  const valueProps = [
    {
      type: 'vp',
      heading: 'Get Ready for the Ultimate Sleep Experience',
      items: [
        {
          title: 'Shipping &amp; Returns',
          icon: true,
          className: 'shipping',
          bullets: false,
          content: [
            { item: 'Your sheets ship fast and free in the contiguous US. Once your order is placed it typically ships in 1-4 business days and arrives with no-contact delivery. Don\'t love them? Arrange a quick, stress-free return.' }
          ]
        },
        {
          title: '100 Night Trial',
          icon: true,
          className: 'trial',
          bullets: false,
          content: [
            { item: 'Try the Organic Cotton Sheet Set in your home for 100 nights, stress-free. If you\'re not 100% satisfied with your sleep experience during the trial period, arrange a quick and easy return.' }
          ]
        },
        {
          title: '1-Year Warranty',
          icon: true,
          className: 'warranty',
          bullets: false,
          content: [
            {	item: 'Your Lull Sheets are protected by a 1-year limited manufacturer\'s warranty.' }
          ]
        }
      ]
    }
  ];
  return valueProps;
}

module.exports.reviewsSheets = async function (ctx) {
  const reviews = [
    {
      heading: 'People Love Lull Sheets',
      reviews: [
        {
          stars: '5',
          reviewTitle: 'The sheets are so soft',
          review: 'The sheets are so soft, fresh and so comfortable. Wash really well and the fit is great. Love white sheets.',
          name: 'Marvette H.'
        },
        {
          stars: '5',
          reviewTitle: 'Best sheets ever',
          review: 'The sheets are thick, and comfortable, way better than anything I\'ve bought from a store.',
          name: 'Leslie'
        },
        {
          stars: '5',
          reviewTitle: 'These sheets are absolutely worth it',
          review: 'These sheets are absolutely worth the money, I\’ll be buying another set!',
          name: 'Lisa F.'
        },
        {
          stars: '5',
          reviewTitle: 'Softest sheets',
          review: 'Its super soft and comfortable. I really like this sheet set, definitely not like the traditional sheets you buy from the store. They fit perfectly on my Lull.',
          name: 'Diana'
        },
        {
          stars: '5',
          reviewTitle: 'The perfect end',
          review: 'The sheets showed up, and I washed them per the instructions. They are the best sheets, like hotel sheets! It\'s like sleeping on a cloud. It\'s the perfect set for the mattress.',
          name: 'Rebeca'
        },
        {
          stars: '5',
          reviewTitle: 'Comfy!',
          review: 'These sheets are SO soft & comfortable. Definitely a great purchase!',
          name: 'Crystal C.'
        },
        {
          stars: '5',
          reviewTitle: 'Sheets are great.<br class="visible-xxs"> Really soft.',
          review: 'Sheets are great. Really soft but don\’t cling to you.',
          name: 'Jacque K.'
        },
        {
          stars: '5',
          reviewTitle: 'Amazing',
          review: 'These sheets are phenomenal. I was so impressed with the overall experience, I bought more products!',
          name: 'Jeremy A.'
        },
        {
          stars: '5',
          reviewTitle: 'The best!',
          review: 'The sheets are a must as well. I sleep great and have more energy the next day now.',
          name: 'Mike D.'
        }
      ]
    }	
  ];
  return reviews;
}

module.exports.additionalDetails = async function (ctx) {
  const additionalDetails = [
    {
      type: 'additional-details',
      heading: 'Additional Details',
      items: [
        {
          title: 'Perfect Fit',
          icon: false,
          className: 'perfect-fit',
          bullets: true,
          content: [
            { item: 'The Lull Organic Cotton Sheets are designed to stay in place and fit any Lull mattress or mattresses up to 15”.' }, 
            { item: 'Each pillowcase features a sleek envelope enclosure designed to keep pillows secure and clean.' }
          ]
        },
        {
          title: 'Care Instructions',
          icon: false,
          className: 'care-instructions',
          bullets: true,
          content: [
              { item: 'Wash and rotate weekly' },
            {	item: 'Machine wash, cold, separately with mild detergent' },
            {	item: 'Tumble dry on lowest heat setting' },
            {	item: 'Warm iron as needed' }
          ]
        }
      ]
    }
  ];
  return additionalDetails;
}

module.exports.suggestedItems = async function (ctx) {
  const suggestedItems = [
    {
      title: 'You Might Also Love',
      items: [
        {
          itemName: 'Down Pillow',
          shortName: 'down-pillow',
          linkName: 'pillow',
          url: 'down-pillow',
          description: 'Premium head and neck support filled with responsibly sourced white duck down.'
        },
        {
          itemName: 'Original Lull Pillow',
          shortName: 'pillow',
          linkName: 'pillow',
          url: 'pillow',
          description: 'A three-layer design provides the perfect combination of comfort and support.'
        },
        {
          itemName: 'Original Lull Duvet',
          shortName: 'duvet',
          linkName: 'duvet',
          url: 'duvet-insert',
          description: 'Millions of premium fibers keep you warm in the winter and cool in the summer.'
        },
        {
          itemName: 'Memory Foam Pillow',
          shortName: 'memory-foam-pillow',
          linkName: 'pillow',
          url: 'memory-foam-pillow',
          description: 'Soft on one side and firm<br class="hidden-xs"> on the<br class="visible-xs"> other to support<br class="hidden-xs"> all sleepers.'
        },
        {
          itemName: 'Down Duvet',
          shortName: 'duvet',
          linkName: 'down duvet',
          url: 'down-duvet-insert',
          description: 'Heirloom quality down<br> duvet insert.<br class="hidden-xs">&nbsp;'
        }
      ]
    }
  ];
  return suggestedItems;
}

module.exports.faqs = async function (ctx) {
  const faqs = [
    {
      question: 'Does organic cotton run hot or cold?',
      answer: 'Lull\’s 100% Organic Cotton Sheets feature a lightweight sateen weave that breathes well, keeping you warm in the winter and cool in the summer.'
    },
    {
      question: 'What do the Organic Cotton Sheets feel like?',
      answer: 'Lull\’s Organic Cotton Sheets are buttery soft with a luminous, silky finish.'
    },
    {
      question: 'How do I care for the Organic Cotton Sheets?',
      answer: 'For best results and longevity, machine wash cold, separately, with mild detergent. Tumble dry on lowest heat setting and use a warm iron as needed.'
    },
    {
      question: 'Is financing available for buying Lull Sheets?',
      answer: 'Yes, simply select Affirm as a payment option on the final step of the checkout process.'
    }
  ];
  return faqs;
}
