const express = require("express");
const router = express.Router();
const IniData = require("../controllers/iniData");


router.get("/init/data", IniData);




module.exports = router;