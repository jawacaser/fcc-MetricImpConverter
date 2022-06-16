'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');
const cors        = require('cors');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', cors(), function (req, res) {
    console.log('input: ' + req.query.input)
    try {
    let reqArrayNum = req.query.input.split(/[a-zA-Z]/i)
    let reqArrayUnit = req.query.input.split(/[0-9]/)
    let unit = reqArrayUnit[reqArrayUnit.length-1]
    // console.log('number '+reqArrayNum)
    // console.log('unit '+reqArrayUnit[reqArrayUnit.length-1])
    let parseUnit;
    unit === 'l' || unit === 'L' ? parseUnit = unit.toUpperCase() : parseUnit = unit.toLowerCase()
    // console.log('parse '+parseUnit)

    try {
      convertHandler.getNum(reqArrayNum[0])
    } catch (error) {
      try {
        convertHandler.getUnit(parseUnit)
      } catch (error) {
        return res.json("invalid number and unit")
      }
      return res.json("invalid number")
    }

    let initNum = convertHandler.getNum(reqArrayNum[0])
    let initUnit = convertHandler.getUnit(parseUnit)
    let returnUnit = convertHandler.getReturnUnit(initUnit)
    let returnNum = convertHandler.convert(initNum, initUnit)
    let initUnitString = convertHandler.spellOutUnit(initUnit)
    let returnUnitString = convertHandler.spellOutUnit(returnUnit)

    res.json({
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum,
      returnUnit: returnUnit,
      string: `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`
    })
    } catch (e) {
      return res.json(e.message)
    }
  });
};
