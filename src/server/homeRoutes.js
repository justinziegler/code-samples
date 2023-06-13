const nunjucks = require('nunjucks');
const utils = require('./../lib/utils');
const content = require('../lib/content');
const productDetails = require('../lib/product-config');
// const ourWay = require { ourWay } from 

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

async function home(ctx, next) {
  ctx.body = await render('index', {
      p: {
        pageUrl: '/',
        nextPage: 'mattress',
      },
      caseStudies: [
        {
          title: 'Product Display Template',
          intro: 'The following pages highlight the features of a Product Display template that I developed to support a line of bedding products. This project came about from a desire to:',
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
  });
}

async function mattress(ctx, next) {
  ctx.discountActual = 200;
  ctx.upsellDiscountActual = 0;
  ctx.skus = await utils.getProductSkus(ctx, 1, ctx.discountActual);
  ctx.upsellSkus = await utils.getProductSkus(ctx, 8, ctx.upsellDiscountActual);
  const p = await productDetails.mattress(ctx);
  const ourWay = await content.ourWay(ctx);

  ctx.body = await render('product_mattress', {
    p: p[0],
    title: 'Product Page example',
    discountActual: ctx.discountActual,
    upsellDiscountActual: ctx.upsellDiscountActual,
    ourWay: ourWay,
    prevPage: '../',
    nextPage: '../frame',
    headerTitle: 'Product Template Example with Upsell Modal',
    headerContent: 'This page illustrates some of the core features of the versatile product template I developed. (Add bullets'
  });
}

async function frame(ctx, next) {
  const discountActual = 200;
  ctx.discountActual = discountActual;
  const upholsteredSkus = await utils.getProductSkus(ctx, 40, discountActual);
  const tuftedSkus = await utils.getProductSkus(ctx, 41, discountActual);
	ctx.skus = upholsteredSkus.concat(tuftedSkus);
  const p = await productDetails.frame(ctx);

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
  const p = await productDetails.sheets(ctx);

  ctx.body = await render('product_sheets', {
    p: p[0],
    title: 'Product Page example',
    discountActual: discountActual,
  });
}

async function mattressAnimation(ctx, next) {
  ctx.body = await render('promotion_mattress_animation', {
    layers: [
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
  });
}

async function valueProps(ctx, next) {
  ctx.body = await render('promotion_value_propositions', {
    items: [
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
  });
}

const router = new Router();
router.get('/', home);
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

router.get('/mattress-animation', mattressAnimation);
router.get('/value-props', valueProps);

module.exports = router;