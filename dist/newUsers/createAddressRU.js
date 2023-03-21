"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesDE = exports.addressesUS = exports.addressesRU = void 0;
const { faker } = require('@faker-js/faker');
const addressesRU = (randomNumber) => {
    switch (randomNumber) {
        case 1:
            return `РФ, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, д ${faker.address.buildingNumber()}`;
        case 2:
            return `Россия, ${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`;
        case 3:
            return `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}`;
        case 4:
            return `${faker.address.state()}, г. ${faker.address.city()}, ${faker.address.streetAddress()}, Россия`;
        case 5:
            return `Российская Федерация, ${faker.address.state()} обл., г. ${faker.address.city()}`;
        default:
            console.log("Error in addressesRU");
    }
};
exports.addressesRU = addressesRU;
const addressesUS = (randomNumber) => {
    switch (randomNumber) {
        case 1:
            return `USA, ${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}, ${faker.address.buildingNumber()}`;
        case 2:
            return `United States, ${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}`;
        case 3:
            return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}`;
        case 4:
            return `${faker.address.state()}, ${faker.address.city()}, ${faker.address.streetAddress()}, United States`;
        case 5:
            return `${faker.address.state()}, ${faker.address.city()}, U.S.A.`;
        default:
            console.log("Error in addressesUS");
    }
};
exports.addressesUS = addressesUS;
const addressesDE = (randomNumber) => {
    switch (randomNumber) {
        case 1:
            return `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}, h ${faker.address.buildingNumber()}`;
        case 2:
            return `DE, ${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}`;
        case 3:
            return `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()}`;
        case 4:
            return `${faker.address.state()}, s. ${faker.address.city()}, ${faker.address.streetAddress()},Deutschland`;
        case 5:
            return `Deutschland, ${faker.address.state()}, s. ${faker.address.city()}`;
        default:
            console.log("Error in addressesDE");
    }
};
exports.addressesDE = addressesDE;
