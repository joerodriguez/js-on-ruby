suite("NumberSuite", function(){
  it("should do cool stuff n times", function(){
    var a = [];
    var n = 3;
    var result = n.times(function(num){
      a.push(num);
    });
    assert_arrays_equal(a,[0,1,2]);
    assert_equal(result,3);
  });
});
