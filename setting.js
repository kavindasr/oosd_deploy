
// change credentials before run the server
const ksr = {
    connectionLimit: 10,
    user: "b166896bfcc309",
    password: "22151584",
    host: "us-cdbr-east-02.cleardb.com",
    database: "heroku_48834df21d1df75",
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
    webport: process.env.PORT || 8000,
    protocol: "http",
    host: "192.168.1.8",
};