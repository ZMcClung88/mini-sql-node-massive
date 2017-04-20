var app = require('./index');

module.exports = {
    getPlanes: function(req, res, next){
        var db = app.get('db');

        db.get_planes([25], function(err, planes){
            if(planes) {
              res.send(planes);
            }
        })
    }
}
