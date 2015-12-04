module.exports = function() {
  'use strict';

  var set_value;
  var set_key;

  return {
    getValue: function(key){
      if (key === undefined){
        return null;
      }
      else if (key === set_key){
        return set_value;
      }
      else if (key !== set_key){
        return null;
      }
    },
    setValue : function(key, value){
        set_key = key;
        set_value = value;
    }
    };

};


