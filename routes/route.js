const express = require("express");
const router = express.Router();
const IniData = require("../controllers/iniData");
const statistics = require("../controllers/statistics");

router.get("/init/data", IniData);

router.post("/stat/data", statistics);


module.exports = router;