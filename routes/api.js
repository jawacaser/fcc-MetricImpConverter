'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const cors        = require('cors');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', cors(), function (req, res) {

    let reqArrayNum = req.query.input.split(/[a-zA-Z]/i)
    let reqArrayUnit = req.query.input.split(/[0-9]/)
    let unit = reqArrayUnit[reqArrayUnit.length-1]
    console.log('number '+reqArrayNum)
    console.log('unit '+reqArrayUnit[reqArrayUnit.length-1])
    let parseUnit;
    unit === "l" ? parseUnit = "L" : parseUnit = unit.toLowerCase();
    console.log('parse '+parseUnit)
    let initNum = convertHandler.getNum(reqArrayNum[0])
    let initUnit = convertHandler.getUnit(parseUnit)
    let returnUnit = convertHandler.getReturnUnit(initUnit)
    let returnNum = convertHandler.convert(initNum, initUnit)
    let returnUnitString = initNum+' '+initUnit+' converts to '+returnNum.toFixed(5)+' '+returnUnit;

    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: returnUnitString
    })
  }
  )
};
