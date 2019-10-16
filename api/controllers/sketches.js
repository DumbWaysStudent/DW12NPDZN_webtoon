const models = require('../models')
const Sketch = models.sketch
const Chapter = models.chapter
const Page = models.page
const User = models.user

exports.index = (req, res) => {

  if(req.query.is_favorite){
    Sketch.findAll({
      where: {isFavorite: true},
    }).then(sketchs => res.send(sketchs))
  } 
  else if(req.query.title){
    Sketch.findAll({
      where: {title: req.query.title},
    }).then(sketchs => res.send(sketchs)) 
  }
  else {
    Sketch.findAll().then(sketch=>res.send(sketch))
  }
}

exports.show = (req, res) => {
  const id = req.params.skId

  Chapter.findAll({
    where: {sketch_id: id},
    include: {
      model: Sketch,
      as: 'sketchId',
    }
  })
    .then(sketch=>res.send(sketch))
  
}

// exports.chapterIndex = (req, res) => {
//   const id = req.params.chId
  
//   Sketch.findAll({where: {id}, include: ['chapterId'] }).then(chapter=>res.send(chapter))
  
// }

exports.chapterShow = (req, res) => {
  
  Page.findAll({
    where:{
      sketch_id: req.params.skId,
      chapter_id: req.params.chId
    }, 
      })
      .then(chapter=>res.send(chapter)) 
}

exports.userIndex = (req,res) => {
  const id = req.params.id
  Sketch.findAll({
    where: {created_by:id}}).then(sketch=>res.send(sketch))
}

exports.userStore = (req,res) => {

    Sketch.create({
      title: req.body.title,
      genre: req.body.genre,
      isFavorite: req.body.isFavorite,
      image: req.body.image,
      created_by: req.params.id
    },
      {
        where:{
          created_by: req.params.id
        }
      }
      ).then(sketch=>{
      res.send({
      message: 'success',
      sketch
    })
  })
}

exports.userShow = (req,res) =>{

  Chapter.findAll({
    where: {sketch_id: req.params.skId},
    include: {
      model: Sketch,
      as: 'sketchId',
      where: {
        created_by: req.params.id
      }
    }
  }).then(chapter=>res.send(chapter))
}


exports.userUpdate = (req,res) => {
  const data = req.body

    Sketch.update(data, 
      {where: 
        {id: req.params.skId,
         created_by: req.params.id
      }})
        .then(sketch=>{
      res.send({
      message: 'success',
    })
  }) 
}

exports.userDestroy = (req,res) => {

    Sketch.destroy(
      {where: {
        id: req.params.skId, 
        created_by: req.params.id}})
        .then(sketch => {
    res.send({
      message: 'success',
    }) 
  }) 
}


exports.chapterStore = (req,res) => {
  const data = req.body

    Chapter.create(data,{
      include:{
        model: Sketch,
        as: 'sketchId',
        where: {
          created_by: req.params.id,
          id: req.params.skId
        }
      }}
      ).then(chapter=>{
      res.send({
      message: 'success',
      chapter
    })
  })
}


exports.chapterUpdate = (req,res) => {
  const data = req.body

    Chapter.update(data, 
      {where: 
        {id: req.params.chId,
         sketch_id: req.params.skId
      },
      include: {
        model: Sketch,
        as: 'sketchId',
        where: {
          created_by: req.params.id
        }
      }
    }).then(sketch=>{
      res.send({
      message: 'success',
    })
  }) 
}

exports.chapterDestroy = (req,res) => {

    Chapter.destroy( 
      {where: 
        {id: req.params.chId,
         sketch_id: req.params.skId
      },
      include: {
        model: Sketch,
        as: 'sketchId',
        where: {
          created_by: req.params.id
        }
      }
    }).then(sketch=>{
      res.send({
      message: 'success',
    })
  }) 
}

exports.imageIndex = (req,res) => {

  Page.findAll({
    where: {
      chapter_id: req.params.chId,
      sketch_id: req.params.skId
    },
    include: {
      model: Sketch,
      as: 'sketchId',
      where: {
        created_by: req.params.id
      }
    }
  }).then(chapter=>res.send(chapter))
}

exports.imageStore = (req,res) => {
  const data = req.body

    Page.create(data,
      {where: 
        {chapter_id: req.params.chId,
         sketch_id: req.params.skId
      },
      include: {
        model: Sketch,
        as: 'sketchId',
        where: {
          created_by: req.params.id
        }
      }
      }).then(image=>{
      res.send({
      message: 'success',
      image
    })
  })
}

exports.imageDestroy = (req,res) => {

  Page.destroy( 
    {where: 
      {id: req.params.pgId,
       chapter_id: req.params.chId,
       sketch_id: req.params.skId
    },
    include: {
      model: Sketch,
      as: 'sketchId',
      where: {
        created_by: req.params.id
      }
    }
  }).then(sketch=>{
    res.send({
    message: 'success',
  })
}) 
}