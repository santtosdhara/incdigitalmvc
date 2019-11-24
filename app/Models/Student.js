'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Student extends Model {
  activities() {
    this.hasMany('App/Models/Activity')
  }
}

module.exports = Student
