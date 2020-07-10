const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  "/",
  [
    body("name", "Name is Required").not().isEmpty(),
    body("email", "Please include a valid Email").isEmail(),
    body(
      "password",
      "Please Enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    console.log(req.body);
    res.send("User Route");
  }
);

module.exports = router;
