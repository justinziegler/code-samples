const nunjucks = require('nunjucks');
const utils = require('./../lib/utils');
const content = require('./../lib/content');
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
        headerTitle: 'Welcome',
        headerContent: 'Description'
      }
  });
}

async function mattress(ctx, next) {
  
  const discountActual = 200;
  const upsellDiscountActual = 0;
  const skus = await utils.getProductSkus(ctx, 1, discountActual);
  const upsellSkus = await utils.getProductSkus(ctx, 8, upsellDiscountActual);
  const ourWay = await content.ourWay(ctx);
  ctx.body = await render('product_mattress', {
    p:
      {
        skus: skus,
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
        gallerySlides: 5,
        galleryDimensions: 0,
        galleryVideo: true,
        galleryVideoSlide: 5,
        galleryVideoUrl: ['https://lull-media.imgix.net/original-premium/original-premium.m4v?auto=format,compress', 'https://lull-media.imgix.net/shop-luxe/Lull_Video01_FHD_2VBR.mp4?auto=format,compress'],
        galleryVideoPoster: 'https://lull-media.imgix.net/original-premium/original-premium.m4v?fm=jpg&w=840&frame=1',
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
        dimensions: [
          { size: 'LU-MA-WH-TW', w: '38"', l: '75"', h: '10"', weight: '50 lbs' },
          { size: 'LU-MA-WH-TX', w: '38"', l: '80"', h: '10"', weight: '53 lbs' },
          { size: 'LU-MA-WH-FL', w: '54"', l: '75"', h: '10"', weight: '63 lbs' },
          { size: 'LU-MA-WH-QU', w: '60"', l: '80"', h: '10"', weight: '74 lbs' },
          { size: 'LU-MA-WH-KG', w: '76"', l: '80"', h: '10"', weight: '93 lbs' },
          { size: 'LU-MA-WH-CK', w: '72"', l: '84"', h: '10"', weight: '93 lbs' },
          { size: 'LU-PM-WH-TW', w: '38"', l: '75"', h: '12"', weight: '65 lbs' },
          { size: 'LU-PM-WH-TX', w: '38"', l: '80"', h: '12"', weight: '68 lbs' },
          { size: 'LU-PM-WH-FL', w: '54"', l: '75"', h: '12"', weight: '91 lbs' },
          { size: 'LU-PM-WH-QU', w: '60"', l: '80"', h: '12"', weight: '108 lbs' },
          { size: 'LU-PM-WH-KG', w: '76"', l: '80"', h: '12"', weight: '142 lbs' },
          { size: 'LU-PM-WH-CK', w: '72"', l: '84"', h: '12"', weight: '141 lbs' },
          { size: 'LU-HY-WH-TW', w: '38"', l: '75"', h: '13"', weight: '65 lbs' },
          { size: 'LU-HY-WH-TX', w: '38"', l: '80"', h: '13"', weight: '68 lbs' },
          { size: 'LU-HY-WH-FL', w: '54"', l: '75"', h: '13"', weight: '91 lbs' },
          { size: 'LU-HY-WH-QU', w: '60"', l: '80"', h: '13"', weight: '108 lbs' },
          { size: 'LU-HY-WH-KG', w: '76"', l: '80"', h: '13"', weight: '142 lbs' },
          { size: 'LU-HY-WH-CK', w: '72"', l: '84"', h: '13"', weight: '141 lbs' }
        ],
        colorSelection: false,
        qtySelection: false,
        maxQty: 1,
        productImage: 'https://lull.imgix.net/gallery-3.jpg?auto=format',
        financingSection: true,
        upsellModal: true,
        upsellModalCatId: 8,
        upsellModalSkus: upsellSkus,
        prevPage: '../',
        nextPage: '../sheets',
        headerTitle: 'Product Template Example with Upsell Modal',
        headerContent: 'This page illustrates some of the core features of the versatile product template I developed. (Add bullets'
      },
    discountActual: discountActual,
    upsellDiscountActual: upsellDiscountActual,
    scripts: [
      'nav',
      'modal.bootstrap',
      'swiper-lite',
      'tippy',
      'lazysizes.min'
    ],
    ourWay: ourWay
  });
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
	ctx.state.skus = skus;
	ctx.state.duvetCoverSkus = duvetCoverSkus;
	ctx.state.pillowcaseSkus = pillowcaseSkus;
  console.log('skus', skus);

  ctx.body = await render('product_sheets', {
    p:
      {
        skus: skus,
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
        dimensions: [
          { size: 'TW', color: 'BW', fitted: '39" x 75" x 15"', flat: '71 x 98"', pillowcase: '20" x 27"' },
          { size: 'TX', color: 'BW', fitted: '39" x 80" x 15"', flat: '71" x 104"', pillowcase: '20" x 27"' },
          { size: 'FL', color: 'BW', fitted: '54" x 75" x 15"', flat: '86" x 98"', pillowcase: '20" x 27"' },
          { size: 'QU', color: 'BW', fitted: '60" x 80" x 15"', flat: '92" x 104"', pillowcase: '20" x 27"' },
          { size: 'KG', color: 'BW', fitted: '78" x 80" x 15"', flat: '110" x 104"', pillowcase: '20" x 37"' },
          { size: 'CK', color: 'BW', fitted: '72" x 84" x 15"', flat: '110" x 104"', pillowcase: '20" x 37"' },
          { size: 'BOX', dimensions: '13" x 9" x 2.5"' }
        ],
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
            review: [
              {
                starTotal: '5',
                title: '',
                content: '',
                reviewer: ''
              }
            ],
            gallerySlides: 7
          }
        ],
        prevPage: '../mattress',
        nextPage: '../frame',
        headerTitle: 'Product Template Example with Color Selection & Upsells',
        headerContent: 'This page sorts through 42 product skus and over 100 upsell skus. The gallery updates when the main product color selection changes, and the upsells update when the main product size selection changes. In this case, all 3 product lines have differing numbers of sizes that need to be matched (6, 3 & 2, respectively). Each upsell has an associated modal containing product details.'
      },
    discountActual: discountActual,
    scripts: [
      'nav',
      'modal.bootstrap',
      'swiper-lite',
      'tippy',
      'lazysizes.min',
    ]
  });
}

