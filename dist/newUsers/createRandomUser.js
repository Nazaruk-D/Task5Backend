"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRandomUser = void 0;
const newUsers_1 = require("./newUsers");
const { faker } = require('@faker-js/faker');
function createRandomUser(language) {
    return {
        id: faker.datatype.uuid().slice(0, 7),
        name: (0, newUsers_1.createName)(),
        address: (0, newUsers_1.address)(language),
        phoneNumber: (0, newUsers_1.phoneNumber)(language)
    };
}
exports.createRandomUser = createRandomUser;
