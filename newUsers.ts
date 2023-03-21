const seedrandom = require("seedrandom");
const {faker} = require('@faker-js/faker')


export const newUsers = (language: LanguageType, amount: number, seed?: number, page?: number) => {
    faker.locale = language
    const users = []
    for (let i = 0; i < amount; i++) {
        const userNum = seed ? seed + page! + i + ((page || 0) * 1000) : undefined
        const userSeed = faker.seed(userNum);
        users.push(createRandomUser(language, i % 2 === 0, userSeed))
    }
    return users
};

export function createRandomUser(language: Language, odd: boolean, userSeed?: number) {
    return {
        id: faker.datatype.uuid().slice(0, 8),
        name: createName(odd),
        address: address(language, userSeed),
        phoneNumber: phoneNumber(language, userSeed),
        seedNumber: userSeed
    };
}

export const createName = (odd: boolean) => {
    const sex = odd ? 'female' : 'male'
    return `${faker.name.firstName(sex)} ${faker.name.lastName(sex)}`
}

export const address = (language: Language, userSeed?: number) => {
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
    }
    let rng;
    if (userSeed) {
        rng = seedrandom(String(userSeed))
    } else {
        rng = seedrandom()
    }
    const randomIndex = Math.floor(rng() * 5);
    return addressType[language][randomIndex]
}

export const phoneNumber = (language: Language, userSeed?: number) => {
    const phoneType = {
        [Language.RU]: ['+7902#######', '+7 984 ### ## ##', '+7(939)#######', '+7 909 ###*##*##', '+7(967)-##-##-###'],
        [Language.US]: ['+1347###-##-##', '+1239#######', '+1 406 ### ## ##', '+1(434)#######', "+1 262 ###*##*##", "+1-417-###-##-##"],
        [Language.DE]: ['+1 302 ###-##-##', '+1218#######', '+1 794 ### ## ##', '+1(845)#######', "+1 562 ###*##*##", "+1-641-###-##-##", "+1-432-##-##-###"],
    }
    let rng;
    if (userSeed) {
        rng = seedrandom(String(userSeed))
    } else {
        rng = seedrandom()
    }
    const randomIndex = Math.floor(rng() * 5);
    const type = phoneType[language][randomIndex]
    return faker.phone.number(type)
}


export enum Language {
    US = 'en',
    RU = 'ru',
    DE = 'de',
}

export type LanguageType = Language.RU | Language.DE | Language.US