'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')
Route.get('login', ({ view }) => view.render('student.login'))
Route.get('signup', ({ view }) => view.render("student.signup"))
Route.get('notAuth', ({ view }) => view.render("student.login", { error: "Você precisa estar logado!" }))
Route.get('student', 'StudentController.show').middleware(['authH'])
Route.get('logout', 'StudentController.logout').middleware(['authH'])
Route.get('whatsapp', 'StudentController.logout').middleware(['authH'])
Route.get('instagram', 'StudentController.logout').middleware(['authH'])
Route.get('facebook', 'StudentController.logout').middleware(['authH'])
Route.post('signup', 'StudentController.store')
Route.post('login', 'StudentController.login')