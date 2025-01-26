var {
    randomInteger,
    randomFloat,
    randomIntegerBetweenMinMax,
    randomArrayItem,
    randomBoolean,
    randomString,
    randomPhoneNumber,
    randomEmail,
    randomIP,
    randomStringFromTemplate,
    randomTimeZone,
    randomCurrency,
    randomEmoji,
    randomColor,
    randomCarType,
    randomCarBrand,
    randomName,
    randomCountry,
    randomUSState,
    randomCanadaState,
    randomUSAddress,
    randomCanadaAddress,
    randomSSN,
} = require('../lib/randomDataGenerators.js');
var expect = require('expect.js');

describe('Random Data Generators library', () => {
    it('randomInteger: Validate the function returns an integer value', () => {
        let maximum = 10;
        const result = randomInteger(maximum);
        expect(Math.round(result)).to.equal(result);
    });

    it('randomInteger: Validate the function returns a value less than maximum', () => {
        let maximum = 10;
        const result = randomInteger(maximum);
        expect(result).to.be.lessThan(maximum);
    });

    it('randomInteger: Validate the function returns a number', () => {
        let maximum = 10;
        const result = randomInteger(maximum);
        expect(result).to.be.a('number');
    });

    it('randomFloat: Validate the function returns a float value', () => {
        let maximum = 10;
        let length = 4;
        const result = randomFloat(maximum, length);
        expect(Math.trunc(result)).not.to.eql(result);
    });

    it('randomFloat: Validate the function returns a value less than maximum', () => {
        let maximum = 10;
        let length = 4;
        const result = randomFloat(maximum, length);
        expect(result).to.be.lessThan(maximum);
    });

    it('randomFloat: Validate the function returns a number', () => {
        let maximum = 10;
        let length = 4;
        const result = randomFloat(maximum, length);
        expect(result).to.be.a('number');
    });

    it('randomIntegerBetweenMinMax: Validate the function returns an integer value', () => {
        let maximum = 10;
        let minimum = 4;
        const result = randomIntegerBetweenMinMax(minimum, maximum);
        expect(Math.trunc(result)).to.eql(result);
    });

    it('randomIntegerBetweenMinMax: Validate the function returns a value less than maximum', () => {
        let maximum = 10;
        let minimum = 4;
        const result = randomIntegerBetweenMinMax(minimum, maximum);
        expect(result).to.be.lessThan(maximum);
        expect(result).to.be.greaterThan(minimum - 1);
    });

    it('randomIntegerBetweenMinMax: Validate the function returns a number', () => {
        let maximum = 10;
        let minimum = 4;
        const result = randomIntegerBetweenMinMax(minimum, maximum);
        expect(result).to.be.a('number');
    });

    it('randomIntegerBetweenMinMax: Validate the function returns a minimum', () => {
        let minimum = 4;
        let maximum = minimum;
        const result = randomIntegerBetweenMinMax(minimum, maximum);
        expect(result).to.be.a('number');
    });

    it('randomArrayItem: Check the empty array', () => {
        const result = randomArrayItem([]);
        expect(result).to.not.be.ok();
    });

    it('randomArrayItem: Check the array with one item', () => {
        const result = randomArrayItem(['a']);
        expect(result).to.eql('a');
    });

    it('randomArrayItem: Check the array with two items', () => {
        const result = randomArrayItem([1, 2]);
        expect(result).to.match(/[1-2]/);
    });

    it('randomBoolean: Validate the function returns a boolean value', () => {
        const result = randomBoolean();
        expect(result).to.be.a('boolean');
    });

    it('randomString: Validate the function returns a string value', () => {
        const result = randomString(1);
        expect(result).to.be.a('string');
    });

    it('randomString: Validate the function returns a random string', () => {
        const result = randomString(1);
        expect(result).to.match(/[a-z]/);
    });

    it('randomString: Validate the function returns a random string with the correct length', () => {
        const result = randomString(8);
        expect(result).to.have.length(8);
    });

    it('randomPhoneNumber: Validate the function returns a string value', () => {
        const result = randomPhoneNumber();
        expect(result).to.be.a('string');
    });

    it('randomPhoneNumber: Validate the function returns a random string', () => {
        const result = randomPhoneNumber('xxxxxxxxxx');
        expect(result).to.match(/.*[0-9]/);
    });

    it('randomPhoneNumber: Validate the function returns a random string with the correct length', () => {
        const result = randomPhoneNumber('xxxxxxxxxx');
        expect(result).to.have.length(10);
    });

    it('randomEmail: Validate the function returns a string value', () => {
        const result = randomEmail();
        expect(result).to.be.a('string');
    });

    it('randomEmail: Validate the function returns a random string', () => {
        const result = randomEmail();
        expect(result).to.match(/.*[a-z]@.*[a-z].*[a-z]/);
    });

    it('randomEmail: Validate the function returns a random string with the correct length', () => {
        const result = randomEmail();
        expect(result).to.have.length(25);
    });

    it('randomIP: Validate the function returns a string value', () => {
        const result = randomIP();
        expect(result).to.be.a('string');
    });

    it('randomIP: Validate the function returns a random string', () => {
        const result = randomIP();
        expect(result).to.match(/.*[0-9]\..*[0-9]\..*[0-9]\..*[0-9]/);
    });

    it('randomStringFromTemplate: Validate the function returns a string value', () => {
        const result = randomStringFromTemplate();
        expect(result).to.be.a('string');
    });

    it('randomStringFromTemplate: Validate the function returns a random string', () => {
        const result = randomStringFromTemplate();
        expect(result).to.match(/.*[a-zA-Z0-9]\-.*[a-zA-Z0-9]/);
    });

    it('randomStringFromTemplate: Validate the function returns a random string with the correct length', () => {
        const result = randomStringFromTemplate();
        expect(result).to.have.length(9);
    });

    it('randomTimeZone: Validate the function returns an object', () => {
        const result = randomTimeZone();
        expect(result).to.be.an('object');
    });

    it('randomTimeZone: Validate keys in the returned JSON', () => {
        const result = randomTimeZone();
        expect(result).to.only.have.keys('name', 'value');
    });

    it('randomTimeZone: Validate the the value of name', () => {
        const result = randomTimeZone();
        expect(result['name']).to.be.a('string');
    });

    it('randomTimeZone: Validate the the value of value', () => {
        const result = randomTimeZone();
        expect(result['value']).to.be.a('string');
    });

    it('randomCurrency: Validate the function returns an object', () => {
        const result = randomCurrency();
        expect(result).to.be.an('object');
    });

    it('randomCurrency: Validate keys in the returned JSON', () => {
        const result = randomCurrency();
        expect(result).to.only.have.keys('country', 'currency_code', 'symbol');
    });

    it('randomCurrency: Validate the the value of country', () => {
        const result = randomCurrency();
        expect(result['country']).to.be.a('string');
    });

    it('randomCurrency: Validate the the value of currency_code', () => {
        const result = randomCurrency();
        expect(result['currency_code']).to.be.a('string');
    });

    it('randomCurrency: Validate the the value of symbol', () => {
        const result = randomCurrency();
        expect(result['symbol']).to.be.a('string');
    });

    it('randomEmoji: Validate the function returns an object', () => {
        const result = randomEmoji();
        expect(result).to.be.an('object');
    });

    it('randomEmoji: Validate keys in the returned JSON', () => {
        const result = randomEmoji();
        expect(result).to.only.have.keys('emoji', 'name', 'unicode');
    });

    it('randomEmoji: Validate the the value of emoji', () => {
        const result = randomEmoji();
        expect(result['emoji']).to.be.a('string');
    });

    it('randomEmoji: Validate the the value of name', () => {
        const result = randomEmoji();
        expect(result['name']).to.be.a('string');
    });

    it('randomEmoji: Validate the the value of unicode', () => {
        const result = randomEmoji();
        expect(result['unicode']).to.be.a('string');
    });

    it('randomColor: Validate the function returns an object', () => {
        const result = randomColor();
        expect(result).to.be.an('object');
    });

    it('randomColor: Validate keys in the returned JSON', () => {
        const result = randomColor();
        expect(result).to.only.have.keys('color', 'code');
    });

    it('randomColor: Validate the the value of color', () => {
        const result = randomColor();
        expect(result['color']).to.be.a('string');
    });

    it('randomColor: Validate the the value of code', () => {
        const result = randomColor();
        expect(result['code']).to.be.a('string');
    });

    it('randomCarType: Validate the function returns a string', () => {
        const result = randomCarType();
        expect(result).to.be.an('string');
    });

    it('randomCarBrand: Validate the function returns a string', () => {
        const result = randomCarBrand();
        expect(result).to.be.an('string');
    });

    it('randomName: Validate the function returns a string value ', () => {
        const result = randomName();
        expect(result).to.be.a('string');
    });

    it('randomCountry: Validate the function returns an object', () => {
        const result = randomCountry();
        expect(result).to.be.an('object');
    });

    it('randomCountry: Validate it returns a non empty object', () => {
        const result = randomCountry();
        expect(result['country']).to.be.a('string');
    });

    it('randomCountry: Validate keys in the returned JSON', () => {
        const result = randomCountry();
        expect(result).to.only.have.keys('country', 'alpha2-code', 'alpha3-code');
    });

    it('randomUSState: Validate the function returns an object', () => {
        const result = randomUSState();
        expect(result).to.be.an('object');
    });

    it('randomUSState: Validate it returns a non empty object', () => {
        const result = randomUSState();
        expect(result['name']).to.be.a('string');
    });

    it('randomUSState: Validate keys in the returned JSON', () => {
        const result = randomUSState();
        expect(result).to.only.have.keys('abbreviation', 'name');
    });

    it('randomCanadaState: Validate the function returns an object', () => {
        const result = randomCanadaState();
        expect(result).to.be.an('object');
    });

    it('randomCanadaState: Validate it returns a non empty object', () => {
        const result = randomCanadaState();
        expect(result['name']).to.be.a('string');
    });

    it('randomCanadaState: Validate keys in the returned JSON', () => {
        const result = randomCanadaState();
        expect(result).to.only.have.keys('abbreviation', 'name');
    });

    it('randomUSAddress: Validate the function returns an object', () => {
        const result = randomUSAddress();
        expect(result).to.be.an('object');
    });

    it('randomUSAddress: Validate it returns a non empty object', () => {
        const result = randomUSAddress();
        expect(result['lat_lon']).to.be.a('string');
    });

    it('randomUSAddress: Validate keys in the returned JSON', () => {
        const result = randomUSAddress();
        expect(result).to.only.have.keys('street_1', 'street_2', 'city', 'state', 'zip_code', 'lat_lon');
    });

    it('randomCanadaAddress: Validate the function returns an object', () => {
        const result = randomCanadaAddress();
        expect(result).to.be.an('object');
    });

    it('randomCanadaAddress: Validate it returns a non empty object', () => {
        const result = randomCanadaAddress();
        expect(result['lat_lon']).to.be.a('string');
    });

    it('randomCanadaAddress: Validate keys in the returned JSON', () => {
        const result = randomCanadaAddress();
        expect(result).to.only.have.keys('street_1', 'street_2', 'city', 'state', 'zip_code', 'lat_lon');
    });

    it('randomSSN: Validate it returns a non empty string', () => {
        const result = randomSSN();
        expect(result).to.be.a('string');
    });

    it('randomSSN: Validate the function returns a random string with the correct length', () => {
        const result = randomSSN();
        expect(result).to.have.length(11);
    });
});
