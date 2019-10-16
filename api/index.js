require('express-group-routes')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5001

app.use(bodyParser.json())

//import controllers
const SketchController = require('./controllers/sketches')
const AuthController = require('./controllers/auth')

//middleware
const { authenticated } = require('./middleware')

app.group("/api/v1", (router) => {

	router.post('/register', AuthController.register)
	router.post('/login', AuthController.login)

	router.get('/sketches', SketchController.index)
	router.get('/sketch/:skId/chapters', SketchController.show)
	
	// router.get('/sketch/:chId/chapters', SketchController.chapterIndex)
	router.get('/sketch/:skId/chapter/:chId', SketchController.chapterShow)
	
	router.get('/user/:id/sketches', authenticated, SketchController.userIndex)
	router.post('/user/:id/sketch', authenticated, SketchController.userStore)
	router.get('/user/:id/sketch/:skId/chapters', authenticated, SketchController.userShow)
	router.put('/user/:id/sketch/:skId', authenticated, SketchController.userUpdate)
	router.delete('/user/:id/sketch/:skId', authenticated, SketchController.userDestroy)

	router.post('/user/:id/sketch/:skId/chapter', authenticated, SketchController.chapterStore)
	router.put('/user/:id/sketch/:skId/chapter/:chId', authenticated, SketchController.chapterUpdate)
	router.delete('/user/:id/sketch/:skId/chapter/:chId', authenticated, SketchController.chapterDestroy)

	router.get('/user/:id/sketch/:skId/chapter/:chId', authenticated, SketchController.imageIndex)
	router.post('/user/:id/sketch/:skId/chapter/:chId/image', authenticated, SketchController.imageStore)
	router.delete('/user/:id/sketch/:skId/chapter/:chId/image/:pgId', authenticated, SketchController.imageDestroy)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))