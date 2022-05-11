const JWTSECRET = process.env.JWTSECRET || "";
const DB_USERNAME = process.env.DB_USERNAME || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "foodie";
const DB_ADDRESS = process.env.DB_ADDRESS || "localhost:27017";
const PORT = process.env.PORT || 3000; 
module.exports = {
    mongoConnectionString: 'mongodb://' + DB_ADDRESS + '/' + DB_NAME, // database connection string
    dbName: DB_NAME, // database name
    jwtSecret: JWTSECRET, // secret for encrypting the jwt token
    port: PORT //port to run the application in
}