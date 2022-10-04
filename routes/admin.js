const express = require("express");
const { createAdmin } = require("../controllers/admin");
const { authUser } = require("../middleware/auth");
const router = express.Router();

router.route('/create').post(authUser, createAdmin)
// router.route("/create").post(createAdmin);

module.exports = router;
