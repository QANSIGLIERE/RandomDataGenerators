export function randomInteger(maximum: any): number;
export function randomFloat(maximum: any, length: any): number;
export function randomIntegerBetweenMinMax(minimum: any, maximum: any): number;
export function randomArrayItem(array: any): any;
export function randomBoolean(): any;
export function randomString(length: any, charset?: string): string;
export function randomPhoneNumber(template?: string): string;
export function randomEmail(template?: string): string;
export function randomIP(): string;
export function randomStringFromTemplate(template?: string, charset?: string): string;
export function randomTimeZone(): any;
export function randomCurrency(): any;
export function randomEmoji(): any;
export function randomColor(): any;
export function randomCarType(): any;
export function randomCarBrand(): any;
export function randomName(): any;
export function randomCountry(): {
    country: any;
    'alpha2-code': any;
    'alpha3-code': any;
};
export function randomUSState(): {
    abbreviation: any;
    name: any;
};
export function randomCanadaState(): {
    abbreviation: any;
    name: any;
};
export function randomUSAddress(): {
    street_1: any;
    street_2: any;
    city: any;
    state: any;
    zip_code: any;
    lat_lon: any;
};
export function randomCanadaAddress(): {
    street_1: any;
    street_2: any;
    city: any;
    state: any;
    zip_code: any;
    lat_lon: any;
};
export function randomSSN(): string;
export function realUSNumber(): any;
//# sourceMappingURL=randomDataGenerators.d.ts.map