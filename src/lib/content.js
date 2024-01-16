const utils = require('./utils');

module.exports.ourWay = async function (ctx) {
 const ourWay = [
    {
      title: 'Title One',
      titleClass: 'shipping',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis, leo in scelerisque laoreet, ligula nunc faucibus purus, at ornare lectus justo et neque. Duis hendrerit ante elit, vel congue mi luctus sed.'
    },
    {
      title: 'Title Two',
      titleClass: 'trial',
      content: 'Integer ullamcorper facilisis massa nec cursus. Praesent consequat, erat ac ullamcorper dignissim, ipsum neque fringilla orci, non condimentum mi mi vitae metus. Nunc dolor risus, semper cursus lorem cursus, efficitur placerat turpis.</a>'
    },
    {
      title: 'Title Three',
      titleClass: 'returns',
      content: 'Phasellus eget urna vitae dolor ornare placerat condimentum vel tellus. Cras fermentum, ex ac pharetra mollis, elit enim vestibulum arcu, eget porttitor augue libero nec erat. Nam ac congue eros.'
    },
    {
      title: 'Title Four',
      titleClass: 'warranty',
      content: 'Cras vel eleifend sem. Pellentesque dignissim, felis non porta hendrerit, nunc nisl iaculis diam, nec fringilla enim mauris interdum nulla. Ut hendrerit lacus mauris, sed auctor est facilisis eget.'
    }
  ];
  return ourWay;
}

module.exports.suggestedItems = async function (ctx) {
  const suggestedItems = [
    {
      title: 'More Lull Favorites',
      items: [
        {
          itemName: 'Luxe Hybrid Mattress',
          shortName: 'luxe',
          linkName: 'luxe hybrid',
          url: 'shop-luxe',
          description: 'A luxurious combination of comfort, support, and cooling technology.'
        },
        {
          itemName: 'Original Lull Mattress',
          shortName: 'mattress',
          linkName: 'original',
          url: 'shop',
          description: 'Lull\'s premium gel memory foam mattress.<br>&nbsp;'
        },
        {
          itemName: 'Mattress Protector',
          shortName: 'protector',
          linkName: 'protector',
          url: 'mattress-protector',
          description: 'Extend the life of your Lull Mattress and keep it safe from spills, stains and allergens.'
        },
        {
          itemName: 'Lull Mattress Foundation',
          shortName: 'foundation',
          linkName: 'foundation',
          url: 'mattress-foundation',
          description: 'The box spring reimagined. Ultra sturdy support that\'s easy to assemble.'
        },
        {
          itemName: 'Original Lull Pillow',
          shortName: 'pillow',
          linkName: 'pillow',
          url: 'pillow',
          description: 'A three-layer design provides the perfect combination of comfort and support.'
        },
        {
          itemName: 'Original Lull Duvet',
          shortName: 'duvet',
          linkName: 'duvet',
          url: 'duvet-insert',
          description: 'Millions of premium fibers keep you warm in the winter and cool in the summer.'
        },
        {
          itemName: 'Cotton Blend Sheets',
          shortName: 'cotton-sheets',
          linkName: 'sheets',
          url: 'cotton-blend-sheets',
          description: 'Silky, soft, and breathable &ndash; high quality sheets at an unbeatable price.'
        }
      ]
    }];
   return suggestedItems;
 }

 module.exports.faq = async function (ctx) {
  const faq = [
    {
      question: 'What is an upholstered bed frame?',
      answer: 'Upholstered bed frames feature padding and either a textile or fabric overlay around the frame. The variations in design offer tufted and untufted headboards, for a sophisticated or more minimalist feel.'
    },
    {
      question: 'Does the ' + utils.getProductName('UU') + ' require any tools for assembly?',
      answer: 'All of the tools and hardware needed to put the ' + utils.getProductName('UU') + ' together are included in your shipment—simply follow our step-by-step instructions for safe and easy assembly.'
    },
    {
      question: 'What is the ' + utils.getProductName('UU') + ' made of?',
      answer: `<div class="chart-head row">
                <div class="col-xs-6"><p>Component</p></div>
                <div class="col-xs-6"><p>Material</p></div>
              </div>
              <div class="chart-body row">
                <div class="col-xs-6"><p>Headboard</p></div>
                <div class="col-xs-6"><p>Wood</p></div>
                <div class="col-xs-6"><p>Rails</p></div>
                <div class="col-xs-6"><p>Wood</p></div>
                <div class="col-xs-6"><p>Slats</p></div>
                <div class="col-xs-6"><p>Wood</p></div>
                <div class="col-xs-6"><p>Fabric</p></div>
                <div class="col-xs-6"><p>Polyester</p></div>
                <div class="col-xs-6"><p>Center Beam</p></div>
                <div class="col-xs-6"><p>Steel</p></div>
                <div class="col-xs-6"><p>Corner Joint</p></div>
                <div class="col-xs-6"><p>Steel</p></div>
                <div class="col-xs-6"><p>Legs</p></div>
                <div class="col-xs-6"><p>Plastic</p></div>
                <div class="col-xs-6"><p>Screw</p></div>
                <div class="col-xs-6"><p>Steel</p></div>
              </div>`
    }
  ];
  return faq;
}

