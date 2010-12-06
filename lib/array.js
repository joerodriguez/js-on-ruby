Array.prototype.collect = function(blk){ 
  var a = []; 
  for (var i = 0 ; i < this.length ; ++i) {  
    a.push(blk.apply(this[i], [this[i], i]))
	} return a;
}

Array.prototype.each = function(blk){ 
  for (var i = 0 ; i < this.length ; ++i) {  
    blk.apply(this[i], [this[i], i])
	} return this;
}

Array.prototype.first = function(){ 
  return this[0];
}

Array.prototype.include = function(element){ 
  for (var i = 0 ; i < this.length ; ++i) {
    if (this[i] == element)  
      return true;
	} return false;
}

Array.prototype.last = function(element){ 
  return this[this.length-1];
}

Array.prototype.reject = function(blk){ 
  var a = []; var element;
  for (var i = 0 ; i < this.length ; ++i) {
    element = this[i]; 
    if (!blk.apply(element, [element, i]))
      a.push(element);
	} return a;
}

Array.prototype.select = function(blk){ 
  var a = []; var element;
  for (var i = 0 ; i < this.length ; ++i) {
    element = this[i]; 
    if (blk.apply(element, [element, i]))
      a.push(element);
	} return a;
}

Array.prototype.uniq = function(blk){ 
  var a = []; var element;
  for (var i = 0 ; i < this.length ; ++i) {
    element = this[i]; 
    if (!a.include(element))
      a.push(element);
	} return a;
}
