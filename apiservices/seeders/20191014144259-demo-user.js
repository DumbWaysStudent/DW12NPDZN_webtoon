'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
          email: 'sanji@gmail.com',
          password: 'xxx',
          username: 'sanji',
          image: 'https://vignette.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/270?cb=20170625125657',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'luffy@gmail.com',
          password: 'xxx',
          username: 'luffy',
          image: 'https://vignette.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/270?cb=20190124235416',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'zoro@gmail.com',
          password: 'xxx',
          username: 'zoro',
          image: 'https://vignette.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/270?cb=20141008195159',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('users', null, {});
    
  }
};