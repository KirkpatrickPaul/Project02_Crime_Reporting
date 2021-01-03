// Requiring path to so we can use relative routes to our HTML files
const path = require('path');
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const searchParams = {
      include: [db.User]
    };
    const crimeData = await db.Crime.findAll(searchParams);
    const crime = crimeData.map((crime) => crime.dataValues);
    res.status(200);
    res.render('homepage', {
      crime,
      GOOGLE_PLACES_API1: process.env.GOOGLE_PLACES_API1,
      GOOGLE_PLACES_API2: process.env.GOOGLE_PLACES_API2,
      style: 'homepage.css',
      javascript: 'homepage.js'
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }

  // // If the user already has an account send them to the members page
  // if (req.user) {
  //   res.redirect('/members');
  // }

  // res.sendFile(path.join(__dirname, '../../public/signup.html'));
});
// Routes the users to see crimes
router.get('/crime', async (req, res) => {
  try {
    const searchParams = {
      include: [db.User]
    };
    const crimeData = await db.Crime.findAll(searchParams);
    const crime = crimeData.map((crime) => crime.dataValues);
    res.status(200);
    res.render('crimes', {
      crime,
      GOOGLE_PLACES_API1: process.env.GOOGLE_PLACES_API1,
      GOOGLE_PLACES_API2: process.env.GOOGLE_PLACES_API2,
      style: 'crimes.css',
      javascript: 'crimes.js'
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
  }
});
// Routes the user to report a crime
router.get('/report', (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/members.html"))
});

// Routes user to login page
router.get('/login', (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect('/members');
  }

  res.sendFile(path.join(__dirname, '../../public/login.html'));
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get('/members', isAuthenticated, (_req, res) => {
  res.sendFile(path.join(__dirname, '../../public/members.html'));
});

module.exports = router;
