// Author https://www.youtube.com/@QANSIGLIERE/

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

function randomTimeZone() {
    const timeZones = require('../JSONs/timeZones.json');
    return randomArrayItem(timeZones);
}

function randomCurrency() {
    const currencies = require('../JSONs/currencies.json');
    return randomArrayItem(currencies);
}

function randomEmoji() {
    const emojis = require('../JSONs/emojis.json');
    return randomArrayItem(emojis);
}

function randomColor() {
    const colors = require('../JSONs/colors.json');
    return randomArrayItem(colors);
}

function randomCarType() {
    const carTypes = require('../JSONs/carTypes.json');
    return randomArrayItem(carTypes);
}

function randomCarBrand() {
    const carBrands = require('../JSONs/carBrands.json');
    return randomArrayItem(carBrands);
}

function randomName() {
    const names = require('../JSONs/names.json');
    return randomArrayItem(names);
}

function randomCountry() {
    const addresses = require('../JSONs/addresses.json');
    let randomCountry = randomArrayItem(addresses);
    return {
        country: randomCountry['country'],
        'alpha2-code': randomCountry['alpha2-code'],
        'alpha3-code': randomCountry['alpha3-code'],
    };
}

function randomState(county_name) {
    const addresses = require('../JSONs/addresses.json');
    let filteredAddresses = addresses.filter(x => x['country'] == county_name)[0]; // It returns an array
    let randomAddress = randomArrayItem(filteredAddresses['states']);

    return {
        abbreviation: randomAddress['abbreviation'],
        name: randomAddress['name'],
    };
}

function randomUSState() {
    return randomState('United States of America');
}

function randomCanadaState() {
    return randomState('Canada');
}

function randomAddress(county_name) {
    const addresses = require('../JSONs/addresses.json');
    let filteredAddresses = addresses.filter(x => x['country'] == county_name)[0]; // It returns an array
    let randomState = randomArrayItem(filteredAddresses['states']);
    let randomAddress = randomArrayItem(randomState['zip_codes']);
    return {
        street_1: randomAddress['street_1'],
        street_2: randomAddress['street_2'],
        city: randomAddress['city'],
        state: randomState['name'],
        state_abbreviation: randomState['abbreviation'],
        zip_code: randomAddress['zip_code'],
        lat_lon: randomAddress['lat_lon'],
    };
}

function randomUSAddress() {
    return randomAddress('United States of America');
}

function randomCanadaAddress() {
    return randomAddress('Canada');
}

function randomSSN() {
    return randomPhoneNumber('xxx-xx-xxxx');
}

function realUSNumber() {
    const phoneNumbers = require('../JSONs/usNumbers.json');
    return randomArrayItem(phoneNumbers);
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
module.exports.randomTimeZone = randomTimeZone;
module.exports.randomCurrency = randomCurrency;
module.exports.randomEmoji = randomEmoji;
module.exports.randomColor = randomColor;
module.exports.randomCarType = randomCarType;
module.exports.randomCarBrand = randomCarBrand;
module.exports.randomName = randomName;
module.exports.randomCountry = randomCountry;
module.exports.randomUSState = randomUSState;
module.exports.randomCanadaState = randomCanadaState;
module.exports.randomUSAddress = randomUSAddress;
module.exports.randomCanadaAddress = randomCanadaAddress;
module.exports.randomSSN = randomSSN;
module.exports.realUSNumber = realUSNumber;
