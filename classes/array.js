Array.prototype.isEqual = function (arr) {
  return this.every((el, i) => el === arr[i]);
};
