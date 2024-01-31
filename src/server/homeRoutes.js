const nunjucks = require('nunjucks');
const utils = require('./../lib/utils');
const content = require('../lib/content');
const pageConfig = require('../lib/page-config');
const biz = require('../lib/biz');

const render = function (path, params = {}) {
  return new Promise(function(resolve, reject) {
    const fs = require('fs');
    const dir = './src/client/views/';
    const ext = '.html';
    fs.readFile(dir + path + ext, 'utf8', function (error, content) {
        
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
  const caseStudies = await pageConfig.home(ctx);
  ctx.body = await render('index', {
    title: title,
    p: {
      header: true,
      pageUrl: '/',
      nextPage: 'holiday-mode',
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
  ctx.body = await render('promotion_holiday_mode', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: '../',
      nextPage: 'value-props',
      headerTitle: 'Holiday Mode',
      headerIntro: `<a href="#" class="mode-toggle">Click here</a> to toggle the page to its <span class="mode-toggle-text">'evergreen'</span> content.`,
      headerBullets: [
        '<a href="#" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    }
  });
}

async function holidayModeEnabled(ctx, next) {
  const pageUrl = 'holiday-mode-enabled';
  let monthlyPayment = 0;
  let name;
  const skus = await utils.getProductSkus(ctx, 1, ctx.discountActual);
  skus.forEach(item => {
    if (item.sku == 'LU-MA-WH-TW')  {
      monthlyPayment = item.monthlyPayment;
      name = item.name;
    } 
  })
  ctx.body = await render('promotion_holiday_mode_example', {
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
  ctx.body = await render('promotion_holiday_mode_example', {
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
  ctx.body = await render('promotion_value_propositions', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: 'holiday-mode',
      nextPage: 'mattress-animation',
      headerTitle: 'Lightweight Multi-use Slideshow',
      headerIntro: 'This example illustrates one of the more common use cases that lead me to develop this script. In addition, I did the Photoshop work required to provide a suitable backdrop to the text content. Features on display here include:',
      headerBullets: [
        'An auto-playing swipe-able slideshow on mobile screens',
        'A content accordion on larger screens',
        '<a href="https://lull.com/luxe-hybrid" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    },
    items: items
  });
}


async function mattressAnimation(ctx, next) {
  const layers = await content.mattressAnimation(ctx);
  const pageUrl = 'mattress-animation';
  const pageId = await utils.getPageId(pageUrl);
  ctx.body = await render('promotion_mattress_animation', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: 'value-props',
      nextPage: 'tiktok',
      headerTitle: 'Lightweight Multi-use Slideshow',
      headerIntro: 'This is another example of the slideshow script highlighted on the previous page. In this instance, . Features on display here include:',
      headerBullets: [
        'Swipe-able slideshow of text content',
        'Navigating between slides also steps through an animation that showcases each layer of a mattress',
        'Alternate mobile layout',
        '<a href="https://lull.com/original-premium-mattress" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
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
  ctx.body = await render('promotion_tiktok', {
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: 'mattress-animation',
      nextPage: 'product-display',
      headerTitle: 'Tiktok Mimic',
      headerIntro: 'Most marketing campaigns I\'ve worked on would get refined over time to increase their overall chances of success, but that wasn\'t the case here. Very early after this page launched, engagement and sales data showed that the campaign was a hit. The features on display include:',
      headerBullets: [
        'Slideshow of a dozen short videos that auto-advance when complete',
        'Popup overlays of user reviews and FAQs',
        'Email capture redirect to main website',
        '<a href="https://lull.com/tksale" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
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

async function mattress(ctx, next) {
  ctx.discountActual = 200;
  ctx.upsellDiscountActual = 0;
  ctx.skus = await utils.getProductSkus(ctx, 1, ctx.discountActual);
  ctx.upsellSkus = await utils.getProductSkus(ctx, 8, ctx.upsellDiscountActual);
  const p = await pageConfig.mattress(ctx);
  const ourWay = await content.ourWay(ctx);

  ctx.body = await render('product_mattress', {
    p: p[0],
    title: 'Product Page example',
    discountActual: ctx.discountActual,
    upsellDiscountActual: ctx.upsellDiscountActual,
    ourWay: ourWay
  });
}

async function frame(ctx, next) {
  const pageUrl = 'frame';
  const pageId = await utils.getPageId(pageUrl);
  const discountActual = 200;
  ctx.discountActual = discountActual;
  const upholsteredSkus = await utils.getProductSkus(ctx, 40, discountActual);
  const tuftedSkus = await utils.getProductSkus(ctx, 41, discountActual);
	ctx.skus = upholsteredSkus.concat(tuftedSkus);
  ctx.q = [
    {
      pageId: pageId,
      pageUrl: pageUrl,
      headerTitle: '!!!!!!!!!!!!!!!',
      headerIntro: 'Most marketing campaigns I\'ve worked on would get refined over time to increase their overall chances of success, but that wasn\'t the case here. Very early after this page launched, engagement and sales data showed that the campaign was a hit. The features on display include:',
      headerBullets: [
        'Slideshow of a dozen short videos that auto-advance when complete',
        'Popup overlays of user reviews and FAQs',
        'Email capture redirect to main website',
        '<a href="https://lull.com/tksale" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    }
  ]
  const p = await pageConfig.frame(ctx);

  ctx.body = await render('product_frame', {
    p: p[0],      
    title: 'Product Page example',
    discountActual: discountActual
  })
}

async function sheets(ctx, next) {
  const pageUrl = 'sheets';
  const pageId = await utils.getPageId(pageUrl);
  const discountActual = 70;
  ctx.q = [
    {
      header: false,
      pageId: pageId,
      pageUrl: pageUrl,
      headerTitle: 'Product Display Template',
      headerIntro: 'This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The features on display here include:',
      headerBullets: [
        'The upsells update their currently offered product size when the main product size selection changes. In this case, all 3 product groups have differing numbers of corresponding sizes that all need to be matched. Users can then select the upsell item\'s color and fabric type. Upsell color and fabric selections persist if the user changes the main product size selection',
        'Each upsell has an associated modal containing product details and a gallery of product images.',
        'The financing modal (accessible by hovering over the question mark icon below the color swatches) updates with each product selection change, including adding upsells.',
        '<a href="https://lull.com/organic-cotton-sheets" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    }
  ]
  const p = await pageConfig.sheets(ctx);

  ctx.body = await render('product_sheets', {
    p: p[0],
    title: 'Product Page example',
    discountActual: discountActual
  });
}

async function productDisplay(ctx, next) {
  const pageUrl = 'product-display';
  const pageId = await utils.getPageId(pageUrl);
  ctx.body = await render('product_display', {
    title: 'Product Display Template',
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: 'tiktok',
      nextPage: 'frame-full',
      headerTitle: 'Product Display Template',
      headerIntro: ``,
      toggleLinks: [
        {
          link: 'mattress',
          title: 'Mattress',
        },
        {
          link: 'frame',
          title: 'Bed Frame',
        },
        {
          link: 'sheets',
          title: 'Sheets',
        }
      ]
    }
  });
}

async function frameFull(ctx, next) {
  const pageUrl = 'frame-full';
  const pageId = await utils.getPageId(pageUrl);
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
      prevPage: 'frame-full',
      nextPage: 'sheets-full',
      headerTitle: '!!!!!!!!!!!!!!!',
      headerIntro: 'Most marketing campaigns I\'ve worked on would get refined over time to increase their overall chances of success, but that wasn\'t the case here. Very early after this page launched, engagement and sales data showed that the campaign was a hit. The features on display include:',
      headerBullets: [
        'Slideshow of a dozen short videos that auto-advance when complete',
        'Popup overlays of user reviews and FAQs',
        'Email capture redirect to main website',
        '<a href="https://lull.com/tksale" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
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
  ctx.body = await render('product_frame_full', {
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

async function sheetsFull(ctx, next) {
  const pageUrl = 'sheets-full';
  const pageId = await utils.getPageId(pageUrl);
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
      prevPage: 'frame-full',
      nextPage: 'cart',
      headerTitle: 'Full Product Display Template',
      headerIntro: 'This configuration sorts through 42 product skus and over 100 upsell skus from 6 product lines. The features on display here include:',
      headerBullets: [
        'The upsells update their currently offered product size when the main product size selection changes. In this case, all 3 product groups have differing numbers of corresponding sizes that all need to be matched. Users can then select the upsell item\'s color and fabric type. Upsell color and fabric selections persist if the user changes the main product size selection',
        'Each upsell has an associated modal containing product details and a gallery of product images.',
        'The financing modal (accessible by hovering over the question mark icon below the color swatches) updates with each product selection change, including adding upsells.',
        '<a href="https://lull.com/organic-cotton-sheets" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    }
  ]
  const p = await pageConfig.sheets(ctx);
  
  ctx.body = await render('product_sheets_full', {
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
  ctx.body = await render('checkout_cart', {
    title: 'Shopping Cart',
    title: title,
    p: {
      header: true,
      pageUrl: pageUrl,
      pageId: pageId,
      prevPage: 'sheets-full',
      headerTitle: 'Shopping Cart',
      headerIntro: 'This page was A/B tested against our existing page for over a year. While it was ultimately shelved, some of the features developed here were later ported over to the existing cart. Features on display here include:',
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

router.get('/mattress', mattress);
router.get('/mattress/twin', mattress);
router.get('/mattress/twin-xl', mattress);
router.get('/mattress/full', mattress);
router.get('/mattress/queen', mattress);
router.get('/mattress/king', mattress);
router.get('/mattress/cal-king', mattress);
router.get('/mattress/california-king', mattress);

router.get('/sheets', sheets);
router.get('/sheets/twin', sheets);
router.get('/sheets/twin-xl', sheets);
router.get('/sheets/full', sheets);
router.get('/sheets/queen', sheets);
router.get('/sheets/king', sheets);
router.get('/sheets/cal-king', sheets);
router.get('/sheets/california-king', sheets);

router.get('/sheets-full', sheetsFull);
router.get('/sheets-full/twin', sheetsFull);
router.get('/sheets-full/twin-xl', sheetsFull);
router.get('/sheets-full/full', sheetsFull);
router.get('/sheets-full/queen', sheetsFull);
router.get('/sheets-full/king', sheetsFull);
router.get('/sheets-full/cal-king', sheetsFull);
router.get('/sheets-full/california-king', sheetsFull);

router.get('/frame', frame);
router.get('/frame/twin', frame);
router.get('/frame/twin-xl', frame);
router.get('/frame/full', frame);
router.get('/frame/queen', frame);
router.get('/frame/king', frame);
router.get('/frame/cal-king', frame);
router.get('/frame/california-king', frame);

router.get('/frame-full', frameFull);
router.get('/frame-full/twin', frameFull);
router.get('/frame-full/twin-xl', frameFull);
router.get('/frame-full/full', frameFull);
router.get('/frame-full/queen', frameFull);
router.get('/frame-full/king', frameFull);
router.get('/frame-full/cal-king', frameFull);
router.get('/frame-full/california-king', frameFull);

router.get('/cart', cart);

module.exports = router;