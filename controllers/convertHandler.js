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
    let units = ['gal', 'L', 'lbs', 'kg', 'mi', 'km']
    for (let i = 0; i < units.length; i++) {
      if (input.includes(units[i])) {
        return units[i]
      }
    }
    throw new Error('invalid unit input')
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
      return initNum * galToL
    } else if (initUnit === 'L') {
      return initNum / galToL
    } else if (initUnit === 'lbs') {
      return initNum * lbsToKg
    } else if (initUnit === 'kg') {
      return initNum / lbsToKg
    } else if (initUnit === 'mi') {
      return initNum * miToKm
    } else {
      return initNum / miToKm
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
