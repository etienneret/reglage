var express = require('express');
var router = express.Router();
var hook_controller = require('../controllers/hookController')


 
/**************** lead_created *****************/

// /price-estimator.herokuapp.com/api/v1/estimate_price (for local tests)

router.post('adopteunreglage.herokuapp.com/api/v1/reglage',hook_controller.getReglageInformation)

/********** module.exports ***********/

module.exports = router;



