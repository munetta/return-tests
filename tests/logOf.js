var type_test = require('./helpers/typeTest');
var format = require('./helpers/stringFormatters');

/**
 * makes sure the return value is the correct exponent for the base and value (base[0]**return_value=value[1])
 * 
 * @param {object} test The object containing the function which was just tested
 * @param {Number} return_value The return value from the function which was just tested 
 * @param {Number} i the index of the function
 * @param {Number} j the parameter index that was just executed
*/

function test(test, return_value, i, j) { 

 if(!type_test(
  test.unit.must_be_log_of, 
  test.unit.must_be_log_of.on, 
  test.unit.must_be_log_of.values, 
  test.unit.must_be_log_of.index_exact
 )) { 
  throw new Error(`
   function index: ${i}\n
   error: (unit.must_be_log_of) must be an object 
   with parameters (on: boolean) (values: array) 
   (index_exact: boolean)`
  );
 } 

 if(test.unit.must_be_log_of.on === true) { 

  if(test.unit.must_be_log_of.index_exact === false) { 
   var found = false;
   for(let k = 0; k < test.unit.must_be_log_of.values.length; k++) { 
    if(test.unit.must_be_log_of.values[k][0]**return_value === test.unit.must_be_log_of.values[k][1]) { 
     found = true;
     break;
    }
   }
   if(found === false) { 
    return format({
     id: 'logOfErrorAll', 
     return_value: return_value, 
     compared_to: JSON.stringify(test.unit.must_be_log_of.values)
    });
   } 
  }

  if(test.unit.must_be_log_of.index_exact === true) { 
   if(test.unit.must_be_log_of.values[j][0]**return_value !== test.unit.must_be_log_of.values[j][1]) { 
    return format({
     id: 'logOfErrorOne', 
     return_value: return_value, 
     compared_to_base: test.unit.must_be_log_of.values[j][0],
     compared_to_value: test.unit.must_be_log_of.values[j][1]
    });
   }
  }

 }

 return 'PASSED';

}

module.exports = test;