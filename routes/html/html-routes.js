
const path = require('path');

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });

  // cms route loads cms.html
  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/cms.html'));
  });

  // blog route loads blog.html
  app.get('/members', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/blog.html'));
  });

  // authors route loads author-manager.html
  app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/author-manager.html'));
  });

  // authors route loads author-manager.html
  app.get('/crime', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/author-manager.html'));
  });
};
