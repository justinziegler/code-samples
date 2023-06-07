
const content = require('./content');

module.exports.calculateDiscount = function _calculateDiscount(price, discount) {
  let discountActual = discount;
  if (typeof discount === 'string' && (discount.indexOf('%') > -1 || discount.indexOf('$') > -1)) {
      discountActual = module.exports.parseDiscountActual(discount);
  }
  if (Number.isNaN(parseFloat(discountActual))) {
      discountActual = 0;
  }
  if (discountActual < 1 && discountActual > 0) {
      return Math.round(price * discountActual * 100) / 100;
  }
  return Math.round(discountActual * 100) / 100;
}

module.exports.calculateDiscountedPrice = function _calculateDiscountedPrice(price, discount) {
  const discountActual = module.exports.calculateDiscount(price, discount);
  return Math.round((price - discountActual) * 100) / 100;
}

module.exports.calculateMonthlyPayment = function _calculateMonthlyPayment(price, discount) {
  let term = 18;
  const paymentPrice = module.exports.calculateDiscountedPrice(price, discount);
  if (paymentPrice >= 799) {
      term = 24;
  }
  return paymentPrice / term;
}

module.exports.calculatePaymentTerm = function _calculatePaymentTerm(price, discount) {
	let term = 18;
	const paymentPrice = module.exports.calculateDiscountedPrice(price, discount);
	if (paymentPrice >= 799) {
			term = 24;
	}
	return term;
}

module.exports.getProductName = function _getProductName(type) {
	switch (type) {
	case 'MA': return 'Original Lull Mattress';
	case 'PR': return 'Lull Mattress Protector';
	case 'PW': return 'Original Lull Pillow';
	case 'FP': return 'Memory Foam Pillow';
	case 'DP': return 'Down Pillow';
	case 'PC': return 'Lull Pillowcase Set';
	case 'SH': return 'Lull Sheet Set';
	case 'DV': return 'Original Lull Duvet';
	case 'DD': return 'Down Duvet';
	case 'DC': return 'Lull Duvet Cover';
	case 'WF': return 'Lull Gaviota Platform Bed Frame';
	case 'MF': return 'Lull Arrellaga Folding Bed Frame';
	case 'FO': return 'Lull Mattress Foundation';
	case 'FL': return 'Lull Foundation Legs';
	case 'HY': return 'Luxe Hybrid Mattress';
	case 'PP': return '10 Year Protection Plan';
	case 'CB': return 'Cotton Blend Sheets';
	case 'BD': return 'Cotton Blend Duvet Cover';
	case 'BP': return 'Cotton Blend Pillowcase Set';
	case 'CS': return 'Cotton Sheets';
	case 'CD': return 'Cotton Duvet Cover';
	case 'CP': return 'Cotton Pillowcase Set';
	case 'OC': return 'Organic Cotton Sheets';
	case 'OD': return 'Organic Cotton Duvet Cover';
	case 'OP': return 'Organic Cotton Pillowcase Set';
	case 'TU':
	case 'UU': return 'Islay Bed Frame';
	case 'PM': return 'Original Premium Mattress';
	case 'AF': return 'Anacapa Wood Bed Frame';
	case 'SF': return 'Chapala Metal Bed Frame';
	default: return 'Original Lull Mattress';
	}
};

module.exports.getShortName = function getShortName(type) {
  switch (type) {
  case 'CB':
  case 'BD':
  case 'BP':
    return 'Cotton Blend';
  case 'CS':
  case 'CD':
  case 'CP':
    return 'Cotton';
  case 'OC':
  case 'OD':
  case 'OP':
    return 'Organic Cotton';
  case 'UU':
    return 'Classic Headboard';
  case 'TU':
    return 'Tufted Headboard';
  case 'MA':
    return 'Original';
  case 'HY':
    return 'Luxe Hybrid';
  case 'PM':
    return 'Original Premium';
  case 'AF':
    return 'Anacapa';
  case 'SF':
    return 'Chapala';
  case 'PW':
  case 'DV':
    return 'Original';
  case 'DP':
  case 'DD':
    return 'Down';
  case 'FP':
    return 'Memory Foam';
  default: return 'Cotton';
  }
}

module.exports.getColorName = function getColorName(color) {
  switch (color) {
  case 'BW': return 'Brilliant White';
  case 'CD': return 'Cool Dot';
  case 'CS': return 'Cold Stone';
  case 'DS': return 'Desert Sand';
  case 'GG': return 'Granite Grey';
  case 'GR': return 'Grey';
  case 'MB': return 'Moon Beam';
  case 'PA': return 'Plein Air';
  case 'QG': return 'Quiet Grey';
  case 'WH': return 'White';
  case 'WP': return 'Windowpane';
  default: return 'White';
  }
}

module.exports.getSizeName = function getSizeName(size) {
  switch (size) {
    case 'TW': return 'Twin';
    case 'TX': return 'Twin XL';
    case 'FL': return 'Full';
    case 'QU': return 'Queen';
    case 'KG': return 'King';
    case 'CK': return 'Cal King';
    case 'TT': return 'Twin / Twin XL';
    case 'FQ': return 'Full / Queen';
    case 'KC': return 'King / Cal King';
    case 'ST': return 'Standard';
    default: return 'Twin';
  }
}

module.exports.numberWithCommas = function _numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

module.exports.getProductSkus = async function (ctx, catId, discount) {
  const products = await content.getProducts(ctx);
  const items = [];
  products.forEach(p => p.catId === catId && items.push(p));
  console.log(items); 
	let skus = [];
	items.forEach(item => { 
    let price = item.price;
    let salePrice = module.exports.calculateDiscountedPrice(item.price, discount);
    let monthlyPayment = module.exports.calculateMonthlyPayment(item.price, discount);
    let paymentTerm = module.exports.calculatePaymentTerm(item.price, discount);
    const type = item.sku.slice(3, -6);
    const color = item.sku.slice(6, -3);
    const colorName = module.exports.getColorName(color);
    const size = item.sku.slice(9);
    const sizeName = module.exports.getSizeName(size);
    let maxQty = 1;
    // const multipleItemCatIds = [9, 24, 25, 27];
    // multipleItemCatIds.forEach(mCatId => {
    //   if (catId == mCatId) {
    //     maxQty = 4;
    //   }
    // })
    skus.push(
      {
        catId: item.catId,
        sku: item.sku,
        type: type,
        name: module.exports.getProductName(type),
        shortName: module.exports.getShortName(type),
        color: color,
        colorName: colorName,
        size: size,
        sizeName: sizeName,
        price: price,
        discount: discount,
        salePrice: salePrice,
        monthlyPayment: monthlyPayment.toFixed(2),
        paymentTerm: paymentTerm,
        w: item.w,
        l: item.l,
        h: item.h,
        weight: item.weight,
        dimensions: item.dimensions,
        outOfStock: item.outOfStock,
        maxQty: maxQty
      }
    );
	})
	return skus;
}