module.exports.valuePropsSheets = async function (ctx) {
  const valueProps = [
    {
      type: 'vp',
      heading: 'Get Ready for the Ultimate Sleep Experience',
      items: [
        {
          title: 'Shipping &amp; Returns',
          icon: true,
          className: 'shipping',
          bullets: false,
          content: [
            { item: 'Your sheets ship fast and free in the contiguous US. Once your order is placed it typically ships in 1-4 business days and arrives with no-contact delivery. Don\'t love them? Arrange a quick, stress-free return.' }
          ]
        },
        {
          title: '100 Night Trial',
          icon: true,
          className: 'trial',
          bullets: false,
          content: [
            { item: 'Try the Organic Cotton Sheet Set in your home for 100 nights, stress-free. If you\'re not 100% satisfied with your sleep experience during the trial period, arrange a quick and easy return.' }
          ]
        },
        {
          title: '1-Year Warranty',
          icon: true,
          className: 'warranty',
          bullets: false,
          content: [
            {	item: 'Your Lull Sheets are protected by a 1-year limited manufacturer\'s warranty.' }
          ]
        }
      ]
    }
  ];
  return valueProps;
}

module.exports.reviewsSheets = async function (ctx) {
  const reviews = [
    {
      heading: 'People Love Lull Sheets',
      reviews: [
        {
          stars: '5',
          reviewTitle: 'The sheets are so soft',
          review: 'The sheets are so soft, fresh and so comfortable. Wash really well and the fit is great. Love white sheets.',
          name: 'Marvette H.'
        },
        {
          stars: '5',
          reviewTitle: 'Best sheets ever',
          review: 'The sheets are thick, and comfortable, way better than anything I\'ve bought from a store.',
          name: 'Leslie'
        },
        {
          stars: '5',
          reviewTitle: 'These sheets are absolutely worth it',
          review: 'These sheets are absolutely worth the money, I\’ll be buying another set!',
          name: 'Lisa F.'
        },
        {
          stars: '5',
          reviewTitle: 'Softest sheets',
          review: 'Its super soft and comfortable. I really like this sheet set, definitely not like the traditional sheets you buy from the store. They fit perfectly on my Lull.',
          name: 'Diana'
        },
        {
          stars: '5',
          reviewTitle: 'The perfect end',
          review: 'The sheets showed up, and I washed them per the instructions. They are the best sheets, like hotel sheets! It\'s like sleeping on a cloud. It\'s the perfect set for the mattress.',
          name: 'Rebeca'
        },
        {
          stars: '5',
          reviewTitle: 'Comfy!',
          review: 'These sheets are SO soft & comfortable. Definitely a great purchase!',
          name: 'Crystal C.'
        },
        {
          stars: '5',
          reviewTitle: 'Sheets are great.<br class="visible-xxs"> Really soft.',
          review: 'Sheets are great. Really soft but don\’t cling to you.',
          name: 'Jacque K.'
        },
        {
          stars: '5',
          reviewTitle: 'Amazing',
          review: 'These sheets are phenomenal. I was so impressed with the overall experience, I bought more products!',
          name: 'Jeremy A.'
        },
        {
          stars: '5',
          reviewTitle: 'The best!',
          review: 'The sheets are a must as well. I sleep great and have more energy the next day now.',
          name: 'Mike D.'
        }
      ]
    }	
  ];
  return reviews;
}

