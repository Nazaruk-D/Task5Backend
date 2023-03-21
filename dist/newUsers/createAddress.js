"use strict";
// const { faker } = require('@faker-js/faker')
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRU = void 0;
exports.addressesRU = [
    `РФ, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, д ${faker.address.buildingNumber()}`,
    `Россия, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`,
    `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`,
    `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, Россия`,
    `Российская Федерация, ${faker.address.state()} обл., г. ${faker.address.city()}`
];
// export const addressesRU = (randomNumber: number, userSeed?: number) => {
//     faker.seed(userSeed);
//
//     switch (randomNumber) {
//         case 1:
//             return `РФ, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, д ${faker.address.buildingNumber()}`
//         case 2:
//             return `Россия, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`
//         case 3:
//             return `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`
//         case 4:
//             return `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, Россия`
//         case 5:
//             return `Российская Федерация, ${faker.address.state()} обл., г. ${faker.address.city()}`
//         default:
//             console.log("Error in addressesRU")
//     }
// }
//
// export const addressesUS = (randomNumber: number, userSeed?: number) => {
//     faker.seed(userSeed);
//
//     switch (randomNumber) {
//         case 1:
//             return `USA, ${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}, ${faker.address.buildingNumber()}`
//         case 2:
//             return `United States, ${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}`
//         case 3:
//             return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}`
//         case 4:
//             return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}, United States`
//         case 5:
//             return `${faker.address.state()}, ${faker.address.city()}, U.S.A.`
//         default:
//             console.log("Error in addressesUS")
//     }
// }
//
// export const addressesDE = (randomNumber: number, userSeed?: number) => {
//     faker.seed(userSeed);
//
//     switch (randomNumber) {
//         case 1:
//             return `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}, h ${faker.address.buildingNumber()}`
//         case 2:
//             return `DE, ${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}`
//         case 3:
//             return `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}`
//         case 4:
//             return `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()},Deutschland`
//         case 5:
//             return `Deutschland, ${faker.address.state()}, s. ${faker.address.city()}`
//         default:
//             console.log("Error in addressesDE")
//     }
// }
