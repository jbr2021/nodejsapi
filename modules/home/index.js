const getIp = require('ip');
var pkgjson = require('../../package.json');

class IndexModule {
    static index(req, res){
        //let ip = req.socket.remoteAddress;
        let ip = getIp.address();
        res.send(`This is nodejs api running on version: ${pkgjson.version} with IP address: ${ip}`);
    }
    static liveness(req, res){
        //var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'NA';
        let ip = getIp.address();
        res.send(`This is Liveness probe running on version: ${pkgjson.version} with IP address: ${ip}`);
    }
    static readiness(req, res){
        let ip = getIp.address();
        res.send(`This is Readiness 11 probe running on version: ${pkgjson.version} with IP address: ${ip}`);
    }
}

module.exports = IndexModule;