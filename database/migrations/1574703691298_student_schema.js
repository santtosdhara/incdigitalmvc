'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up() {
    this.create('students', (table) => {
      table.integer('cpf', 11).notNullable().primary()
      table.timestamps()
      table.string('name', 80).notNullable()
      table.string('email', 254).notNullable()
      table.string('password', 60).notNullable()
      table.integer('phone', 11)
      table.date('birthrate').notNullable()
    })
  }

  down() {
    this.drop('students')
  }
}

module.exports = StudentSchema
