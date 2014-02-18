
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.render('index', { title: 'Kiosk Fake Server' });
};

exports.u404 = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.render('404', { title: 'Kiosk Fake Server 404 page' });
};
