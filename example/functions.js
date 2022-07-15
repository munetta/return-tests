

module.exports = [

  { 

    /*
      standard test example. 
      compares unit.allowed_values.values array 
      with the function_called.parameters array
      AT each index. Return value from function_called.parameters[i]
      must match unit.allowed_values.values[i]. 
    */

    function_called: {

      on: true,

      description: 'function Name / function Filepath / function Description / function parameter names',

      parameters: [[2, 6], [3, 2], [3, 23], [22, 22]],

      function: function (a, b) {
        try { 
          return a + b; 
        } catch(err) { 
          return err; 
        } 
      }

    }, 
    
    unit: { 

      allowed_values: {

        on: true,

        index_exact: false,

        values: [{a: '3'}, 12, 'hello world', 44]

      }, 
    
    }  

  },

];