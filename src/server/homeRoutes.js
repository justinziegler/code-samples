const nunjucks = require('nunjucks');
const utils = require('./../lib/utils');
const content = require('../lib/content');
const pageConfig = require('../lib/page-config');
const biz = require('../lib/biz');
const views = './src/client/views/'; 



const render = function (path, params = {}) {
  return new Promise(function(resolve, reject) {
    const fs = require('fs');
    // const dir = './src/client/views/';
    const ext = '.html';
    fs.readFile(views + path + ext, 'utf8', function (error, content) {
        
      if (error) return reject(error);
      
      nunjucks.configure({
          autoescape: true,
      });
      resolve(nunjucks.renderString(
          content, params
      ));
        
    });
  });
};

const Router = require('@koa/router');
let title = 'Case Studies';
const currentYear = new Date().getFullYear();

async function home(ctx, next) {
  const pageUrl = '/';
  const nextPage = await utils.getNextPage(pageUrl);
  // const caseStudies = await pageConfig.home(ctx);

  const directory = await utils.getDirectory();
  const pageDetails = await content.getPageDetails(ctx);
  const navLinks = await content.getNavLinks(ctx);
  let caseStudies = [];
  let pageId = -1;
  let startHereUrl;
  directory.forEach(url => {
    pageId++
    pageDetails.forEach(page => {
      if (startHereUrl === undefined) {
        startHereUrl = page.url;
      }
      if (url === page.url) {
        const item = {
          url: url,
          pageId: pageId,
          title: page.title,
          intro: page.intro,
          background: page.background
        }
        caseStudies.push(item);
      }
    })
  })
  const startHere = {
    url: startHereUrl,
    title: 'Start from Beginning »',
    background: '../assets/holiday-promotion/collage01.jpg'
  }
  caseStudies.push(startHere);
  ctx.body = await render('index', {
    title: title,
    p: {
      header: true,
      headerTitle: 'Home',
      headerIntro: [
        'I am a web developer who spent the last few years building and refining the web presence of a bedding startup. After joining the company in its first year, I worked on every corner of the website as the product catalog slowly grew from one line to more than fifteen.',
        'The links included here contain a few of my favorite recent projects. Code samples for everything on this site can be found on <a href="https://github.com/justinziegler" target="_blank" tabindex="0">my Github</a>. Thanks for visiting!'
      ],
      pageUrl: pageUrl,
      pageId: 0,
      nextPage: nextPage,
      navLinks: navLinks
    },
    caseStudies: caseStudies,
    scripts: [
      'modal.bootstrap',
      'lazysizes.min',
      'lazysizes.unveilhooks'
    ],
  });
}

async function holidayMode(ctx, next) {
  const pageUrl = 'holiday-mode';
  const pageId = await utils.getPageId(pageUrl);
  const prevPage = await utils.getPrevPage(pageUrl);
  const nextPage = await utils.getNextPage(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  ctx.body = await render('01_holiday_mode', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: prevPage,
      nextPage: nextPage,
      navLinks: navLinks,
      headerTitle: 'Holiday Mode',
      headerIntro: [
        'Several times a year we would theme key pages on the site for different holiday sales, then return them to normal after the holiday. In an effort to make this process less time-consuming, I developed Holiday Mode for the site. With Holiday Mode, we were able to switch between regular and holiday content by simply updating one variable.',
        'Use the links below to toggle between the two versions.'
      ],
      toggleLinks: [
        {
          link: 'holiday-mode-enabled',
          title: 'Holiday Mode On',
        },
        {
          link: 'holiday-mode-disabled',
          title: 'Holiday Mode Off',
        }
      ]
    }
  });
}

async function holidayModeEnabled(ctx, next) {
  let monthlyPayment = 0;
  let name;
  const skus = await utils.getProductSkus(ctx, 1, ctx.discountActual);
  skus.forEach(item => {
    if (item.sku == 'LU-MA-WH-TW')  {
      monthlyPayment = item.monthlyPayment;
      name = item.name;
    } 
  })
  ctx.body = await render('01b_holiday_mode_content', {
    title: title,
    mattressDiscount: 200,
    monthlyPayment: monthlyPayment,
    name: name,
    holidaySale: true,
    scripts: [
      'modal.bootstrap',
      'collapse.bootstrap',
      'lazysizes.min',
      'swiper-lite',
      'promotion-holiday',
    ],
  });
}

