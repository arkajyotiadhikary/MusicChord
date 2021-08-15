const bcrypt = require("bcrypt");

const saltRounds = 10;

const encrypt = async (data) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedData = await bcrypt.hash(data, salt);
    console.log(hashedData);
    return hashedData;
};

const decrypt = async (data, hashedData) => {
    const result = await bcrypt.compare(data, hashedData);
    console.log(result);
    return result;
};

module.exports = {
    encrypt,
    decrypt,
};
