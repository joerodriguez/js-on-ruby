var specs = []
var it = function(message, blk){
  specs.push([message, blk]);
}

var assert_equal = function(a, b){
  if (a != b){
    throw "Expected " + a + " to equal " + b;
  }
}

it("should each", function(){
  var o1 = { a:1 b:2 }
  [o1].each(function(){
    this.c = this.a + this.b;
  });
  assert_equal(o1.c, 3);
});

it("should collect", function(){
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

specs.each(function(){
  this[1].apply();
});