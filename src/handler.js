const articles = require('./articles');

  const getAllArticlesHandler = () => ({
    status: 'success',
    data: {
      articles,
    },
  });


module.exports = {  getAllArticlesHandler, };