module.exports.additionalDetails = async function (ctx) {
  const additionalDetails = [
    {
      type: 'additional-details',
      heading: 'Additional Details',
      items: [
        {
          title: 'Perfect Fit',
          icon: false,
          className: 'perfect-fit',
          bullets: true,
          content: [
            { item: 'The Lull Organic Cotton Sheets are designed to stay in place and fit any Lull mattress or mattresses up to 15”.' }, 
            { item: 'Each pillowcase features a sleek envelope enclosure designed to keep pillows secure and clean.' }
          ]
        },
        {
          title: 'Care Instructions',
          icon: false,
          className: 'care-instructions',
          bullets: true,
          content: [
              { item: 'Wash and rotate weekly' },
            {	item: 'Machine wash, cold, separately with mild detergent' },
            {	item: 'Tumble dry on lowest heat setting' },
            {	item: 'Warm iron as needed' }
          ]
        }
      ]
    }
  ];
  return additionalDetails;
}

module.exports.suggestedItems = async function (ctx) {
  const suggestedItems = [
    {
      title: 'You Might Also Love',
      items: [
        {
          itemName: 'Down Pillow',
          shortName: 'down-pillow',
          linkName: 'pillow',
          url: 'down-pillow',
          description: 'Premium head and neck support filled with responsibly sourced white duck down.'
        },
        {
          itemName: 'Original Lull Pillow',
          shortName: 'pillow',
          linkName: 'pillow',
          url: 'pillow',
          description: 'A three-layer design provides the perfect combination of comfort and support.'
        },
        {
          itemName: 'Original Lull Duvet',
          shortName: 'duvet',
          linkName: 'duvet',
          url: 'duvet-insert',
          description: 'Millions of premium fibers keep you warm in the winter and cool in the summer.'
        },
        {
          itemName: 'Memory Foam Pillow',
          shortName: 'memory-foam-pillow',
          linkName: 'pillow',
          url: 'memory-foam-pillow',
          description: 'Soft on one side and firm<br class="hidden-xs"> on the<br class="visible-xs"> other to support<br class="hidden-xs"> all sleepers.'
        },
        {
          itemName: 'Down Duvet',
          shortName: 'duvet',
          linkName: 'down duvet',
          url: 'down-duvet-insert',
          description: 'Heirloom quality down<br> duvet insert.<br class="hidden-xs">&nbsp;'
        }
      ]
    }
  ];
  return suggestedItems;
}

module.exports.faqs = async function (ctx) {
  const faqs = [
    {
      question: 'Does organic cotton run hot or cold?',
      answer: 'Lull\’s 100% Organic Cotton Sheets feature a lightweight sateen weave that breathes well, keeping you warm in the winter and cool in the summer.'
    },
    {
      question: 'What do the Organic Cotton Sheets feel like?',
      answer: 'Lull\’s Organic Cotton Sheets are buttery soft with a luminous, silky finish.'
    },
    {
      question: 'How do I care for the Organic Cotton Sheets?',
      answer: 'For best results and longevity, machine wash cold, separately, with mild detergent. Tumble dry on lowest heat setting and use a warm iron as needed.'
    },
    {
      question: 'Is financing available for buying Lull Sheets?',
      answer: 'Yes, simply select Affirm as a payment option on the final step of the checkout process.'
    }
  ];
  return faqs;
}
