'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActivitySchema extends Schema {
  up () {
    this.create('activities', (table) => {
      table.increments()
      table.string('name', 55).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('activities')
  }
}

module.exports = ActivitySchema
