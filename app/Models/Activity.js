'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Activity extends Model {
        activities() {
          this.hasMany('App/Models/Activity')
        }
      
}

module.exports = Activity
