

exports.cToF = function (c) {
   var f = 9/5 * c + 32;
    return f.toFixed(2);
}

exports.fToC = function (f) {
    var c = 5/9 * (f - 32);
    return c.toFixed(2);
}
