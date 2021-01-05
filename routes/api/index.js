const router = require('express').Router();
const axios = require('axios');
// Requiring our models and passport as we've configured it
const db = require('../../models');
const passport = require('../../config/passport');

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({ email: req.user.email, id: req.user.id });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post('/signup', (req, res) => {
  db.User.create(req.body)
    .then(() => {
      res.redirect(307, '/api/login');
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    return res.json({});
  }
  // Otherwise send back the user's email and id
  // Sending back a password, even a hashed password, isn't a good idea
  const { password, ...user } = req.user;
  res.json(user);
});

// Above this line is boilerplate code.
router
  .route('/crimes/:id?')

  .get(async (req, res) => {
    try {
      const criteria = { include: [db.User] };
      if (req.params.id) {
        criteria.where = { id: req.params.id };
      }
      const crimes = await db.Crime.findAll(criteria);
      res.status(200).json(crimes);
    } catch (error) {
      res.status(500).json(error);
    }
  })

  .post(async (req, res) => {
    try {
      console.log('req.body :>> ', req.body);
      const { email, longitude, latitude, ...data } = req.body;
      console.log('email :>> ', email);
      const userQuery = { where: { email: email } };
      console.log('userQuery :>> ', userQuery);
      const [User] = await db.User.findAll(userQuery);
      console.log('User :>> ', User);
      const crimeQuery = {
        UserId: User.dataValues.id,
        longitude: Number(longitude),
        latitude: Number(latitude),
        ...data
      };
      console.log('crimeQuery :>> ', crimeQuery);
      const newCrime = await db.Crime.create(crimeQuery);
      console.log('newCrime :>> ', newCrime);
      res.status(201).json(newCrime);
    } catch (error) {
      if (!req.body) {
        res
          .status(400)
          .json(
            'Bad request. Your crime could not be created because the request was empty.'
          );
      } else {
        console.error(error);
        res.status(500).json(error);
      }
    }
  })

  .put(async (req, res) => {
    try {
      let criteria;
      if (req.params.id) {
        criteria = { where: { id: req.params.id }, ...req.body };
      } else {
        const { id, ...body } = req.body;
        criteria = { where: { id }, ...body };
      }
      const updated = await db.Crime.update(criteria);
      res.status.json(updated);
    } catch (error) {
      if (!req.body) {
        res
          .status(400)
          .json(
            'Bad request. Your crime could not be updated because the request was empty.'
          );
      } else if (!req.params.id && !req.body.id) {
        res
          .status(404)
          .json(
            'Bad request. Your crime could not be updated because the id was not found.'
          );
      } else {
        res.status(500).json(error);
      }
    }
  })

  .delete(async (req, res) => {
    try {
      let criteria;
      if (req.params.id) {
        criteria = { where: { id: req.params.id }, ...req.body };
      } else {
        const { id, ...body } = req.body;
        criteria = { where: { id }, ...body };
      }
      const deleted = await db.Crime.destroy(criteria);
      if (deleted) {
        res.sendStatus(200);
      }
    } catch (error) {
      if (!req.params.id && !req.body.id) {
        res
          .status(404)
          .json(
            'Bad request. Your crime could not be deleted because the id was not found.'
          );
      } else {
        res.status(500).json(error);
      }
    }
  });

router.post('/places', (req, res) => {
  try {
    const query = req.body.data;
    const GOOGLE_PLACES_API =
      process.env.GOOGLE_PLACES_API1 + '-' + process.env.GOOGLE_PLACES_API2;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${GOOGLE_PLACES_API}&query=${query}`;
    const data = '';
    const config = {
      method: 'get',
      url: url,
      responseType: 'json',
      data: data
    };
    axios(config)
      .then(function (response) {
        res.json(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
