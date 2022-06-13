test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});
test("One dollar should be 127.9 yenes", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1)).toBe(127.9);
});
test("One Yen should be 0.8 british pound", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1)).toBe(0.8);
});