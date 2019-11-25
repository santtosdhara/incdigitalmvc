'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlternativeSchema extends Schema {
  up () {
  this.create('alternatives', (table) => {
    table.increments()
    table.text('description').notNullable()
    table.boolean('isCorrect').notNullable()
    table.integer('questions_id')
    .unsigned()
    .references('id')
    .inTable('questions')
    table.timestamps()
  })
  }

  down () {
  this.drop('alternatives')
  }
}

module.exports = AlternativeSchema
