function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.replace(/[a-zA-Z]/g, "");
    if (result === '') { return 1 } // no numbers were entered, assume 1

    if (result.includes('/')) {
      let splitResult = result.split('/')
      if (splitResult.length > 2)
      throw new Error('invalid number') // number contains more than one '/' sign
    }

    let num = eval(input) // else the number is valid
    return num;
  };
  
  this.getUnit = function(input) {
    let inp = input.toLowerCase()
    let units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
    for (let i = 0; i < units.length; i++) {
      if (inp === units[i]) {
        return units[i] === 'l' ? "L" : units[i]
      }
    }
    throw new Error('invalid unit')
  };
  
  this.getReturnUnit = function(initUnit) {
    let units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];
    let returnUnit = ['L', 'gal', 'kg', 'lbs', 'km', 'mi']
    let returnIndex = units.indexOf(initUnit)
    
    return returnUnit[returnIndex]
  };

  this.spellOutUnit = function(unit) {
    let units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km']
    let spelled = ['gallons', 'liters', 'pounds', 'kilograms', 'miles', 'kilometers']
    let unitIndex = units.indexOf(unit)
    
    return spelled[unitIndex]
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    if (initUnit === 'gal') {
      return parseFloat((initNum * galToL).toFixed(5))
    } else if (initUnit === 'L') {
      return parseFloat((initNum / galToL).toFixed(5))
    } else if (initUnit === 'lbs') {
      return parseFloat((initNum * lbsToKg).toFixed(5))
    } else if (initUnit === 'kg') {
      return parseFloat((initNum / lbsToKg).toFixed(5))
    } else if (initUnit === 'mi') {
      return parseFloat((initNum * miToKm).toFixed(5))
    } else {
      return parseFloat((initNum / miToKm).toFixed(5))
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
