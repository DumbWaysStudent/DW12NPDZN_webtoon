const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user

exports.register = (req, res) => {
  const data = req.body

  User.create(data).then(user =>{
    const token = jwt.sign({ userId: user.id }, 'my-secret-key')
    res.send({
      user,
      token
    })
  })
}

exports.login = (req, res)=>{    

  const email = req.body.email
  const password = req.body.password

  User.findOne({where: {email, password}}).then(user=>{
    if(user){
      const token = jwt.sign({ userId: user.id }, 'my-secret-key')
      res.send({
        user,
        token
      }) 
    }else{
      res.send({
        message: "Wrong Email or Password!"
      })
    }
  })
}