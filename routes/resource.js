var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fan_controller = require('../controllers/fan');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// FAN ROUTES ///
// POST request for creating a Fan.
router.post('/fan', fan_controller.fan_create_post);
// DELETE request to delete fan.
router.delete('/fan/:id', fan_controller.fan_delete);
// PUT request to update fan.
router.put('/fan/:id', fan_controller.fan_update_put);
// GET request for one fan.
router.get('/fan/:id', fan_controller.fan_detail);
// GET request for list of all fan items.
router.get('/fan', fan_controller.fan_list);
module.exports = router;