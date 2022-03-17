const express = require('express');
const router = express.Router();

// middleware that is specific to this router
// router.use((req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// })

// import controller method
const UserController = require('../controllers/UserController');


// define the home page route
router.get('/', [UserController.logIn])

module.exports = router