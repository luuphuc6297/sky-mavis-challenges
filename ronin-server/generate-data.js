const { faker } = require("@faker-js/faker");
const fs = require("fs");
const currencies = require("./currencies.json");

faker.locale = "en";

const randomCurrencies = (numberOfCurrencies) => {};

const randomUserList = (numberOfUsers) => {
    if (numberOfUsers <= 0) return [];

    const userList = [];

    Array.from(new Array(numberOfUsers)).forEach(() => {
        const user = {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            username: faker.internet.userName().toLowerCase(),
            avatar: faker.image.avatar(),
            roninAddress: faker.random.numeric(16),
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        userList.push(user);
    });
    return userList;
};

const radomWallet = (userList) => {
    if (userList.length <= 0) return [];

    const walletList = [];

    for (const user of userList) {
        Array.from(new Array(userList.length)).forEach(() => {
            const wallet = {
                id: user.roninAddress,
                userId: user.id,
                currency: faker.helpers.arrayElements(["usd", "eur", "yen"], 2),
                balance: faker.finance.amount(0, 100000),
                createdAt: Date.now(),
                updatedAt: Date.now(),
            };
            walletList.push(wallet);
        });
    }
    return walletList;
};

(() => {
    const userList = randomUserList(5);
    const walletList = radomWallet(userList);

    const db = {
        users: userList,
        wallets: walletList,
        currencies: currencies,
    };

    fs.writeFile("db.json", JSON.stringify(db), () => {
        console.log("Generated successfully!");
    });
})();
