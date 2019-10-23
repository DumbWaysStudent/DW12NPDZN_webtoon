'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('chapters', [
        {
          chapter_title:'ch.951',
          image: 'https://yuucdn.com/wp-content/uploads/O/One%20Piece/Chapter%20951/00.jpg',
          sketch_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chapter_title:'ch.241',
          image: 'https://yuucdn.com/wp-content/uploads/B/Boku%20No%20Hero%20Academia/Chapter%20241/02.jpg',
          sketch_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chapter_title:'ch.361',
          image: 'https://yuucdn.com/wp-content/uploads/H/Haikyuu/Chapter%20361/001.jpg',
          sketch_id: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          chapter_title:'ch.121',
          image: 'https://yuucdn.com/wp-content/uploads/D/Dr%20Stone%20Mangakyo/Chapter%20121/01.jpg',
          sketch_id: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('chapters', null, {});
  }
};