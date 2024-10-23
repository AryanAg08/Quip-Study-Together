const router = require("express").Router();
const user = require("../middleware/user");
const CatchAsync = require("../utils/catchAsync");

    router.route("/dashboard")
            .get(CatchAsync(user.IsUser), user.dashboard);

module.exports = router;