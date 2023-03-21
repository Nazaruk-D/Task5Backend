"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Language = exports.phoneNumber = exports.address = exports.createName = exports.createRandomUser = exports.newUsers = void 0;
const seedrandom = require("seedrandom");
const { faker } = require('@faker-js/faker');
const newUsers = (language, amount, seed, page) => {
    faker.locale = language;
    const users = [];
    for (let i = 0; i < amount; i++) {
        const userNum = seed ? seed + page + i + ((page || 0) * 1000) : undefined;
        const userSeed = faker.seed(userNum);
        users.push(createRandomUser(language, i % 2 === 0, userSeed));
    }
    return users;
};
exports.newUsers = newUsers;
function createRandomUser(language, odd, userSeed) {
    return {
        id: faker.datatype.uuid().slice(0, 8),
        name: (0, exports.createName)(odd),
        address: (0, exports.address)(language, userSeed),
        phoneNumber: (0, exports.phoneNumber)(language, userSeed),
        seedNumber: userSeed
    };
}
exports.createRandomUser = createRandomUser;
const createName = (odd) => {
    const sex = odd ? 'female' : 'male';
    return `${faker.name.firstName(sex)} ${faker.name.lastName(sex)}`;
};
exports.createName = createName;
const address = (language, userSeed) => {
    const addressType = {
        [Language.RU]: [
            `РФ, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, д ${faker.address.buildingNumber()}`,
            `Россия, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`,
            `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`,
            `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, Россия`,
            `Российская Федерация, ${faker.address.state()} обл., г. ${faker.address.city()}`
        ],
        [Language.US]: [
            `USA, ${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}, ${faker.address.buildingNumber()}`,
            `United States, ${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}`,
            `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}`,
            `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}, United States`,
            `${faker.address.state()}, ${faker.address.city()}, U.S.A.`
        ],
        [Language.DE]: [
            `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}, h ${faker.address.buildingNumber()}`,
            `DE, ${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}`,
            `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}`,
            `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()},Deutschland`,
            `Deutschland, ${faker.address.state()}, s. ${faker.address.city()}`
        ]
    };
    let rng;
    if (userSeed) {
        rng = seedrandom(String(userSeed));
    }
    else {
        rng = seedrandom();
    }
    const randomIndex = Math.floor(rng() * 5);
    return addressType[language][randomIndex];
};
exports.address = address;
const phoneNumber = (language, userSeed) => {
    const phoneType = {
        [Language.RU]: ['+7902#######', '+7 984 ### ## ##', '+7(939)#######', '+7 909 ###*##*##', '+7(967)-##-##-###'],
        [Language.US]: ['+1347###-##-##', '+1239#######', '+1 406 ### ## ##', '+1(434)#######', "+1 262 ###*##*##", "+1-417-###-##-##"],
        [Language.DE]: ['+1 302 ###-##-##', '+1218#######', '+1 794 ### ## ##', '+1(845)#######', "+1 562 ###*##*##", "+1-641-###-##-##", "+1-432-##-##-###"],
    };
    let rng;
    if (userSeed) {
        rng = seedrandom(String(userSeed));
    }
    else {
        rng = seedrandom();
    }
    const randomIndex = Math.floor(rng() * 5);
    const type = phoneType[language][randomIndex];
    return faker.phone.number(type);
};
exports.phoneNumber = phoneNumber;
var Language;
(function (Language) {
    Language["US"] = "en";
    Language["RU"] = "ru";
    Language["DE"] = "de";
})(Language = exports.Language || (exports.Language = {}));
