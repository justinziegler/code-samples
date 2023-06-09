
const utils = require('./utils');

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
      prevPage: '../',
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