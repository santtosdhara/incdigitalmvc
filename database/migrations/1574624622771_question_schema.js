'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class QuestionSchema extends Schema {
  up() {
    this.create('questions', (table) => {
      table.increments()
      table.integer('activities_id')
        .unsigned()
        .references('id')
        .inTable('activities')
      table.timestamps()
    })
  }

  down() {
    this.drop('questions')
  }
}

module.exports = QuestionSchema
