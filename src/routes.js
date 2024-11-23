const {  getAllArticlesHandler, } = require('./handler');

const routes = [
    {
      method: 'GET',
      path: '/articles',
      handler: getAllArticlesHandler
    },
  ];
   
  module.exports = routes;