let express = require('express')
let router = express.Router();
let ctrlCat = require('../controllers/cat.controller.js')



// Category Router
router
    .route('/cat')
    .get(ctrlCat.getcat)
    .post(ctrlCat.addcat);

router
    .route('/cat/:catid')
    .get(ctrlCat.getonecat)
    .put(ctrlCat.editonecat)
    .delete(ctrlCat.deletecat);

module.exports = router;