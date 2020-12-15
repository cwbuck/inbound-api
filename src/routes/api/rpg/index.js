const rpgController = require('../../../controllers/rpg');
const respond = require('../../../middlewares/respond');
const path = require('path');

module.exports = function mountRPG(router) {

    router.get('/simple-calc/ui', (req, res) => res.sendFile(path.join(__dirname, '../../../../public/simple-calc.html')));
    
    router.get('/simple-calc/:num', respond((req, res) => rpgController.simpleCalc(req.params.num)));

};