async function holidayModeDisabled(ctx, next) {
  const pageUrl = 'holiday-mode-disabled';
  let monthlyPayment = 0;
  let name;
  const skus = await utils.getProductSkus(ctx, 1, ctx.discountActual);
  skus.forEach(item => {
    if (item.sku == 'LU-MA-WH-TW')  {
      monthlyPayment = item.monthlyPayment;
      name = item.name;
    } 
  })
  ctx.body = await render('01b_holiday_mode_content', {
    title: title,
    mattressDiscount: 200,
    monthlyPayment: monthlyPayment,
    name: name,
    holidaySale: false,
    scripts: [
      'modal.bootstrap',
      'collapse.bootstrap',
      'lazysizes.min',
      'swiper-lite',
      'promotion-holiday',
    ],
  });
}

async function valueProps(ctx, next) {
  const items = await content.valueProps(ctx);
  const pageUrl = 'value-props';
  const pageId = await utils.getPageId(pageUrl);
  const prevPage = await utils.getPrevPage(pageUrl);
  const nextPage = await utils.getNextPage(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  ctx.body = await render('02_value_propositions', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: prevPage,
      nextPage: nextPage,
      navLinks: navLinks,
      headerTitle: 'Value Propositions',
      headerIntro: [
        'I would often be tasked with developing page sections that looked and functioned differently depending on device type. This project came about from a desire to build something lightweight that allowed for alternate functionality on different devices. This page features a swipe-able slideshow on mobile and a content accordion on larger screens. Check out the <a href="mattress-animation">following page</a> for another example. '
      ]
    },
    items: items
  });
}


async function mattressAnimation(ctx, next) {
  const layers = await content.mattressAnimation(ctx);
  const pageUrl = 'mattress-animation';
  const pageId = await utils.getPageId(pageUrl);
  const prevPage = await utils.getPrevPage(pageUrl);
  const nextPage = await utils.getNextPage(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  ctx.body = await render('03_mattress_animation', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: prevPage,
      nextPage: nextPage,
      navLinks: navLinks,
      headerTitle: 'Exploded Product View',
      headerIntro: [
        'This is another example utilizing the slideshow script from the <a href="value-props">previous page</a>. On display here is a swipe-able slideshow of text content with a corresponding animation of mattress layers.'
      ]
    },
    layers: layers
  });
}

async function tiktok(ctx, next) {
  const slides = await content.tkSlides(ctx);
  const tweets = await content.tkTweets(ctx);
  const faqs = await content.tkFaqs(ctx);
  const pageUrl = 'tiktok';
  const pageId = await utils.getPageId(pageUrl);
  const prevPage = await utils.getPrevPage(pageUrl);
  const nextPage = await utils.getNextPage(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  ctx.body = await render('04_tiktok', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: prevPage,
      nextPage: nextPage,
      navLinks: navLinks,
      headerTitle: 'Tiktok Mimic',
      headerIntro: [
        'This promotion was created to engage social media users, and it turned out to be a hit. Features on display include:'
      ],
      headerBullets: [
        'Slideshow of a dozen short videos that auto-advance when complete',
        'Popup overlays of user reviews and FAQs',
        'Email capture redirect to main website'
      ]
    },
    slides: slides,
    tweets: tweets,
    faqs: faqs,
    mattressDiscount: 200,
    scripts: [
      'modal.bootstrap',
      'swiper-lite',
      'lazysizes.min',
      'lazysizes.unveilhooks'
    ],
  });
}

async function productDisplay(ctx, next) {
  const pageUrl = 'product-display';
  const pageId = await utils.getPageId(pageUrl);
  const prevPage = await utils.getPrevPage(pageUrl);
  const nextPage = await utils.getNextPage(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  ctx.body = await render('05_product_display', {
    title: 'Product Display Template',
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: prevPage,
      nextPage: nextPage,
      navLinks: navLinks,
      headerTitle: 'Product Display Template',
      headerIntro: [
        'The links below highlight the features of a Product Display module that I developed to support a line of bedding products.',
        '<span class="toggle-blurb" data-target="product-display-mattress"><strong>Mattress:</strong> This is the basic configuration, which allows users to add a product to cart and optionally add an upsell from resulting modal.</span>', 
        '<span class="toggle-blurb" data-target="product-display-frame" style="display: none;"><strong>Bed Frame:</strong> This configuration offers a choice between fabric colors and product lines.</span>',
        '<span class="toggle-blurb" data-target="product-display-sheets" style="display: none;"><strong>Sheets:</strong> This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The upsells update their currently offered product size when the main product size selection changes.</span>',
        'Toggle between different configurations with the links below.'
      ],
      toggleLinks: [
        {
          link: 'product-display-mattress',
          title: 'Mattress',
        },
        {
          link: 'product-display-frame',
          title: 'Bed Frame',
        },
        {
          link: 'product-display-sheets',
          title: 'Sheets',
        }
      ]
    }
  });
}

