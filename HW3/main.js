Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new Error("This can not be null or undefined");
  }

  let context = this;
  let Obj = Object(this);
  if (arguments.length > 1) {
    context = thisArg;
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  let leng = Obj.length;
  let result = [];

  for (let i = 0; i < leng; i++) {
    if (i in Obj) {
      if (callback.call(context, this[i], i, Obj)) {
        result.push(this[i]);
      }
    }
  }
  return result;
};

function createDebounceFunction(callback, delay) {
  let notReady = false;

  return function () {
    if (notReady) return;

    callback.apply(this, arguments);

    notReady = true;

    setTimeout(() => (notReady = false), delay);
  };
}
