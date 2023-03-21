"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneNumber = void 0;
const { faker } = require('@faker-js/faker');
const newUsers_1 = require("./newUsers");
const _ = require("lodash");
const phoneNumber = (language) => {
    const phoneType = {
        [newUsers_1.Language.RU]: ['+7 989 ###-##-##', '+7902#######', '+7 044 ### ## ##', '+7(908)#######', "+7 909 ###*##*##", "+7-999-###-##-##", "+7-967-##-##-###"],
        [newUsers_1.Language.US]: ['+380 092 ###-##-##', '+380039#######', '+380 091 ### ## ##', '+380(073)#######', "+380 092 ###*##*##", "+380-067-###-##-##", "+380-068-##-##-###"],
        [newUsers_1.Language.UK]: ['+1 302 ###-##-##', '+1218#######', '+1 794 ### ## ##', '+1(845)#######', "+1 562 ###*##*##", "+1-641-###-##-##", "+1-432-##-##-###"],
    };
    const randomIndex = _.random(0, phoneType[newUsers_1.Language.RU].length - 1);
    const type = phoneType[language][randomIndex];
    return faker.phone.number(type);
};
exports.phoneNumber = phoneNumber;
