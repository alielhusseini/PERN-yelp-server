// const { pool } = require('../db') // for the connect release
const db = require('../db')

module.exports.getAllRestaurants = async(req, res) => {
    try {
        // const client = await pool.connect()
        // const result = await client.query("select * from restaurants")
        // client.release()
        const result = await db.query("select * from restaurants")
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
        const result = await db.query('select * from restaurants where res_id = $1', [id])
        res.status(200).json({
            status: "success",
            data: { restaurant: result.rows[0] }
        })
    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports.postNewRestaurant = async(req, res) => {
    const { x } = req.body
    try {

    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports.updateRestaurant = async(req, res) => {
    const id = req.params.id
    try {

    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}

module.exports.deleteRestaurant = async(req, res) => {
    const id = req.params.id
    try {

    } catch (err) {
        res.status(400).json({ err: err.message })
    }
}