
const utils = require('./utils');

module.exports.home = async function (ctx) {
  // const directory = await utils.getDirectory();
  // const pageDetails = await content.getPageDetails(ctx);
  // let caseStudies = [];
  // let pageId = -1;
  // directory.forEach(link => {
  //   pageId++
  //   pageDetails.forEach(page => {
  //     if (link === page.link) {
  //       const item = {
  //         link: link,
  //         pageId: pageId,
  //         title: page.title,
  //         intro: page.intro,
  //         background: page.background
  //       }
  //       caseStudies.push(item);
  //     }
  //   })
    
  // })
  console.log('caseStudies', caseStudies)
  const caseStudiesXXX = [
    {
      title: 'Holiday Mode',
      intro: 'Holiday promotions were an important part of this company’s business, and several times a year we would theme the website for a variety of holidays. This eventually became too time-consuming, and in response I developed Holiday Mode for the site, which enabled reverting back to the regular site by updating one variable. Click here to toggle between the two versions.',
      background: [
        '../assets/holiday-promotion/carousel01-mob-vp-lg.jpg'
      ],
      link: 'holiday-mode',
    },
    {
      title: 'Value Propositions',
      intro: 'In my previous position, I would often be required to develop page sections that looked and functioned differently depending if users were on mobile vs. a larger screen. This project came about from a desire to:',
      bullets: [ 
        'Build a lightweight, barebones slider plugin replacement',
        'Allow for alternate functionality on different screen sizes while using the same markup'
      ],
      background: [
        '../assets/luxe-vp-couple-md.jpg',
      ],
      link: '../value-props'
    },
    {
      title: 'Mattress Layer Animation',
      intro: 'In my previous position, I would often be required to develop page sections that looked and functioned different ly depending if users were on mobile vs. a larger screen. This project came about from a desire to:',
      bullets: [ 
        'Build a lightweight, barebones slider plugin replacement',
        'Allow for alternate functionality on different screen sizes while using the same markup'
      ],
      background: [
        '../assets/luxe-vp-couple-md.jpg',
      ],
      link: '../mattress-animation'
    },
    {
      title: 'Tiktok Mimic',
      intro: 'Tiktok-styled mobile promotional page for a social media-targeted marketing campaign. Videos advance manually or automatically.',
      background: [
        '../assets/promos/tiktok-01.jpg',
        '../assets/promos/tiktok-02.jpg',
        '../assets/promos/tiktok-03.jpg'
      ],
      link: '../tiktok'
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
      background: [
        '../assets/luxe-vp-couple-md.jpg',
      ],
      link: '../mattress',
    },
    {
      title: 'Pr',
      intro: '...',
      details: '.................',
      background: [
        '../assets/luxe-vp-couple-md.jpg',
      ],
      link: '../frame',
    },
    {
      title: 'Frame Full',
      intro: '...',
      details: '............',
      background: [
        '../assets/luxe-vp-couple-md.jpg',
      ],
      link: '../frame-full',
    },
    {
      title: 'Sheets PD',
      intro: '...',
      details: '.................',
      background: [
        '../assets/luxe-vp-couple-md.jpg',
      ],
      link: '../sheets',
    },
    {
      title: 'Sheets Full',
      intro: '...',
      details: '............',
      background: [
        '../assets/luxe-vp-couple-md.jpg',
      ],
      link: '../sheets-full',
    },
    {
      title: 'Shopping Cart',
      intro: 'This page was developed to replace the company\'s existing shopping cart with an experience that:',
      bullets: [ 
        'Better reflects the brand',
        'Expands on the product upsell capabilities'
      ],
      details: 'This project was developed using Nunjucks, Node, jQuery & Sass. A node module examines the cart contents and places the cart into one of seven tiers, then finds upsells appropriate to the cart tier and item size of the highest-value cart items.',
      thumbnails: [
        {
          title: 'Shopping Cart',
          link: '../cart'
        }
      ]
    }, 
    {
      title: 'Start',
      link: '../holiday-mode',
    }
  ]
  return caseStudies;
}



