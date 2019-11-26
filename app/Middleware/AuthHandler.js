'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class AuthHandler {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({ request, auth, view, response }, next) {

    try {
      await auth.check()
    } catch (error) {
      return response.route('notAuth')
    }

    await next()
  }
}

module.exports = AuthHandler
