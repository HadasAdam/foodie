const JWTSECRET = process.env.JWTSECRET || "NHCY67vNH3ixo9Rs";
const DB_USERNAME = process.env.DB_USERNAME || "user";
const DB_PASSWORD = process.env.DB_PASSWORD || "password";
const DB_NAME = process.env.DB_NAME || "foodie";
const DB_ADDRESS = process.env.DB_ADDRESS || "localhost:27050";
const PORT = process.env.PORT || 5000; 
module.exports = {
    mongoConnectionString: 'mongodb://' + DB_USERNAME + ':' + DB_PASSWORD + '@' + DB_ADDRESS + '/' + DB_NAME, // database connection string
    dbName: DB_NAME, // database name
    jwtSecret: JWTSECRET, // secret for encrypting the jwt token
    port: PORT //port to run the application in
}