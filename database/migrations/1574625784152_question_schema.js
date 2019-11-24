'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up () {
    this.table('questions', (table) => {
      table.integer("level", 1).notNullable()
      table.string('title', 200).notNullable()
      table.text('description').notNullable()
    })
  }

  down () {
    this.table('questions', (table) => {
      // reverse alternations
    })
  }
}

module.exports = QuestionSchema
