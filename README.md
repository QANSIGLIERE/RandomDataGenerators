# RandomDataGenerators

The library is based on the Javascript programming language and it contains a set of functions to generate some data

## Author

https://www.youtube.com/@QANSIGLIERE/

## Installing

Using npm:

`npm i qansigliere-randomdatagenerators`

## Functions

-   `randomInteger` - it returns a random integer value from 0 to the specified maximum value, but the maximum value is
    not included
-   `randomFloat` - it returns a random float value from 0 to the specified maximum value, but the maximum value is not
    included and you can control the number of digits after the dot
-   `randomIntegerBetweenMinMax` - it returns a random integer value from the specified minimum value to the specified
    maximum value, but the maximum value is not included
-   `randomArrayItem` - it returns a random element of the specified array
-   `randomBoolean` - it returns true or false value
-   `randomString` - it returns a random string value according to the specified length and character set
-   `randomPhoneNumber` - it returns a random phone number according to the specified template
-   `randomEmail` - it returns a random email address according to the specified template
-   `randomIP` - it returns a random IP address
-   `randomStringFromTemplate` - it returns a random string value according to the specified template and character set
-   `randomTimeZone` - it returns a JSON object with 2 keys - "name" and "value"
-   `randomCurrency` - it returns a JSON object with 3 keys - "country", "currency_code" and "symbol"
-   `randomEmoji` - it returns a JSON object with 3 keys - "emoji", "name" and "unicode"
-   `randomColor` - it returns a JSON object with 2 keys - "color" and "code"
-   `randomCarType` - it returns a random car type: "Car", "Truck", "SUV", "Van", "Motorcycle", "Other"
-   `randomCarBrand` - it returns a random car brand

## Example

### CommonJS

```
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
} = require("qansigliere-randomdatagenerators");

console.log(randomInteger(9));
console.log(randomFloat(9, 3));
console.log(randomIntegerBetweenMinMax(1, 5));
console.log(randomArrayItem(["a", "b", "c"]));
console.log(randomBoolean());
console.log(randomString(8));
console.log(randomPhoneNumber());
console.log(randomEmail());
console.log(randomIP());
console.log(randomStringFromTemplate());
// with changed templates
console.log(randomString(5, "abc"));
console.log(randomPhoneNumber("xxx-xxxx-xx-xx"));
console.log(randomEmail("xxx+123@yyyyyy.zzzzzz"));
console.log(randomStringFromTemplate("xxxxx-xxxxx-xxxxx", "abc123"));
```

Output

```
8 // andomInteger
2.328 // randomFloat
3 // randomIntegerBetweenMinMax
a // randomArrayItem
false // randomBoolean
bvhiubuk // randomString
+0(890)1608497 // randomPhoneNumber
lkcmadmwhd@shzxorxxna.qvp // randomEmail
22.53.101.41 // randomIP
5A31c-cDE // randomStringFromTemplate
// with changed templates
acbbc // randomString
342-4550-44-98 // randomPhoneNumber
wiopcjxowh+123@isugadikakyyy.jiezzz // randomEmail
112ab-b3222-1113a // randomStringFromTemplate
```

### ES Module

```
// CommonJS

import {
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
} from "qansigliere-randomdatagenerators";

console.log(randomInteger(9));
console.log(randomFloat(9, 3));
console.log(randomIntegerBetweenMinMax(1, 5));
console.log(randomArrayItem(["a", "b", "c"]));
console.log(randomBoolean());
console.log(randomString(8));
console.log(randomPhoneNumber());
console.log(randomEmail());
console.log(randomIP());
console.log(randomStringFromTemplate());

console.log(randomString(5, "abc"));
console.log(randomPhoneNumber("xxx-xxxx-xx-xx"));
console.log(randomEmail("xxx+123@yyyyyy.zzzzzz"));
console.log(randomStringFromTemplate("xxxxx-xxxxx-xxxxx", "abc123"));

```

Output

```
3
7.156
2
c
true
aovxhxsl
+8(979)4234540
krhyylyljs@gluqsepbpz.wjd
182.141.124.210
39bBD-cc7

babab
649-9481-45-10
ijdsljjfgw+123@gtapjdmabiyyy.kupzzz
123c1-231c1-1a12a
```
