const utils = require('./utils');

module.exports.getProducts = async function () {
  const products = [
    { 
      catId: 1, sku: 'LU-MA-WH-TW', price: '800', w: '38"', 
      l: '75"', h: '10"', weight: '50 lbs', outOfStock: false
    },
    { 
      catId: 1, sku: 'LU-MA-WH-TX', price: '850', w: '38"', 
      l: '80"', h: '10"', weight: '53 lbs', outOfStock: false
    },
    { 
      catId: 1, sku: 'LU-MA-WH-FL', price: '900', w: '54"', 
      l: '75"', h: '10"', weight: '63 lbs', outOfStock: false
    },
    { 
      catId: 1, sku: 'LU-MA-WH-QU', price: '950', w: '60"', 
      l: '80"', h: '10"', weight: '74 lbs', outOfStock: false
    },
    { 
      catId: 1, sku: 'LU-MA-WH-KG', price: '1000', w: '76"', 
      l: '80"', h: '10"', weight: '93 lbs', outOfStock: false
    },
    { 
      catId: 1, sku: 'LU-MA-WH-CK', price: '1050', w: '72"', 
      l: '84"', h: '10"', weight: '93 lbs', outOfStock: true
    },
    
    { catId: 8, sku: 'LU-PR-WH-TW', price: '75', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-TX', price: '80', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-FL', price: '85', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-QU', price: '90', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-KG', price: '95', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-CK', price: '100', outOfStock: false },

    { catId: 11, sku: 'LU-WF-BR-TW', price: '750', outOfStock: false },
    { catId: 11, sku: 'LU-WF-BR-TX', price: '800', outOfStock: false },
    { catId: 11, sku: 'LU-WF-BR-FL', price: '850', outOfStock: false },
    { catId: 11, sku: 'LU-WF-BR-QU', price: '900', outOfStock: false },
    { catId: 11, sku: 'LU-WF-BR-KG', price: '950', outOfStock: false },
    { catId: 11, sku: 'LU-WF-BR-CK', price: '1000', outOfStock: false },

    { catId: 30, sku: 'LU-OC-BW-TW', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-BW-TX', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-BW-FL', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-BW-QU', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-BW-KG', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-BW-CK', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-CD-TW', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-CD-TX', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-CD-FL', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-CD-QU', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-CD-KG', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-CD-CK', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-GG-TW', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-GG-TX', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-GG-FL', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-GG-QU', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-GG-KG', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-GG-CK', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-MB-TW', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-MB-TX', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-MB-FL', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-MB-QU', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-MB-KG', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-MB-CK', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-PA-TW', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-PA-TX', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-PA-FL', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-PA-QU', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-PA-KG', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-PA-CK', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-QG-TW', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-QG-TX', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-QG-FL', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-QG-QU', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-QG-KG', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-QG-CK', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-WP-TW', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-WP-TX', price: '175', outOfStock: false },
    { catId: 30, sku: 'LU-OC-WP-FL', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-WP-QU', price: '185', outOfStock: false },
    { catId: 30, sku: 'LU-OC-WP-KG', price: '200', outOfStock: false },
    { catId: 30, sku: 'LU-OC-WP-CK', price: '200', outOfStock: false },

    { catId: 31, sku: 'LU-BD-BW-TT', price: '55', outOfStock: false },
    { catId: 31, sku: 'LU-BD-CD-TT', price: '55', outOfStock: false },
    { catId: 31, sku: 'LU-BD-GG-TT', price: '55', outOfStock: false },
    { catId: 31, sku: 'LU-BD-MB-TT', price: '55', outOfStock: false },
    { catId: 31, sku: 'LU-BD-PA-TT', price: '55', outOfStock: false },
    { catId: 31, sku: 'LU-BD-QG-TT', price: '55', outOfStock: false },
    { catId: 31, sku: 'LU-BD-WP-TT', price: '55', outOfStock: false },
    { catId: 31, sku: 'LU-BD-BW-FQ', price: '65', outOfStock: false },
    { catId: 31, sku: 'LU-BD-CD-FQ', price: '65', outOfStock: false },
    { catId: 31, sku: 'LU-BD-GG-FQ', price: '65', outOfStock: false },
    { catId: 31, sku: 'LU-BD-MB-FQ', price: '65', outOfStock: false },
    { catId: 31, sku: 'LU-BD-PA-FQ', price: '65', outOfStock: false },
    { catId: 31, sku: 'LU-BD-QG-FQ', price: '65', outOfStock: false },
    { catId: 31, sku: 'LU-BD-WP-FQ', price: '65', outOfStock: false },
    { catId: 31, sku: 'LU-BD-BW-KC', price: '75', outOfStock: false },
    { catId: 31, sku: 'LU-BD-CD-KC', price: '75', outOfStock: false },
    { catId: 31, sku: 'LU-BD-GG-KC', price: '75', outOfStock: false },
    { catId: 31, sku: 'LU-BD-MB-KC', price: '75', outOfStock: false },
    { catId: 31, sku: 'LU-BD-PA-KC', price: '75', outOfStock: false },
    { catId: 31, sku: 'LU-BD-QG-KC', price: '75', outOfStock: false },
    { catId: 31, sku: 'LU-BD-WP-KC', price: '75', outOfStock: false },

    { catId: 32, sku: 'LU-CD-BW-TT', price: '65', outOfStock: false },
    { catId: 32, sku: 'LU-CD-CD-TT', price: '65', outOfStock: false },
    { catId: 32, sku: 'LU-CD-GG-TT', price: '65', outOfStock: false },
    { catId: 32, sku: 'LU-CD-MB-TT', price: '65', outOfStock: false },
    { catId: 32, sku: 'LU-CD-PA-TT', price: '65', outOfStock: false },
    { catId: 32, sku: 'LU-CD-QG-TT', price: '65', outOfStock: false },
    { catId: 32, sku: 'LU-CD-WP-TT', price: '65', outOfStock: false },
    { catId: 32, sku: 'LU-CD-BW-FQ', price: '75', outOfStock: false },
    { catId: 32, sku: 'LU-CD-CD-FQ', price: '75', outOfStock: false },
    { catId: 32, sku: 'LU-CD-GG-FQ', price: '75', outOfStock: false },
    { catId: 32, sku: 'LU-CD-MB-FQ', price: '75', outOfStock: false },
    { catId: 32, sku: 'LU-CD-PA-FQ', price: '75', outOfStock: false },
    { catId: 32, sku: 'LU-CD-QG-FQ', price: '75', outOfStock: false },
    { catId: 32, sku: 'LU-CD-WP-FQ', price: '75', outOfStock: false },
    { catId: 32, sku: 'LU-CD-BW-KC', price: '85', outOfStock: false },
    { catId: 32, sku: 'LU-CD-CD-KC', price: '85', outOfStock: false },
    { catId: 32, sku: 'LU-CD-GG-KC', price: '85', outOfStock: false },
    { catId: 32, sku: 'LU-CD-MB-KC', price: '85', outOfStock: false },
    { catId: 32, sku: 'LU-CD-PA-KC', price: '85', outOfStock: false },
    { catId: 32, sku: 'LU-CD-QG-KC', price: '85', outOfStock: false },
    { catId: 32, sku: 'LU-CD-WP-KC', price: '85', outOfStock: false },

    { catId: 33, sku: 'LU-OD-CD-TT', price: '75', outOfStock: false },
    { catId: 33, sku: 'LU-OD-BW-TT', price: '75', outOfStock: false },
    { catId: 33, sku: 'LU-OD-GG-TT', price: '75', outOfStock: false },
    { catId: 33, sku: 'LU-OD-MB-TT', price: '75', outOfStock: false },
    { catId: 33, sku: 'LU-OD-PA-TT', price: '75', outOfStock: false },
    { catId: 33, sku: 'LU-OD-QG-TT', price: '75', outOfStock: false },
    { catId: 33, sku: 'LU-OD-WP-TT', price: '75', outOfStock: false },
    { catId: 33, sku: 'LU-OD-BW-FQ', price: '85', outOfStock: false },
    { catId: 33, sku: 'LU-OD-CD-FQ', price: '85', outOfStock: false },
    { catId: 33, sku: 'LU-OD-GG-FQ', price: '85', outOfStock: false },
    { catId: 33, sku: 'LU-OD-MB-FQ', price: '85', outOfStock: false },
    { catId: 33, sku: 'LU-OD-PA-FQ', price: '85', outOfStock: false },
    { catId: 33, sku: 'LU-OD-QG-FQ', price: '85', outOfStock: false },
    { catId: 33, sku: 'LU-OD-WP-FQ', price: '85', outOfStock: false },
    { catId: 33, sku: 'LU-OD-BW-KC', price: '95', outOfStock: false },
    { catId: 33, sku: 'LU-OD-CD-KC', price: '95', outOfStock: false },
    { catId: 33, sku: 'LU-OD-GG-KC', price: '95', outOfStock: false },
    { catId: 33, sku: 'LU-OD-MB-KC', price: '95', outOfStock: false },
    { catId: 33, sku: 'LU-OD-PA-KC', price: '95', outOfStock: false },
    { catId: 33, sku: 'LU-OD-QG-KC', price: '95', outOfStock: false },
    { catId: 33, sku: 'LU-OD-WP-KC', price: '95', outOfStock: false },

    { catId: 34, sku: 'LU-BP-BW-ST', price: '75', outOfStock: false },
    { catId: 34, sku: 'LU-BP-BW-KG', price: '85', outOfStock: false },
    { catId: 34, sku: 'LU-BP-CD-ST', price: '75', outOfStock: false },
    { catId: 34, sku: 'LU-BP-CD-KG', price: '85', outOfStock: false },
    { catId: 34, sku: 'LU-BP-GG-ST', price: '75', outOfStock: false },
    { catId: 34, sku: 'LU-BP-GG-KG', price: '85', outOfStock: false },
    { catId: 34, sku: 'LU-BP-MB-ST', price: '75', outOfStock: false },
    { catId: 34, sku: 'LU-BP-MB-KG', price: '85', outOfStock: false },
    { catId: 34, sku: 'LU-BP-PA-ST', price: '75', outOfStock: false },
    { catId: 34, sku: 'LU-BP-PA-KG', price: '85', outOfStock: false },
    { catId: 34, sku: 'LU-BP-QG-ST', price: '75', outOfStock: false },
    { catId: 34, sku: 'LU-BP-QG-KG', price: '85', outOfStock: false },
    { catId: 34, sku: 'LU-BP-WP-ST', price: '75', outOfStock: false },
    { catId: 34, sku: 'LU-BP-WP-KG', price: '85', outOfStock: false },

    { catId: 35, sku: 'LU-CP-BW-ST', price: '75', outOfStock: false },
    { catId: 35, sku: 'LU-CP-BW-KG', price: '85', outOfStock: false },
    { catId: 35, sku: 'LU-CP-CD-ST', price: '75', outOfStock: false },
    { catId: 35, sku: 'LU-CP-CD-KG', price: '85', outOfStock: false },
    { catId: 35, sku: 'LU-CP-GG-ST', price: '75', outOfStock: false },
    { catId: 35, sku: 'LU-CP-GG-KG', price: '85', outOfStock: false },
    { catId: 35, sku: 'LU-CP-MB-ST', price: '75', outOfStock: false },
    { catId: 35, sku: 'LU-CP-MB-KG', price: '85', outOfStock: false },
    { catId: 35, sku: 'LU-CP-PA-ST', price: '75', outOfStock: false },
    { catId: 35, sku: 'LU-CP-PA-KG', price: '85', outOfStock: false },
    { catId: 35, sku: 'LU-CP-QG-ST', price: '75', outOfStock: false },
    { catId: 35, sku: 'LU-CP-QG-KG', price: '85', outOfStock: false },
    { catId: 35, sku: 'LU-CP-WP-ST', price: '75', outOfStock: false },
    { catId: 35, sku: 'LU-CP-WP-KG', price: '85', outOfStock: false },

    { catId: 36, sku: 'LU-OP-BW-ST', price: '75', outOfStock: false },
    { catId: 36, sku: 'LU-OP-BW-KG', price: '85', outOfStock: false },
    { catId: 36, sku: 'LU-OP-CD-ST', price: '75', outOfStock: false },
    { catId: 36, sku: 'LU-OP-CD-KG', price: '85', outOfStock: false },
    { catId: 36, sku: 'LU-OP-GG-ST', price: '75', outOfStock: false },
    { catId: 36, sku: 'LU-OP-GG-KG', price: '85', outOfStock: false },
    { catId: 36, sku: 'LU-OP-MB-ST', price: '75', outOfStock: false },
    { catId: 36, sku: 'LU-OP-MB-KG', price: '85', outOfStock: false },
    { catId: 36, sku: 'LU-OP-PA-ST', price: '75', outOfStock: false },
    { catId: 36, sku: 'LU-OP-PA-KG', price: '85', outOfStock: false },
    { catId: 36, sku: 'LU-OP-QG-ST', price: '75', outOfStock: false },
    { catId: 36, sku: 'LU-OP-QG-KG', price: '85', outOfStock: false },
    { catId: 36, sku: 'LU-OP-WP-ST', price: '75', outOfStock: false },
    { catId: 36, sku: 'LU-OP-WP-KG', price: '85', outOfStock: false },

    { catId: 40, sku: 'LU-UU-CS-TW', price: '1150',
      w: '42.5"', l: '81"', h: '53"', outOfStock: false },
    { catId: 40, sku: 'LU-UU-CS-TX', price: '1150',
      w: '42.5"', l: '86"', h: '53"', outOfStock: false },
    { catId: 40, sku: 'LU-UU-CS-FL', price: '1200',
      w: '57.5"', l: '81"', h: '53"', outOfStock: false },
    { catId: 40, sku: 'LU-UU-CS-QU', price: '1250',
      w: '64.5"', l: '86"', h: '53"', outOfStock: true },
    { catId: 40, sku: 'LU-UU-CS-KG', price: '1350',
      w: '80.5"', l: '86"', h: '53"', outOfStock: false },
    { catId: 40, sku: 'LU-UU-CS-CK', price: '1350',
      w: '76.5"', l: '90"', h: '53"', outOfStock: false },

    { catId: 40, sku: 'LU-UU-DS-TW', price: '1150', outOfStock: false },
    { catId: 40, sku: 'LU-UU-DS-TX', price: '1150', outOfStock: false },
    { catId: 40, sku: 'LU-UU-DS-FL', price: '1200', outOfStock: false },
    { catId: 40, sku: 'LU-UU-DS-QU', price: '1250', outOfStock: false },
    { catId: 40, sku: 'LU-UU-DS-KG', price: '1350', outOfStock: false },
    { catId: 40, sku: 'LU-UU-DS-CK', price: '1350', outOfStock: false },

    { catId: 41, sku: 'LU-TU-CS-TW', price: '1200', outOfStock: false },
    { catId: 41, sku: 'LU-TU-CS-TX', price: '1200', outOfStock: false },
    { catId: 41, sku: 'LU-TU-CS-FL', price: '1250', outOfStock: false },
    { catId: 41, sku: 'LU-TU-CS-QU', price: '1300', outOfStock: true },
    { catId: 41, sku: 'LU-TU-CS-KG', price: '1400', outOfStock: false },
    { catId: 41, sku: 'LU-TU-CS-CK', price: '1400', outOfStock: false },

    { catId: 41, sku: 'LU-TU-DS-TW', price: '1200', outOfStock: false },
    { catId: 41, sku: 'LU-TU-DS-TX', price: '1200', outOfStock: false },
    { catId: 41, sku: 'LU-TU-DS-FL', price: '1250', outOfStock: false },
    { catId: 41, sku: 'LU-TU-DS-QU', price: '1300', outOfStock: false },
    { catId: 41, sku: 'LU-TU-DS-KG', price: '1400', outOfStock: false },
    { catId: 41, sku: 'LU-TU-DS-CK', price: '1400', outOfStock: false },
  ];
  return products;
}

module.exports.getUpsellDetails = async function (skus) {
  const products = await module.exports.getProducts();
  let upsellItems = [];
  skus.forEach(item => {
    const type = item.sku.slice(3, -6);
    const size = item.sku.slice(9);
    const sizeName = utils.getSizeName(size);
    const color = item.sku.slice(6, -3);
    const name = utils.getProductName(type);
    const ci = [];
    const catItems = [];
    products.forEach(p => p.catId === item.catId && ci.push(p));
    ci.forEach(c => {
      const sizeName = utils.getSizeName(c.sku.slice(9));
      const item = {
        sku: c.sku,
        type: c.sku.slice(3, -6),
        color: c.sku.slice(6, -3),
        price: c.price,
        sizeName: sizeName,
        outOfStock: c.outOfStock
      }
      catItems.push(item);
    })
    let discount = 0;
    let details = [];
    switch (type) {
      case 'MA': 
        details = {
          title: 'Add an Original Lull Mattress',
          description: 'Add a Lull three layer gel memory foam mattress',
          url: 'shop',
          slug: 'mattress'
        }
        break;
      case 'PR': 
        discount = 0;
        details = {
          catId: item.catId,
          sku: item.sku,
          skus: catItems,
          name: name,
          quantity: 1,
          type: type,
          color: color,
          size: size,
          sizeName: sizeName,
          price: item.price,
          discount: 15,
          salePrice: item.price - discount,
          colorSelection: false,
          showStarRating: true,
          avgReviews: 4.3,
          totalReviews: 4321,
          subtitle: '100% waterproof barrier provides<br class="hidden-xs"> lasting protection',
          gallerySlides: 3,
          details: [{
            tagline: 'The mattress protector re-imagined. Ultra sturdy support that\'s easy to assemble.',
            bullets: [
              { bullet: 'Free Shipping and Free Returns' },
              { bullet: '365 Night Trial' },
              { bullet: '1-Year Warranty' }
            ]
          }],
          review: [{
            starTotal: 5,
            title: 'This mattress protector fits perfectly!',
            content: 'This mattress protector fits perfectly! It doesn\'t stretch out even after a night\'s sleep!',
            reviewer: 'Barbara B.'
          }],
          benefits: [
            {
              heading: '100% Waterproof',
              className: 'waterproof',
              content: 'The Lull Protector keeps liquids from reaching your mattress using a 100% waterproof barrier.'
            },
            {
              heading: 'Stain Resistant',
              className: 'stain',
              content: 'The Lull Protector uses chemical-free, stain-resistant fibers to repel liquids.'
            },
            {
              heading: 'Hypoallergenic',
              className: 'hypoallergenic',
              content: 'Machine washable to prevent a buildup of skin cells and dust mites (a common household allergen) on your mattress.'
            },
            {
              heading: 'Quiet',
              className: 'quiet',
              content: 'Unlike traditional noisy protectors, the Lull Protector won\’t move or crinkle beneath you. We use the same soft fabrics as the Lull Mattress cover for a perfect fit and a quiet night\’s sleep.'
            },
            {
              heading: 'Breathable',
              className: 'breathable',
              content: 'Lull\’s protection uses technology to allow air to pass through for a cool night\’s sleep.'
            },
            {
              heading: 'Lasting Protection',
              className: 'protection',
              content: 'Built to handle wear-and-tear, the Lull Protector keeps your mattress clean so you get years of enjoyment from your Lull Mattress.'
            }
          ],
          dimensions: [
            {
              catId: 8,
              dimensions: [
                { size: 'Twin', w: '39"', l: '75"', h: '', totalHeight: '', weight: '4 lbs.' },
                { size: 'Twin XL', w: '39"', l: '80"', h: '', totalHeight: '', weight: '4 lbs.' },
                { size: 'Full', w: '54"', l: '75"', h: '', totalHeight: '', weight: '4.5 lbs.' },
                { size: 'Queen', w: '60"', l: '80"', h: '', totalHeight: '', weight: '4.75 lbs.' },
                { size: 'King', w: '76"', l: '80"', h: '', totalHeight: '', weight: '6 lbs.' },
                { size: 'California King', w: '72"', l: '84"', h: '', totalHeight: '', weight: '6 lbs.' },
                { size: 'BOX', w: '15"', l: '12"', h: '5.75"', totalHeight: '', weight: '' }
              ]
            }
          ],
          specs: [
            {
              heading: '',
              details: [
                {
                  item: 'Construction',
                  details: '<strong>Knit Top:</strong> Polyester &amp; Rayon<br><strong>Skirting:</strong> Polyester &amp; Spandex',
                  classes: 'col-xs-12 col-sm-7'
                },
                {
                  item: 'Shipping Info',
                  details: 'Ships in 1-4 business days',
                  classes: 'col-xs-12 col-sm-5'
                },
                {
                  item: 'clearfix',
                  details: '',
                  classes: 'visible-xs'
                },
                {
                  item: 'Shipping Costs',
                  details: 'Free Shipping &amp; Returns',
                  classes: 'col-xs-12 col-sm-7'
                },
                {
                  item: 'Warranty',
                  details: '1 year',
                  classes: 'col-xs-12 col-sm-5'
                }
              ]
            }
          ]
        }
        break;
      case 'PW':
        details = {
          title: 'Add an Original Lull Pillow',
          description: 'Our best selling pillow made from high quality materials provides the perfect combination of comfort and support.',
          url: 'pillows',
          slug: 'pillow'
        }
        break;
      case 'FP': 
        details = {
          title: 'Add a Lull Memory Foam Pillow',
          description: 'The Lull Memory Foam Pillow adapts to your movement and provides support throughout the night.',
          url: 'pillows',
          slug: 'memory-foam-pillow'
        }
        break;
      case 'DP': 
        details = {
          title: 'Add a Premium Lull Down Pillow',
          description: 'Responsibly sourced premium white duck down provides responsive comfort and bounces back with just a quick fluff for your best sleep yet.',
          url: 'pillows',
          slug: 'down-pillow'
        }
        break;
      case 'SH':
      case 'CB': 
        details = {
          title: 'Add a Lull Sheet Set',
          description: 'Silky, soft, and breathable - high quality sheets at an unbeatable price. Includes fitted sheet, top sheet and <span class="sheets-quantity"></span> <span class="pillowcase-quantity">pillowcase</span>.',
          url: 'bed-sheets',
          slug: 'sheets'
        }
        break;
      case 'CS': 
        details = {
          title: 'Add a Lull Cotton Sheet Set',
          description: 'Premium 100% cotton percale sheets made for a cool night\'s sleep. Includes fitted sheet, top sheet and <span class="sheets-quantity"></span> <span class="pillowcase-quantity">pillowcase</span>',
          url: 'bed-sheets',
          slug: 'sheets'
        }
        break;
      case 'OC': 
        details = {
          title:  'Add a Lull Organic Cotton Sheet Set',
          description: '100% organic cotton sheets crafted with comfort, wellness, and luxury in mind. Includes fitted sheet, top sheet and <span class="sheets-quantity"></span> <span class="pillowcase-quantity">pillowcase</span>.',
          url: 'bed-sheets',
          slug: 'sheets'
        }
        break;
      case 'DV': 
        details = {
          title: 'Add an Original Lull Duvet',
          description: 'Get amazing sleep with the Original Lull Duvet. Millions of premium fibers keep you warm in the winter and cool in the summer.',
          url: 'duvet',
          slug: 'duvet'
        }
        break;
      case 'DD': 
        details = {
          title: 'Add a Lull Down Duvet',
          description: 'Our most luxurious duvet is filled with medium weight, all-season down fill that keeps you warm in winter and cool in summer.',
          url: 'down-duvet',
          slug: 'down-duvet'
        }
        break;
      case 'TU': 
      case 'UU': 
      details = {
        title: 'Add a Lull Islay Bed Frame',
        description: 'Classic style meets ultimate comfort. Complete any bedroom with Islay, Lull\'s most luxurious bed frame.',
        url: 'islay-upholstered-bed',
        slug: 'islay-frame'
      }
      break;
      case 'WF': 
        details = {
          catId: item.catId,
          sku: item.sku,
          skus: catItems,
          name: name,
          quantity: 1,
          type: type,
          color: color,
          size: size,
          sizeName: sizeName,
          price: item.price,
          discount: 15,
          salePrice: item.price - discount,
          catId: 11,
          outOfStock: item.outOfStock,
          colorSelection: false,
          showStarRating: true,
          avgReviews: 4.5,
          totalReviews: 2345,
          subtitle: 'Modern design built with your Lull mattress<br class="visible-lg"> in mind',
          gallerySlides: 5,
          details: [{
            tagline: 'Support your new mattress and complete your bedroom with Lull\'s modern platform bed.',
            bullets: [
              { bullet: 'Free Shipping and Free Returns' },
              { bullet: '365 Night Trial' },
              { bullet: '1-Year Warranty' }
            ]
          }],
          review: [{
            starTotal: 5,
            title: 'Great frame',
            content: 'Package was easy to handle. Matched the picture completely and the width and height are perfect for our bedroom. Very classy and easy to set up.',
            reviewer: 'Emily C.'
          }],
          benefits: [
            {
              heading: 'Quality Craftsmanship',
              className: 'craftsmanship',
              content: 'The Lull Platform Bed provides durability that lasts &ndash; made from pine wood and steel rail fittings.'
            },
            {
              heading: 'No Box Spring Needed',
              className: 'boxspring',
              content: 'The Lull Platform Bed Frame is the perfect complement to any style mattress &ndash; no box spring needed.'
            },
            {
              heading: 'Spine Alignment',
              className: 'support',
              content: 'The Lull Platform Bed Frame\'s slatted design works with your Lull Mattress to keep your back aligned and ensure quality sleep.'
            },
            {
              heading: 'Flexible Support',
              className: 'flexible',
              content: 'The Lull Platform Bed Frame adjusts to different sleeper types by absorbing body movements.'
            },
            {
              heading: 'Easy to Assemble',
              className: 'easy',
              content: 'Assembles in 5 easy steps in under 10 minutes &ndash; the only tools needed are an allen wrench (included) and a phillips head screwdriver (not included).'
            },
            {
              heading: 'Modern Design',
              className: 'modern',
              content: 'Lull\’s contemporary platform frame is an excellent addition to any bedroom with its stylish wood finish and simple design.'
            }
          ],
          dimensions: [
            {
              catId: 11,
              dimensions: [
                { size: 'Twin', w: '41"', l: '76.5"', h: '13.5"', totalHeight: '', weight: '68 lbs.' },
                { size: 'Twin XL', w: '41"', l: '81.5"', h: '13.5"', totalHeight: '', weight: '71 lbs.' },
                { size: 'Full', w: '55.7"', l: '76.8"', h: '14"', totalHeight: '', weight: '61 lbs.' },
                { size: 'Queen', w: '60.6"', l: '81.7"', h: '14"', totalHeight: '', weight: '61 lbs.' },
                { size: 'King', w: '77.7"', l: '81.7"', h: '14"', totalHeight: '', weight: '62 lbs.' },
                { size: 'California King', w: '73.7"', l: '85.7"', h: '14"', totalHeight: '', weight: '82 lbs.' },
                { size: 'BOX', w: 'A: 67" x 16" x 5"', l: 'B: 83" x 10" x 3"', h: '', totalHeight: '', weight: '' }
              ]
            }
          ],
          specs: [
            {
              heading: '',
              details: [
                {
                  item: 'Construction',
                  details: 'Pine Wood &amp; Steel',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'Shipping Info',
                  details: 'Ships in 1-4 business days',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'clearfix',
                  details: '',
                  classes: 'visible-xs'
                },
                {
                  item: 'Shipping Costs',
                  details: 'Free Shipping &amp; Returns',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'Warranty',
                  details: '1 year',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'clearfix',
                  details: '',
                  classes: 'visible-xs'
                },
                {
                  item: 'Care Instructions',
                  details: 'Dust with a soft dry cloth',
                  classes: 'col-xs-12 col-sm-6'
                },
                {
                  item: 'Assembly Instructions',
                  details: '<a href="https://static.lull.com/media/The_Lull_Platform_Bed_Frame_Insert_Booklet.pdf" target="_blank">Click here</a> to download',
                  classes: 'col-xs-12 col-sm-6'
                }
              ]
            }
          ]
        }
        break;
      case 'MF': 
        details = {
          title: 'Add a Lull Arrellaga Folding Bed Frame',
          description: 'Complement your new mattress with Lull\'s versatile and affordable Arrellaga folding bed frame.',
          url: 'arrellaga-metal-bed-frame',
          slug: 'metal-frame'
        }
        break;
      case 'FO': 
        details = {
          title: 'Add a Lull Mattress Foundation',
          description: 'Give your mattress the support it needs with Lull\'s easy to assemble foundation.',
          url: 'mattress-foundation',
          slug: 'foundation'
        }
        break;
      case 'FL': 
        details = {
          title: 'Add the Lull Foundation Legs',
          description: 'Add height and create instant under-bed<br class="visible-md visible-lg"> storage.',
          url: 'mattress-foundation',
          slug: 'foundation-legs'
        }
        break;
      case 'HY':
        details = {
          title: 'Add a Lull Luxe Hybrid Mattress',
          description: 'Add a Lull Luxe Hybrid Mattress',
          url: 'shop-luxe',
          slug: 'luxe-hybrid'
        }
        break;
      case 'PP': 
        details = {
          title: 'Add a 10 Year Protection Plan',
          description: 'Add a 10 Year Protection Plan for coverage from accidents, stains, rips, tears, and more.',
          url: '#',
          slug: 'protection-plan'
        }
        break;
      case 'PM': 
        details = {
          title: 'Add a Lull Original Premium Mattress',
          description: 'Add a Lull Original Premium Mattress',
          url: 'original-premium-mattress',
          slug: 'original-premium'
        }
        break;
      case 'AF': 
        details = {
          title: 'Add a Lull Anacapa Bed Frame',
          description: 'The warm golden tones of Lull\'s Anacapa bed frame is the finishing touch your room has been waiting for.',
          url: 'anacapa-bed-frame',
          slug: 'anacapa-frame'
        }
        break;
      case 'SF': 
        details = {
          title: 'Add a Chapala Metal Bed Frame',
          description: 'Lull\'s sleek and modern Chapala bed frame is made with exceptional durability in mind to provide perfect support for your mattress.',
          url: 'chapala-metal-headboard-bed-frame',
          slug: 'chapala'
        }
        break;
      default: 
        details = {
          title: 'Add an Original Lull Mattress',
          description: 'Add a Lull three layer gel memory foam mattress',
          url: 'shop',
          slug: 'mattress'
        }
        break;
    }
    const d = details[0];
    console.log('d', details)
    upsellItems = upsellItems.concat(details);
  })
	return upsellItems;
}
 