const express = require('express');
const tutorials = require("../controllers/TutorialController.js");
// const UserController = require('../controllers/UserController');

const router = express.Router();

router.post("/", tutorials.create);
router.get("/", tutorials.findAll);
router.get("/published", tutorials.findAllPublished);
router.get("/:id", tutorials.findOne);
router.put("/:id", tutorials.update);
router.delete("/:id", tutorials.delete);
router.delete("/", tutorials.deleteAll);

// // define the home page route
// router.get('/login', [UserController.login]);
// router.get('/register', [UserController.createUser]);

module.exports = router