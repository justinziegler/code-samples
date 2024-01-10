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