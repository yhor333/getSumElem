Array.prototype.getSumElem = function(callback) {
  let res = 0;
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      if (callback(this[i][j])) {
        res += this[i][j];
      }
    }
  }
  return res;
}