async function frame(ctx, next) {
  const discountActual = 200;
  const upholsteredSkus = await utils.getProductSkus(ctx, 40, discountActual);
  const tuftedSkus = await utils.getProductSkus(ctx, 41, discountActual);
	const skus = upholsteredSkus.concat(tuftedSkus);

  ctx.body = await render('product_frame', {
    p:
      {
        skus: skus,
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
            discount: discountActual
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
            total: 3500,
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
        dimensions: [
          { size: 'TW', color: 'DS', w: '42.5"', l: '81"', h: '53"', weight: '80.9 lbs.' },
          { size: 'TX', color: 'DS', w: '42.5"', l: '86"', h: '53"', weight: '82.9 lbs.' },
          { size: 'FL', color: 'DS', w: '57.5"', l: '81"', h: '53"', weight: '107 lbs.' },
          { size: 'QU', color: 'DS', w: '64.5"', l: '86"', h: '53"', weight: '113.3 lbs.' },
          { size: 'KG', color: 'DS', w: '80.5"', l: '86"', h: '53"', weight: '127 lbs.' },
          { size: 'CK', color: 'DS', w: '76.5"', l: '90"', h: '53"', weight: '126.6 lbs.' }
        ],
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
        prevPage: '../sheets',
        headerTitle: 'Product Template Example with Product Type Selection and Color Selection',
        headerContent: 'This page illustrates some of the core features of the versatile product template I developed. (Add bullets'
    },
    discountActual: discountActual,
    scripts: [
      'nav',
      'modal.bootstrap',
      'swiper-lite',
      'tippy',
      'lazysizes.min'
    ]
  })
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

module.exports = router;