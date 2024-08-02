function randomInteger(maximum) {
    return Math.floor(Math.random() * maximum);
}

function randomFloat(maximum, length) {
    return Number((Math.random() * maximum).toFixed(length));
}

function randomIntegerBetweenMinMax(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

function randomArrayItem(array) {
    return Array.isArray(array) ? (array.length > 0 ? array[randomInteger(array.length)] : false) : false;
}

function randomBoolean() {
    return randomArrayItem([true, false]);
}

function randomString(length, charset = 'abcdefghijklmnopqrstuvwxyz') {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charset[randomInteger(charset.length)];
    }
    return result;
}

function randomPhoneNumber(template = '+x(xxx)xxxxxxx') {
    return template
        .split('')
        .map(item => item.replace('x', randomIntegerBetweenMinMax(0, 10)))
        .toString()
        .replace(/,/g, '');
}

function randomEmail(template = 'xxx@yyy.zzz') {
    return template.replace('xxx', randomString(10)).replace('yyy', randomString(10)).replace('zzz', randomString(3));
}

function randomIP() {
    return `${randomInteger(256)}.${randomInteger(256)}.${randomInteger(256)}.${randomInteger(255)}`;
}

function randomStringFromTemplate(template = 'xxxxx-xxx', charset = '0123456789abcdefABCDEF') {
    return template
        .split('')
        .map(item => item.replace('x', charset[randomInteger(charset.length)]))
        .toString()
        .replace(/,/g, '');
}

module.exports.randomInteger = randomInteger;
module.exports.randomFloat = randomFloat;
module.exports.randomIntegerBetweenMinMax = randomIntegerBetweenMinMax;
module.exports.randomArrayItem = randomArrayItem;
module.exports.randomBoolean = randomBoolean;
module.exports.randomString = randomString;
module.exports.randomPhoneNumber = randomPhoneNumber;
module.exports.randomEmail = randomEmail;
module.exports.randomIP = randomIP;
module.exports.randomStringFromTemplate = randomStringFromTemplate;
