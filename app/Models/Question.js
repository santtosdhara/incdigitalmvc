'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Question extends Model {
    alternatives() {
        this.hasMany('App/Models/Alternative')
      }
}

module.exports = Question
