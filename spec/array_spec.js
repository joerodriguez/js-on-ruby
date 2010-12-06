var specs = []

var is_array = function (obj) {
  return (obj.constructor.toString().indexOf("Array") != -1);
}

var it = function(message, blk){
  specs.push([message, blk]);
}

var assert_equal = function(a, b){
  if (is_array(a)){
    return assert_arrays_equal(a, b);
  }
  
  if (a != b){
    throw "Expected " + a + " to equal " + b;
  }
}

var assert_arrays_equal = function(a,b){
  for (var i = 0 ; i < a.length ; ++i) {
    if (a[i] != b[i]){
      throw "Expected " + a + " to equal " + b;
    }
	} return true;
}

var assert_true = function(a){
  if (!a){
    throw "Expected " + a + " to be true";
  }
}

var assert_false = function(a){
  if (a){
    throw "Expected " + a + " to be false";
  }
}

it("should each", function(){
  var o1 = { a:1, b:2 };
  [o1].each(function(){
    this.c = this.a + this.b;
  });
  assert_equal(o1.c, 3);
});

it("should collect", function(){
  var o1 = { a:1, b:2 };
  var a = [o1].collect(function(){
    return this.a
  });
  assert_equal([1], a);
});

it("should select", function(){
  var a = [1,2,3,4,5].select(function(){
    return this % 2 == 0;
  });
  assert_equal([2,4], a);
});

it("should return the first element", function(){
  assert_equal([2,4].first(), 2);
});

it("should return the last element", function(){
  assert_equal([2,4].last(), 4);
});

it("should include", function(){
  assert_true([2,4].include(4));
  assert_false([2,4].include(5));
});

it("should reject", function(){
  var a = [1,2,3,4].reject(function(){
    return this % 2 == 0;
  });
  assert_equal(a, [1,3])
});

specs.each(function(){
  this[1].apply();
});
