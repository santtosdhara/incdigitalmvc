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
Route.get('student', 'StudentController.show').middleware(['authH'])
Route.get('login/:error?', ({ view, params }) => { console.log(params); return view.render('student.login', { error: decodeURI(params.error)  }) })
Route.get('logout', 'StudentController.logout').middleware(['authH'])
Route.get('whatsapp', 'StudentController.logout').middleware(['authH'])
Route.get('instagram', 'StudentController.logout').middleware(['authH'])
Route.get('facebook', 'StudentController.logout').middleware(['authH'])
Route.post('login', 'StudentController.login')
Route.post('student', 'StudentController.store')