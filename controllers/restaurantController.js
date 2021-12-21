// const { pool } = require('../db') // for the connect release
const db = require('../db')

module.exports.getAllRestaurants = async(req, res) => {
    try {
        // const client = await pool.connect()
        // const result = await client.query("select * from restaurants")
        // client.release()
        const result = await db.query("SELECT * FROM restaurants")
        res.status(200).json({
            status: "success",
            results: result.rows.length,
            data: {
                restaurants: result.rows
            }
        })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports.getRestaurant = async(req, res) => {
    const id = req.params.id
    try {
        // const client = await pool.connect()
        // const result = await client.query('select * from restaurants where res_id = $1', [id])
        // client.release()
        const result = await db.query('SELECT * FROM restaurants WHERE res_id = $1', [id])
        res.status(200).json({
            status: "success",
            data: { restaurant: result.rows[0] }
        })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports.postNewRestaurant = async(req, res) => {
    const { name, location, price_range } = req.body
    try {
        const result = await db.query('INSERT INTO restaurants(res_name, res_location, res_price_range) values($1, $2, $3) returning *', [name, location, price_range])

        res.status(201).json({
            status: "success",
            data: { restaurant: result.rows[0] }
        })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports.updateRestaurant = async(req, res) => {
    const { body: { name, location, price_range }, params: { id } } = req
    try {
        const result = await db.query('UPDATE restaurants SET res_name = $1, res_location = $2, res_price_range = $3 WHERE res_id = $4 returning *', [name, location, price_range, id])

        res.status(201).json({
            status: "success",
            data: { restaurant: result.rows[0] }
        })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports.deleteRestaurant = async(req, res) => {
    const id = req.params.id
    try {
        const result = await db.query('DELETE FROM restaurants WHERE res_id = $1 returning *', [id])

        res.status(201).json({
            status: "success",
            data: { restaurant: result.rows[0] }
        })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}