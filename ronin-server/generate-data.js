const { faker } = require("@faker-js/faker");
const fs = require("fs");
const currencies = require("./currencies.json");

faker.locale = "en";

const randomUserList = (numberOfUsers) => {
    if (numberOfUsers <= 0) return [];

    const userList = [];

    Array.from(new Array(numberOfUsers)).forEach(() => {
        const user = {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            username: faker.internet.userName().toLowerCase(),
            roninAddress: faker.finance.account(16),
            avatar: faker.image.avatar(),
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
                assets: [
                    {
                        id: "usd",
                        name: "United States dollar",
                        code: "USD",
                        symbol: "$",
                        logo: "https://res.cloudinary.com/drcqjnla7/image/upload/v1654532965/image_9_stlx8j.svg"
                        amount: faker.finance.amount(4),
                    },
                    {
                        id: "eur",
                        name: "The Euro",
                        code: "EUR",
                        symbol: "€",
                        logo: "https://res.cloudinary.com/drcqjnla7/image/upload/v1654528253/free-euro-coin-icon-2141-thumb_1_l19r0h.svg",
                        amount: faker.finance.amount(4),
                    },
                    {
                        id: "yen",
                        name: "Japanese yen",
                        code: "JPY",
                        symbol: "¥",
                        logo: "https://res.cloudinary.com/drcqjnla7/image/upload/v1654528279/Icon_Yen_huufhj.svg",
                        amount: faker.finance.amount(4),
                    },
                ],
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
