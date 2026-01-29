import pg from 'pg'

const Pool = pg.Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: "localhost",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432
})

export default pool