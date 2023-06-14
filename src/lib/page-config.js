
const utils = require('./utils');

module.exports.home = async function (ctx) {
  const caseStudies = [
    {
      title: 'Lightweight Multi-use Slideshow',
      intro: 'In my previous position, I would often be required to develop page sections that looked and functioned differently depending if users were on mobile vs. a larger screen. This project came about from a desire to:',
      bullets: [ 
        'Build a lightweight, barebones slider plugin replacement',
        'Allow for alternate functionality on different screen sizes while using the same markup'
      ],
      thumbnails: [
        {
          title: 'Value Propositions',
          link: '../value-props'
        },
        {
          title: 'Mattress Animation',
          link: '../mattress-animation'
        }
      ]
    },
    {
      title: 'Tiktok Marketing Mimic',
      intro: 'In my previous position, I would often be required to develop page sections that looked and functioned differently depending if users were on mobile vs. a larger screen. This project came about from a desire to:',
      bullets: [ 
        'Mimic the look and feel of Tiktok for users that are referred from mobile-targeted links on social media',
        'Provide an engaging experience that gathers sales leads'
      ],
      thumbnails: [
        {
          title: 'Tiktok Marketing Mimic',
          link: '../tiktok'
        }
      ]
    },
    {
      title: 'Product Display Template',
      intro: 'The following pages highlight the features of a Product Display template that I developed to support a line of bedding products. This project came about from a need to:',
      bullets: [ 
        'Unify diverging styles among the company\'s various product pages',
        'Create a semantically consistent structural system that would allow for easy re-styling',
        'Speed up development time for future product launches'
      ],
      details: 'The template was developed using the Nunjucks templating language, Sass and jQuery, though I\'ve converted some of the scripts to ES6 over time. Additionally, there are a number of node modules developed to aid in setting product details, like discounted prices and monthly payments.  It\'s made to be fully functional once the relevant variables are set, allowing more time for the development of page content.',
      thumbnails: [
        {
          title: 'Default Config',
          link: '../mattress'
        },
        {
          title: 'Advanced Features',
          link: '../frame'
        },
        {
          title: 'Flexible Upsells',
          link: '../sheets'
        }
      ]
    }
  ]
  return caseStudies;
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

module.exports.mattress = async function (ctx) {
  const p = [
    {
      skus: ctx.skus,
      catIds: [1],
      defaultCatId: 1,
      defaultProductType: 'MA',
      catSizes: 6,
      catType: 'mattress',
      comboPage: false,
      comboProductModal: false,
      comboProductAccordion: false,
      comboProductButtonTitles: true,
      comboProductButtonLabels: false,
      pageUrl: 'mattress',
      gallerySlides: 4,
      galleryDimensions: 0,
      longTitle: false,
      heading: 'The Original Mattress',
      subheading: 'Ships in 1-<span>4</span> business days',
      deliveryWindowText: 'Ships in 1-4 business days',
      ratings: [
        { 
          stars: true,
          total: utils.numberWithCommas(5555),
          average: 4.7,
          googleTotal: utils.numberWithCommas(2345),
          googleAverage: 4.2,
          tooltip: true,
          mattressTooltip: true
        }
      ],
      sizeGuide: [
        {
          show: true,
          productName: 'Mattress',
          mattressModal: true,
          dimensionsLink: true
        }
      ],
      productDimensions: true,
      colorSelection: false,
      qtySelection: false,
      maxQty: 1,
      financingSection: true,
      upsellModal: true,
      upsellModalCatId: 8,
      upsellModalSkus: ctx.upsellSkus,
      scripts: [
        'nav',
        'modal.bootstrap',
        'swiper-lite',
        'tippy',
        'lazysizes.min'
      ],
      prevPage: '../tiktok',
      nextPage: '../frame',
      headerTitle: 'Product Display Template',
      headerIntro: 'This is the default configuration of the template. The features on display here include:',
      headerBullets: [
        'Extended urls for product sizes (example: /mattress/king)',
        'Upsell modal offers an appropriately sized product after the add-to-cart event.',
        'Fully responsive. In an effort to have a more consistent, app-like experience on mobile, most elements utilize vw units that scale with the viewport width.',
        '<a href="https://lull.com/original-premium-mattress" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
  }]
  return p;
}

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

module.exports.frame = async function (ctx) {
  const p = [
    {
      skus: ctx.skus,
      catIds: [40, 41],
      defaultCatId: 40,
      defaultProductType: 'UU',
      shortName: utils.getShortName('UU'),
      catSizes: 6,
      bundle: false,
      bundleIds: [],
      comboPage: true,
      comboProductModal: false,
      comboProductButtonTitles: false,
      comboProductButtonLabels: true,
      comboProduct: [
        {
          toggleTitle: false,
          comboProductTitle: '',
          comboProductId: 41,
          comboProductType: 'TU',
          shortName: utils.getShortName('TU'),
          discount: ctx.discountActual
        }
      ],
      pageUrl: 'frame',
      productType: 'frame',
      gallerySlides: 5,
      galleryDimensions: 5,
      longTitle: false,
      heading: utils.getProductName('UU'),
      subheading: 'Elevate your bedroom with a modern classic.',
      ratings: [
        { stars: true,
          total: utils.numberWithCommas(3500),
          average: 4.3,
          tooltip: true,
          tooltipFootnote: '*Reviews based on all Bed Frames'
        }
      ],
      deliveryWindowText: 'Ships in 1&ndash;4 business days',
      readyToShipMessage: true,
      sizeGuide: [
        {
          show: true,
          productName: utils.getProductName('UU'),
          mattressModal: false,
          dimensionsLink: false
        }
      ],
      productDimensions: false,
      colorSelection: true,
      colorDisplayOrder: [ 
        { color: 'CS', colorName: utils.getColorName('CS') }, 
        { color: 'DS', colorName: utils.getColorName('DS') },
      ],
      defaultColor: 'CS',
      defaultColorName: utils.getColorName('CS'),
      qtySelection: false,
      maxQty: 1,
      productImage: 'https://lull-media.imgix.net/upholstered-bed-frame/gallery-straighton-withluxe-TU-CS.jpg?auto=format,compress&w=1200',
      financingSection: true,
      scripts: [
        'nav',
        'modal.bootstrap',
        'swiper-lite',
        'tippy',
        'lazysizes.min'
      ],
      prevPage: '../mattress',
      nextPage: '../sheets',
      headerTitle: 'Product Display Template',
      headerIntro: 'This configuration offers users choices between two product lines. The features on display here include:',
      headerBullets: [
        'The gallery displays images relevant to both the currently selected product color and the currently selected product line (Classic or Tufted).',
        'Out of Stock conditions prevent customers from ordering items not currently in inventory',
        'URL search parameters allow for complex marketing links that sort by size, color and product type (for example, <a href="?size=full&color=desert-sand&type=tufted">/frame?size=full&color=desert-sand&type=tufted)</a>.',
        '<a href="https://lull.com/islay-upholstered-bed" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
  }]
  return p;
}

module.exports.sheets = async function (ctx) {
  const p = [
    {
      skus: ctx.skus,
      catIds: [31],
      defaultCatId: 31,
      defaultProductType: 'OC',
      catSizes: 6,
      pageUrl: 'sheets',
      productType: 'sheets',
      gallerySlides: 5,
      galleryDimensions: 0,
      galleryVideo: true,
      galleryVideoSlide: 5,
      galleryVideoSource: '',
      galleryVideoUrl: ['https://lull-media.imgix.net/sheets/organic-sheets-16x9-web.mp4?auto=format,compress'],
      galleryVideoPoster: 'https://lull-media.imgix.net/sheets/organic-sheets-16x9-web.mp4?fm=jpg&w=840&frame=1',
      longTitle: false,
      heading: 'The Organic Cotton Sheets',
      subheading: '100% organic cotton sheets crafted with comfort, wellness, and luxury in mind.',
      ratings: [
        { 
          stars: true,
          total: utils.numberWithCommas(6543),
          average: 4.5,
          tooltip: true,
          tooltipFootnote: '*Reviews based on the Original Sheets set'
        }
      ],
      deliveryWindowText: 'Included:<br>Fitted sheet, top sheet and <span class="hidden-xs">matching</span> <span class="pillowcase">pillowcase</span>',
      readyToShipMessage: true,
      sizeGuide: [
        {
          show: false,
          productName: '',
          mattressModal: false,
          dimensionsLink: false
        }
      ],
      productDimensions: false,
      colorSelection: true,
      colorDisplayOrder: [ 
        { color: 'BW', colorName: utils.getColorName('BW') }, 
        { color: 'QG', colorName: utils.getColorName('QG') }, 
        { color: 'GG', colorName: utils.getColorName('GG') }, 
        { color: 'MB', colorName: utils.getColorName('MB') }, 
        { color: 'PA', colorName: utils.getColorName('PA') }, 
        { color: 'WP', colorName: utils.getColorName('WP') }, 
        { color: 'CD', colorName: utils.getColorName('CD') }
      ],
      defaultColor: 'MB',
      defaultColorName: utils.getColorName('MB'),
      qtySelection: false,
      maxQty: 1,
      productImage: 'https://lull-media.imgix.net/sheets/sheets-wh-01.jpg?auto=format,compress&w=1200',
      financingSection: false,
      upsellModal: false,
      upsellModalCatId: 0,
      upsell: true,
      upsellListTitle: 'Complete Your Bed',
      upsellListSubtitle: 'Everything you need for great sleep',
      upsellMinimum: 1,
      upsells: [
        {
          skus: ctx.duvetCoverSkus,
          catIds: [31, 32, 33],
          catSizes: 3,
          defaultCatId: 33,
          category: 'bedding',
          slug: 'duvet-cover',
          name: 'Add a Duvet Cover',
          title: 'The Lull Duvet Cover',
          longtitle: false,
          subtitle: '',
          colorFilter: false,
          filteredColor: '',
          matchColor: false,
          colorSelection: true,
          colorDisplayOrder: [ 
            { color: 'BW', colorName: utils.getColorName('BW') }, 
            { color: 'QG', colorName: utils.getColorName('QG') }, 
            { color: 'GG', colorName: utils.getColorName('GG') }, 
            { color: 'MB', colorName: utils.getColorName('MB') }, 
            { color: 'PA', colorName: utils.getColorName('PA') }, 
            { color: 'WP', colorName: utils.getColorName('WP') }, 
            { color: 'CD', colorName: utils.getColorName('CD') }
          ],
          defaultColor: 'MB',
          details: [
            {
              detail: 'Lorem ipsum dolor'
            },
            {
              detail: 'Integer ullamcorper facilisis'
            },
            {
              detail: 'Cras vel eleifend sem'
            }
          ],
          reviewsTotal: 600,
          reviewsAverage: 4.5,
          gallerySlides: 7 
        },
        {
          skus: ctx.pillowcaseSkus,
          catIds: [34, 35, 36],
          catSizes: 2,
          defaultCatId: 35,
          category: 'bedding',
          slug: 'pillowcase',
          name: 'Add a Pillowcase Set',
          title: 'The Lull Pillowcase',
          longtitle: false,
          subtitle: '',
          colorFilter: false,
          filteredColor: '',
          matchColor: false,
          colorSelection: true,
          colorDisplayOrder: [ 
            { color: 'BW', colorName: utils.getColorName('BW') }, 
            { color: 'QG', colorName: utils.getColorName('QG') }, 
            { color: 'GG', colorName: utils.getColorName('GG') }, 
            { color: 'MB', colorName: utils.getColorName('MB') }, 
            { color: 'PA', colorName: utils.getColorName('PA') }, 
            { color: 'WP', colorName: utils.getColorName('WP') }, 
            { color: 'CD', colorName: utils.getColorName('CD') }
          ],
          defaultColor: 'MB',
          bundle: false,
          bundleItems: [
            {
              catId: 22
            }
          ],
          details: [
            {
              detail: 'Lorem ipsum dolor'
            },
            {
              detail: 'Integer ullamcorper facilisis'
            },
            {
              detail: 'Cras vel eleifend sem'
            }
          ],
          showReview: false,
          gallerySlides: 7
        }
      ],
      scripts: [
        'nav',
        'modal.bootstrap',
        'swiper-lite',
        'tippy',
        'lazysizes.min'
      ],
      prevPage: '../frame',
      headerTitle: 'Product Display Template',
      headerIntro: 'This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The features on display here include:',
      headerBullets: [
        'The upsells update their currently offered product size when the main product size selection changes. In this case, all 3 product groups have differing numbers of corresponding sizes that all need to be matched. Users can then select the upsell item\'s color and fabric type. Upsell color and fabric selections persist if the user changes the main product size selection',
        'Each upsell has an associated modal containing product details and a gallery of product images.',
        'The financing modal (accessible by hovering over the question mark icon below the color swatches) updates with each product selection change, including adding upsells.',
        '<a href="https://lull.com/organic-cotton-sheets" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    }]
  return p;
}