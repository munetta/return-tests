function format(string_object) {
 switch(string_object.id) { 
  case 'greaterThanErrorAll':
   return `greaterThanError: '${string_object.return_value}' is less than all of the values in the array '${string_object.compared_to}'\n`;
  case 'greaterThanErrorOne':
   return `greaterThanError: '${string_object.return_value}' is less than '${string_object.compared_to}'\n`;
  case 'inRangeErrorAll':
   return `inRangeError: '${string_object.return_value}' is not in the range of all the sets in the array '${string_object.compared_to}'\n`;
  case 'inRangeErrorOne':
   return `inRangeError: '${string_object.return_value}' is not in the range '${string_object.compared_to}'\n`;
  case 'lessThanErrorAll': 
   return `lessThanError: '${string_object.return_value}' is more than all of the values in the array '${string_object.compared_to}'\n`;
  case 'lessThanErrorOne':
   return `lessThanError: '${string_object.return_value}' is more than '${string_object.compared_to}'\n`;
  case 'regexErrorAll':
   return `regex error: '${string_object.return_value}' does not pass '${string_object.compared_to} (index ${string_object.index})'\n`;
  case 'regexErrorOne':
   return `regex error: '${string_object.return_value}' does not pass '${string_object.compared_to}'\n`;
  case 'valueErrorAll':
  case 'valueErrorOne':
  case 'typeErrorAll':
   return `type error: '${string_object.return_value}' is not in the array of allowed types '${string_object.compared_to}'\n`;
  case 'typeErrorOne':
   return `type error: '${string_object.return_value}' does not match the allowed type '${string_object.compared_to}'\n`;
 }
}
module.exports = format;