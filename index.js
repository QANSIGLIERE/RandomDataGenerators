console.log(`a random value is: ${Math.random()}`);

function randomInteger(maximum) {
    return Math.floor(Math.random() * maximum);
}

console.log(`A random integer value is: ${randomInteger(10)}`);

function randomIntegerBetweenMinMax(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}

console.log(`A random integer value between MIN and MAX is: ${randomIntegerBetweenMinMax(4, 5)}`);

function randomArrayItem(array) {
    return Array.isArray(array) ? (array.length > 0 ? array[randomInteger(array.length)] : false) : false;
}

console.log(`A random item from an Array: ${randomArrayItem(['a', 'b'])}`);

function randomString(length, charset = 'abcdefghijklmnopqrstuvwxyz') {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charset[randomInteger(charset.length)];
    }
    return result;
}

console.log(`A random string: ${randomString(1)}`);

function randomPhoneNumber(template = '+x(xxx)xxxxxxx') {
    return template
        .split('')
        .map(item => item.replace('x', randomIntegerBetweenMinMax(0, 10)))
        .toString()
        .replace(/,/g, '');
}

console.log(`A random phone number: ${randomPhoneNumber()}`);

function randomEmail(template = 'xxx@yyy.zzz') {
    return template.replace('xxx', randomString(10)).replace('yyy', randomString(10)).replace('zzz', randomString(3));
}

console.log(`A random email: ${randomEmail()}`);

function randomIP() {
    return `${randomInteger(256)}.${randomInteger(256)}.${randomInteger(256)}.${randomInteger(255)}`;
}

console.log(`A random IP address: ${randomIP()}`);

function randomStringFromTemplate(template = 'xxxxx-xxx', charset = '0123456789abcdefABCDEF') {
    return template
        .split('')
        .map(item => item.replace('x', charset[randomInteger(charset.length)]))
        .toString()
        .replace(/,/g, '');
}

console.log(`A random string from template: ${randomStringFromTemplate()}`);
