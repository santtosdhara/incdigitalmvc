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

Route.on('/').render('welcome')
Route.get('student', 'StudentController.show').middleware(['auth'])
Route.get('login', ({view}) => view.render('student.login'))
Route.get('logout', 'StudentController.logout').middleware(['auth'])
Route.post('login', 'StudentController.login')
Route.post('student', 'StudentController.store')