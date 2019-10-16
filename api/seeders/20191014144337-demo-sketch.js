'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('sketches', [
        {
          title: 'One Piece',
          genre: 'fantasy',
          isFavorite: true,
          image:'https://dw9to29mmj727.cloudfront.net/promo/2016/5265-SeriesHeaders_OP_2000x800.jpg',
          created_by: 1 ,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Naruto',
          genre: 'fantasy',
          isFavorite: true,
          image:'https://dw9to29mmj727.cloudfront.net/promo/2016/5300-SeriesHeaders_Naruto20th_2000x800_jpg',
          created_by: 2 ,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bleach',
          genre: 'fantasy',
          isFavorite: true,
          image:'https://dw9to29mmj727.cloudfront.net/promo/2016/5254-SeriesHeaders_BLH_2000x800v2.jpg',
          created_by: 3 ,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bakuman',
          genre: 'fantasy',
          isFavorite: true,
          image:'https://dw9to29mmj727.cloudfront.net/promo/2016/5487-Tier04_SeriesHeaders_BAK_v2_2000x800.jpg',
          created_by: 1 ,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {}); 
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('sketches', null, {});
  }
};