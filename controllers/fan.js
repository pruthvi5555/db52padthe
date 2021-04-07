var fan = require('../models/fan');
// List of all fans
// List of all fans
exports.fan_list = async function(req, res) {
    try{
    thefan = await fan.find();
    res.send(thefan);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    }

// for a specific fan.
exports.fan_detail = function(req, res) {
res.send('NOT IMPLEMENTED: fan detail: ' + req.params.id);
};
// Handle fan create on POST.
exports.fan_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fan();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.CompanyName = req.body.CompanyName;
    document.fanType = req.body.fanType;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// Handle fan delete form on DELETE.
exports.fan_delete = function(req, res) {
res.send('NOT IMPLEMENTED: fan delete DELETE ' + req.params.id);
};
// Handle fan update form on PUT.
exports.fan_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: fan update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.fan_view_all_Page = async function(req, res) {
    try{
    thefans = await fan.find();
    res.render('fans', { title: 'Fan Search Results', results: thefans });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };