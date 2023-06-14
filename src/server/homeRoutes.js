const nunjucks = require('nunjucks');
const utils = require('./../lib/utils');
const content = require('../lib/content');
const pageConfig = require('../lib/page-config');

const render = function (path, params = {}) {
  return new Promise(function(resolve, reject) {
    const fs = require('fs');
    const dir = './src/client/views/';
    const ext = '.html';
    fs.readFile(dir + path + ext, 'utf8', function (error, content) {
        
      if (error) return reject(error);
      
      nunjucks.configure({
          autoescape: true
      });
      resolve(nunjucks.renderString(
          content, params
      ));
        
    });
  });
};

const Router = require('@koa/router');
let title = 'Case Studies'

async function home(ctx, next) {
  const caseStudies = await pageConfig.home(ctx);
  ctx.body = await render('index', {
    title: title,
    p: {
      pageUrl: '/',
      nextPage: 'value-props',
    },
    caseStudies: caseStudies,
    scripts: [
      'nav',
    ],
  });
}

async function valueProps(ctx, next) {
  const items = await pageConfig.valueProps(ctx);
  ctx.body = await render('promotion_value_propositions', {
    title: title,
    p: {
      prevPage: '../',
      nextPage: 'mattress-animation',
      headerTitle: 'Lightweight Multi-use Slideshow',
      headerIntro: 'This example illustrates one of the more common use cases that lead me to develop this script. In this case, the section is a swipe-able slideshow on mobile screens and an accordion on larger screens. In addition, I did the Photoshop work required to provide a suitable backdrop to the text content.',
      headerBullets: [
        '<a href="https://lull.com/luxe-hybrid" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    },
    items: items,
    scripts: [
      'nav',
    ],
  });
}

async function mattressAnimation(ctx, next) {
  const layers = await pageConfig.mattressAnimation(ctx);
  ctx.body = await render('promotion_mattress_animation', {
    title: title,
    p: {
      pageUrl: 'mattress-animation',
      prevPage: 'value-props',
      nextPage: 'tiktok',
      headerTitle: 'Lightweight Multi-use Slideshow',
      headerIntro: 'This is another example of the slideshow script highlighted on the previous page. In this instance, navigating between slides also steps through an animation that showcases each layer of a mattress.',
      headerBullets: [
        '<a href="https://lull.com/original-premium-mattress" target="_blank" rel="noopener noreferrer">See it live</a> &raquo;'
      ]
    },
    layers: layers
  });
}

async function tiktok(ctx, next) {
  const slides = await pageConfig.tkSlides(ctx);
  const tweets = await pageConfig.tkTweets(ctx);
  const faqs = await pageConfig.tkFaqs(ctx);
  ctx.body = await render('promotion_tiktok', {
    title: title,
    p: {
      pageUrl: 'tiktok',
      prevPage: 'mattress-animation',
      nextPage: 'mattress',
      headerTitle: 'Tiktok Marketing Mimic',
      headerIntro: 'Most marketing campaigns I\'ve worked on would get refined over time to increase their overall chances of success, but that wasn\'t the case here. Very early after this page launched, engagement and sales data showed that the campaign was a hit with users. The features on display include:',
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
      'nav',
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
  const discountActual = 200;
  ctx.discountActual = discountActual;
  const upholsteredSkus = await utils.getProductSkus(ctx, 40, discountActual);
  const tuftedSkus = await utils.getProductSkus(ctx, 41, discountActual);
	ctx.skus = upholsteredSkus.concat(tuftedSkus);
  const p = await pageConfig.frame(ctx);

  ctx.body = await render('product_frame', {
    p: p[0],      
    title: 'Product Page example',
    discountActual: discountActual
  })
}

async function sheets(ctx, next) {
  const discountActual = 70;
  const dcDiscountActual = 20;
  const pcDiscountActual = 20;
  const skus = await utils.getProductSkus(ctx, 30, discountActual);
  const skus31 = await utils.getProductSkus(ctx, 31, dcDiscountActual);
	const skus32 = await utils.getProductSkus(ctx, 32, dcDiscountActual);
	const skus33 = await utils.getProductSkus(ctx, 33, dcDiscountActual);
	const skus34 = await utils.getProductSkus(ctx, 34, pcDiscountActual);
	const skus35 = await utils.getProductSkus(ctx, 35, pcDiscountActual);
	const skus36 = await utils.getProductSkus(ctx, 36, pcDiscountActual);
	const duvetCoverSkus = skus31.concat(skus32).concat(skus33);
	const pillowcaseSkus = skus34.concat(skus35).concat(skus36);
	ctx.skus = skus;
	ctx.duvetCoverSkus = duvetCoverSkus;
	ctx.pillowcaseSkus = pillowcaseSkus;
  const p = await pageConfig.sheets(ctx);

  ctx.body = await render('product_sheets', {
    p: p[0],
    title: 'Product Page example',
    discountActual: discountActual,
  });
}

const router = new Router();
router.get('/', home);

router.get('/value-props', valueProps);
router.get('/mattress-animation', mattressAnimation);
router.get('/tiktok', tiktok);

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

router.get('/frame', frame);
router.get('/frame/twin', frame);
router.get('/frame/twin-xl', frame);
router.get('/frame/full', frame);
router.get('/frame/queen', frame);
router.get('/frame/king', frame);
router.get('/frame/cal-king', frame);
router.get('/frame/california-king', frame);

module.exports = router;