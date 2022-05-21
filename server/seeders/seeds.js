const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await User.insertMany([
    {
      firstName: 'Pamela'
    },
    {
      firstName: 'Kevin'
    },
    {
      firstName: 'Me'
    },
    {
      firstName: 'You'
    },

  ]);

  console.log('users seeded');

  process.exit(0);
});