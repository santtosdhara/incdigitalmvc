'use strict'

const Student = use('App/Models/Student')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with students
 */
class StudentController {
  /**
   * Show a list of all students.
   * GET students
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new student.
   * GET students/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {

  }

  /**
   * Create/save a new student.
   * POST students
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, view }) {
    const studentParams = request.only(['cpf', 'name', 'email', 'password', 'phone', 'birthdate'])
    await Student.create({ ...studentParams })
    return view.render("student.login", {message: "Estudante registrado com sucesso!"})
  }

  /**
   * Display a single student.
   * GET students/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return view.render("student.student");
  }

  /**
   * Render a form to update an existing student.
   * GET students/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update student details.
   * PUT or PATCH students/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a student with id.
   * DELETE students/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }

  async login({ auth, request, response, session, view }) {
    const { email, password } = request.all()    

    try {
      console.log(email, password)
      await auth.attempt(email, password)
    } catch (e) {
      console.log(e)
      return view.render('student.login', {error: "E-Mail ou Senha incorretos!"})
    }

    return response.redirect('student')
  }

  async logout({ auth, request, response, session, view }) {
    await auth.logout()
    return view.render('student.login', {message: "Estudante deslogado com sucesso!"})
    // return 'Deslogado!'
    // response.redirect('login', {message: "Estudante deslogado com sucesso!"})
  }
}

module.exports = StudentController
