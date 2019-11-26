'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Student extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeCreate', async (userInstance) => {
      userInstance.password = await Hash.make(userInstance.password)
    })
  }

  activities() {
    this.hasMany('App/Models/Activity')
  }
  
  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Student