module.exports.mattress = async function (ctx) {
  const pageUrl = 'mattress';
  const pageId = await utils.getPageId(pageUrl);
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
      pageUrl: pageUrl,
      pageId: pageId,
      gallerySlides: 4,
      galleryDimensions: 0,
      longTitle: false,
      heading: 'The Original Mattress',
      subheading: 'Ships in 1-<span>4</span> business days',
      deliveryWindowText: 'Ships in 1-4 business days',
      ratings: [
        { 
          stars: true,
          total: await utils.numberWithCommas(5555),
          average: 4.7,
          googleTotal: await utils.numberWithCommas(2345),
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
      prevPage: 'tiktok',
      nextPage: 'frame',
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
      productType: 'frame',
      gallerySlides: 5,
      galleryDimensions: 5,
      longTitle: false,
      heading: utils.getProductName('UU'),
      subheading: 'Elevate your bedroom with a modern classic.',
      ratings: [
        { stars: true,
          total: await utils.numberWithCommas(3500),
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
      productImage: '../assets/frame/gallery-straighton-withluxe-TU-CS.jpg',
      financingSection: true,
      scripts: [
        'nav',
        'modal.bootstrap',
        'swiper-lite',
        'tippy',
        'lazysizes.min'
      ],
      header: ctx.q[0].header,
      pageId: ctx.q[0].pageId,
      pageUrl: ctx.q[0].pageUrl,
      prevPage: ctx.q[0].prevPage,
      nextPage: ctx.q[0].nextPage,
      headerTitle: ctx.q[0].headerTitle,
      headerIntro: ctx.q[0].headerIntro,
      headerBullets: ctx.q[0].headerBullets
  }]
  return p;
}


module.exports.sheets = async function (ctx) {
  const discountActual = 70;
  const dcDiscountActual = 20;
  const pcDiscountActual = 20;
  const skus31 = await utils.getProductSkus(ctx, 31, dcDiscountActual);
  const skus32 = await utils.getProductSkus(ctx, 32, dcDiscountActual);
  const skus33 = await utils.getProductSkus(ctx, 33, dcDiscountActual);
  const skus34 = await utils.getProductSkus(ctx, 34, pcDiscountActual);
  const skus35 = await utils.getProductSkus(ctx, 35, pcDiscountActual);
  const skus36 = await utils.getProductSkus(ctx, 36, pcDiscountActual);
  const duvetCoverSkus = skus31.concat(skus32).concat(skus33);
  const pillowcaseSkus = skus34.concat(skus35).concat(skus36);
  const p = [
    {
      skus: await utils.getProductSkus(ctx, 30, discountActual),
      catIds: [31],
      defaultCatId: 31,
      defaultProductType: 'OC',
      catSizes: 6,
      productType: 'sheets',
      gallerySlides: 5,
      galleryDimensions: 0,
      galleryVideo: true,
      galleryVideoSlide: 5,
      galleryVideoSource: '',
      galleryVideoUrl: ['../assets/sheets/organic-sheets-16x9-web.mp4?auto=format,compress'],
      galleryVideoPoster: '../assets/sheets/organic-sheets-16x9-web.mp4?fm=jpg&w=840&frame=1',
      longTitle: false,
      heading: 'The Organic Cotton Sheets',
      subheading: '100% organic cotton sheets crafted with comfort, wellness, and luxury in mind.',
      ratings: [
        { 
          stars: true,
          total: await utils.numberWithCommas(6543),
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
      productImage: '../assets/sheets-wh-01.jpg',
      financingSection: false,
      upsellModal: false,
      upsellModalCatId: 0,
      upsell: true,
      upsellListTitle: 'Complete Your Bed',
      upsellListSubtitle: 'Everything you need for great sleep',
      upsellMinimum: 1,
      upsells: [
        {
          skus: duvetCoverSkus,
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
          skus: pillowcaseSkus,
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
      header: ctx.q[0].header,
      pageId: ctx.q[0].pageId,
      pageUrl: ctx.q[0].pageUrl,
      prevPage: ctx.q[0].prevPage,
      nextPage: ctx.q[0].nextPage,
      headerTitle: ctx.q[0].headerTitle,
      headerIntro: ctx.q[0].headerIntro,
      headerBullets: ctx.q[0].headerBullets
    }]
  return p;
}