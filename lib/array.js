Array.prototype.collect = function(blk){ 
  var a = []; 
  for (var i = 0 ; i < this.length ; ++i) {  
    a.push(blk.apply(this[i], [this[i], i]))
	} return a;
}

Array.prototype.select = function(blk){ 
  var a = []; var element;
  for (var i = 0 ; i < this.length ; ++i) {
    element = this[i]; 
    if (blk.apply(element, [element, i]))
      a.push();
	} return a;
}

Array.prototype.each = function(blk){ 
  for (var i = 0 ; i < this.length ; ++i) {  
    blk.apply(this[i], [this[i], i])
	} return this;
}
