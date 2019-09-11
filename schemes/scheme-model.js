const knex = require("knex");
const knexConfig = require("../knexfile")
const db = require("../data")

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes").where({ id: id})
}

function findSteps(id) {
    return db("schemes").join("steps", "schemes.id", "=", "steps.scheme_id")
    .where({scheme_id: id})
    .orderBy("steps.step_number")
    .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
}

function add(scheme) {
    return db("schemes").insert(scheme)
}

function update(id, scheme) {
    return db("schemes").where({id}).update(scheme)
}

function remove(id) {
    return db("schemes").where({id}).remove()
}