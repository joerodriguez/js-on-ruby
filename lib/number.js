Number.prototype.times = function(blk){
  for (var i = 0 ; i < this ; ++i){
    blk.apply(i, [i]);
  }
  return this;
}
