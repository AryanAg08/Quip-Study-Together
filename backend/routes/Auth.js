const router = require("express").Router();
const loginfy = require("loginfy-auth");
const auth = require("../middleware/auth");
const CatchAsync = require("../utils/catchAsync");

    router.route("/login")
          .post(CatchAsync(auth.login));

    router.route("/signup")
          .post(CatchAsync(auth.signup));



module.exports = router;