async function productDisplayMattress(ctx, next) {
  ctx.discountActual = 200;
  ctx.upsellDiscountActual = 0;
  ctx.skus = await utils.getProductSkus(ctx, 1, ctx.discountActual);
  ctx.upsellSkus = await utils.getProductSkus(ctx, 8, ctx.upsellDiscountActual);
  const p = await pageConfig.mattress(ctx);
  const ourWay = await content.ourWay(ctx);

  ctx.body = await render('05b_product_display_mattress', {
    p: p[0],
    title: 'Product Page example',
    discountActual: ctx.discountActual,
    upsellDiscountActual: ctx.upsellDiscountActual,
    ourWay: ourWay
  });
}

async function productDisplayFrame(ctx, next) {
  const discountActual = 200;
  ctx.discountActual = discountActual;
  const upholsteredSkus = await utils.getProductSkus(ctx, 40, discountActual);
  const tuftedSkus = await utils.getProductSkus(ctx, 41, discountActual);
	ctx.skus = upholsteredSkus.concat(tuftedSkus);
  const p = await pageConfig.frame(ctx);

  ctx.body = await render('05c_product_display_frame', {
    p: p[0],      
    title: 'Product Page example',
    discountActual: discountActual
  })
}

async function productDisplaySheets(ctx, next) {
  // const pageUrl = 'sheets';
  const discountActual = 70;
  ctx.q = [
    {
      header: false,
      headerTitle: 'Product Display Template',
      headerIntro: [
        'This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The features on display here include:'
      ],
      headerBullets: [
        'The upsells update their currently offered product size when the main product size selection changes. In this case, all 3 product groups have differing numbers of corresponding sizes that all need to be matched. Users can then select the upsell item\'s color and fabric type. Upsell color and fabric selections persist if the user changes the main product size selection',
        'Each upsell has an associated modal containing product details and a gallery of product images.',
        'The financing modal (accessible by hovering over the question mark icon below the color swatches) updates with each product selection change, including adding upsells.',
        '<a href="https://lull.com/organic-cotton-sheets" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    }
  ]
  const p = await pageConfig.sheets(ctx);

  ctx.body = await render('05d_product_display_sheets', {
    p: p[0],
    title: 'Product Page example',
    discountActual: discountActual
  });
}



async function bedFrame(ctx, next) {
  const pageUrl = 'bed-frame';
  const pageId = await utils.getPageId(pageUrl);
  const prevPage = await utils.getPrevPage(pageUrl);
  const nextPage = await utils.getNextPage(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  const discountActual = 200;
  ctx.discountActual = discountActual;
  const upholsteredSkus = await utils.getProductSkus(ctx, 40, discountActual);
  const tuftedSkus = await utils.getProductSkus(ctx, 41, discountActual);
	ctx.skus = upholsteredSkus.concat(tuftedSkus);
  ctx.q = [
    {
      header: true,
      pageId: pageId,
      pageUrl: pageUrl,
      prevPage: prevPage,
      nextPage: nextPage,
      navLinks: navLinks,
      headerTitle: 'Bed Frame PDP',
      headerIntro: [
        'This product detail page features a number of interactive elements, including a slide-able product comparison module that I also developed the photography for.'
      ]
    }
  ]
  const p = await pageConfig.frame(ctx);
  const frameReviews = await content.frameReviews(ctx);

  const ourWay = await content.ourWay(ctx);
  const suggestedItems = await content.suggestedItems(ctx);
  const faq = await content.faq(ctx);
  let monthlyPayment = 0;
  let name;
  upholsteredSkus.forEach(item => {
    if (item.sku == 'LU-UU-DS-TW')  {
      monthlyPayment = item.monthlyPayment;
      name = item.name;
    } 
  })
  ctx.body = await render('06_bed_frame', {
    p: p[0],      
    title: 'Product Page example',
    discountActual: discountActual,
    ourWay: ourWay,
    monthlyPayment: monthlyPayment,
    name: name,
    frameReviews: frameReviews,
    suggestedItems: suggestedItems,
    faq: faq,
    currentYear: currentYear
  })
}

async function sheets(ctx, next) {
  const pageUrl = 'sheets';
  const pageId = await utils.getPageId(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  const discountActual = 70;
  const valueProps = await content.valuePropsSheets(ctx);
  const reviews = await content.reviewsSheets(ctx);
  const additionalDetails = await content.additionalDetails(ctx);
  const suggestedItems = await content.suggestedItems(ctx);
  const faqs = await content.faqs(ctx);
  ctx.q = [
    {
      header: true,
      pageId: pageId,
      pageUrl: pageUrl,
      prevPage: 'bed-frame',
      nextPage: 'cart',
      navLinks: navLinks,
      headerTitle: 'Sheets PDP',
      headerIntro: [
        'This product detail page allows users to easily add a custom combination of sheets, duvet cover and pillowcases.'
      ]
    }
  ]
  const p = await pageConfig.sheets(ctx);
  
  ctx.body = await render('07_sheets', {
    p: p[0],
    title: 'Product Page example',
    discountActual: discountActual,
    valueProps: valueProps,
    reviews: reviews,
    additionalDetails: additionalDetails,
    suggestedItems: suggestedItems,
    faqs: faqs
  });
}

async function cart(ctx, next) {
  const pageUrl = 'cart';
  const pageId = await utils.getPageId(pageUrl);
  const navLinks = await content.getNavLinks(ctx);
  let cartItems = [];
  const mattressSkus = await utils.getProductSkus(ctx, 1, 300);
  cartItems.push(mattressSkus[5]);
  const sheetsSkus = await utils.getProductSkus(ctx, 30, 30);
  sheetsSkus.forEach(item => {
    if (item.size === 'CK' && item.color === 'GG') {
      cartItems.push(item);
    }
  })
  const u = await utils.getUpsells(cartItems, ctx);
  const upsells = u.result[0];
  ctx.body = await render('08_cart', {
    title: 'Shopping Cart',
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: 'sheets',
      navLinks: navLinks,
      headerTitle: 'Shopping Cart',
      headerIntro: [
        'This page was A/B tested against our existing page for over a year. While it was ultimately shelved, some of the features developed here were later ported over to the existing cart. Features on display here include:'
      ],
      headerBullets: [
        'Upsells are preset to the same size as the primary cart item, but users can select another size if desired.',
        'Upsells each have a corresponding modal with an image gallery and product details.',
        'Adding and removing upsells to the cart is visually fluid.'
      ]
    },
    cart: {
      items: cartItems,
      upsells: upsells
    },
    scripts: [
      'modal.bootstrap',
      'swiper-lite',
      'lazysizes.min'
    ],
  })
}

const router = new Router();
router.get('/', home);

router.get('/holiday-mode', holidayMode);
router.get('/holiday-mode-enabled', holidayModeEnabled);
router.get('/holiday-mode-disabled', holidayModeDisabled);
router.get('/value-props', valueProps);
router.get('/mattress-animation', mattressAnimation);
router.get('/tiktok', tiktok);

router.get('/product-display', productDisplay);

router.get('/product-display-mattress', productDisplayMattress);
router.get('/product-display-mattress/twin', productDisplayMattress);
router.get('/product-display-mattress/twin-xl', productDisplayMattress);
router.get('/product-display-mattress/full', productDisplayMattress);
router.get('/product-display-mattress/queen', productDisplayMattress);
router.get('/product-display-mattress/king', productDisplayMattress);
router.get('/product-display-mattress/cal-king', productDisplayMattress);
router.get('/product-display-mattress/california-king', productDisplayMattress);

router.get('/product-display-frame', productDisplayFrame);
router.get('/product-display-frame/twin', productDisplayFrame);
router.get('/product-display-frame/twin-xl', productDisplayFrame);
router.get('/product-display-frame/full', productDisplayFrame);
router.get('/product-display-frame/queen', productDisplayFrame);
router.get('/product-display-frame/king', productDisplayFrame);
router.get('/product-display-frame/cal-king', productDisplayFrame);
router.get('/product-display-frame/california-king', productDisplayFrame);

router.get('/product-display-sheets', productDisplaySheets);
router.get('/product-display-sheets/twin', productDisplaySheets);
router.get('/product-display-sheets/twin-xl', productDisplaySheets);
router.get('/product-display-sheets/full', productDisplaySheets);
router.get('/product-display-sheets/queen', productDisplaySheets);
router.get('/product-display-sheets/king', productDisplaySheets);
router.get('/product-display-sheets/cal-king', productDisplaySheets);
router.get('/product-display-sheets/california-king', productDisplaySheets);

router.get('/bed-frame', bedFrame);
router.get('/bed-frame/twin', bedFrame);
router.get('/bed-frame/twin-xl', bedFrame);
router.get('/bed-frame/full', bedFrame);
router.get('/bed-frame/queen', bedFrame);
router.get('/bed-frame/king', bedFrame);
router.get('/bed-frame/cal-king', bedFrame);
router.get('/bed-frame/california-king', bedFrame);

router.get('/sheets', sheets);
router.get('/sheets/twin', sheets);
router.get('/sheets/twin-xl', sheets);
router.get('/sheets/full', sheets);
router.get('/sheets/queen', sheets);
router.get('/sheets/king', sheets);
router.get('/sheets/cal-king', sheets);
router.get('/sheets/california-king', sheets);




router.get('/cart', cart);

module.exports = router;