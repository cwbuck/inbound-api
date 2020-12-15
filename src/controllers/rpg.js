const config = require('../../config').get().eradaniConnect;
const eradaniConnect = require('@eradani-inc/eradani-connect');
const connection = new eradaniConnect.transports.Xml("*LOCAL", config.username, config.password, config.connectionPath);
// const connection = new eradaniConnect.transports.Odbc(config.odbc);
const mypgm = require('../models/pgm-model');

function simpleCalc(num) {
    return connection.execute(mypgm, {
        SMALLNUM: num
    });
}

module.exports = {
    simpleCalc
};