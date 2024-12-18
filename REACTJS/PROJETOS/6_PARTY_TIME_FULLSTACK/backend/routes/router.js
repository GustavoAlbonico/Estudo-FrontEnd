const router = require("express").Router();

//Service router
const servicesRouter = require("./services");
router.use("/", servicesRouter);

//Parties router
const partyRouter = require("./parties");
router.use("/", partyRouter);

module.exports = router;