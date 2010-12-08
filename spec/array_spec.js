suite('ArraySuite', function(){

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
    assert_arrays_equal([1], a);
  });

  it("should compact", function(){
    assert_arrays_equal([1,false,2,undefined,0,3].compact(), [1,2,3]);
  });

  // Since 'delete' is a reserved word in javascript, we use 'remove'
  it("should remove", function(element){
    assert_arrays_equal([1,2,3,2,0].remove(2,0), [1,3]);
  });

  it("should select", function(){
    var a = [1,2,3,4,5].select(function(){
      return this % 2 == 0;
    });
    assert_arrays_equal([2,4], a);
  });

  it("should return the first element", function(){
    assert_equal([2,3,4].first(), 2);
  });

  it("should return the last element", function(){
    assert_equal([2,3,4].last(), 4);
  });

  it("should include", function(){
    assert_true([2,4].include(4));
    assert_false([2,4].include(3));
  });

  it("should reject", function(){
    var a = [1,2,3,4].reject(function(){
      return this % 2 == 0;
    });
    assert_arrays_equal(a, [1,3])
  });

  it("should uniq", function(){
    var a = [2,2,3,4,2,4].uniq();
    assert_arrays_equal(a, [2,3,4])
  });

});
