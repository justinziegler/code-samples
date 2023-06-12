module.exports.getProducts = async function (ctx) {
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
    { catId: 8, sku: 'LU-PR-WH-TX', price: '75', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-FL', price: '85', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-QU', price: '85', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-KG', price: '95', outOfStock: false },
    { catId: 8, sku: 'LU-PR-WH-CK', price: '95', outOfStock: false },

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