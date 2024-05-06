const views = require('koa-views');
const nunjucks = require('nunjucks');
const path = require('path');

const nunjucksEnvironment = new nunjucks.Environment(
  new nunjucks.FileSystemLoader('./../../src/client/views')
);

// map .html views to the nunjucks template engine
module.exports = views('./../../src/client/views'), {
  options: {
    nunjucksEnv: nunjucksEnvironment
  },
  map: { html: 'nunjucks' }
};
