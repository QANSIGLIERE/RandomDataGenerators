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
});
