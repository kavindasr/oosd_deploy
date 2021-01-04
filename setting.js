
// change credentials before run the server
const ksr = {
    connectionLimit: 10,
    user: "ksr",
    password: "ksr199841",
    host: "oosd11.c90hbp9gmghy.us-east-2.rds.amazonaws.com",
    database: "oosdDB",
    timezone: 'Z'
};
// const ksr = {
//     connectionLimit: 10,
//     user: "ksr",
//     password: "ksr199841",
//     host: "localhost",
//     database: "oosd4",
// };

//dsfds
exports.dbConfig = ksr;

exports.webSettings = {
    webport: process.env.port || 8000,
    protocol: "http",
    host: "oosdeb-env.eba-44zh8xut.us-east-2.elasticbeanstalk.com"
};