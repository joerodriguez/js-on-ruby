suites = {};

assert_equal = function(a, b){
  if (is_array(a)){
    return assert_arrays_equal(a, b);
  }
  
  if (a != b){
    throw "Expected " + a + " to equal " + b;
  }
}

assert_arrays_equal = function(a,b){
  for (i = 0 ; i < a.length ; ++i) {
    if (a[i] != b[i]){
      throw "Expected " + a + " to equal " + b;
    }
	} return true;
}

assert_true = function(a){
  if (!a){
    throw "Expected " + a + " to be true";
  }
}

assert_false = function(a){
  if (a){
    throw "Expected " + a + " to be false";
  }
}

is_array = function (obj) {
  return (obj.constructor.toString().indexOf("Array") != -1);
}

suite = function(name, blk){
  this.name = name;
  suites[name] = [];
  blk.apply(this, []);
}

it = function(message, blk){
  suites[this.name].push([message, blk]);
}

var loaded = function(){
  for (name in suites){
    if (suites.hasOwnProperty(name)){      
      suites[name].each(function(){
        try {
          this[1].apply();
        } catch(e) {
          throw(name + ": " + this[0] + ": " + e);
        }
      });
    }
  }
}

window.onload = loaded;