'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentSchema extends Schema {
  up () {
    this.table('students', (table) => {
      table.increments().primary()
      table.string('cpf', 11).notNullable()
      table.date('birthdate').notNullable()
    })
  }

  down () {
    this.table('students', (table) => {
      // reverse alternations
    })
  }
}

module.exports = StudentSchema
