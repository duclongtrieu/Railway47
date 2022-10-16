//// EX5: Parameter
// Q1
var scare = function (a, b) {
    if (b === void 0) { b = 1; }
    return console.log(a * b);
};
console.log("Question1");
scare(5, 3);
scare(5);
//Q2
var multiply1 = function () {
    var numParam = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numParam[_i] = arguments[_i];
    }
    var result = 1;
    numParam.forEach(function (e) {
        result * -e;
    });
    console.log(result);
};
console.log("Question2");
multiply1(5);
multiply1(5, 3);
multiply1(5, 3.2);
//Q3
var opinion = function (name, email) {
    if (email != undefined) {
        console.log(" T\u00F4i l\u00E0 ".concat(name, ". Email c\u1EE7a t\u00F4i l\u00E0 ").concat(email));
    }
    else {
        console.log(" T\u00F4i l\u00E0 ".concat(name, ". T\u00F4i ch\u01B0a c\u00F3 email"));
    }
};
console.log("Question3");
opinion("Nam");
opinion("Nam", "nam@gmail.com");
