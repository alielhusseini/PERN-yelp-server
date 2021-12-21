const { Pool } = require('pg')

const pool = new Pool() // by default it will search for the env variables in .env to create postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName

// module.exports = { pool } // this is for another way (to open and release the connection where below it does that automagically)
module.exports = {
    query: (text, params) => pool.query(text, params)
}