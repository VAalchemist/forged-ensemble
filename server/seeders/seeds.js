const db = require('../config/connection');
const { User } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create({
    firstName: 'Pamela',
    lastName:'Doe',
    email: 'Pamela@yahoo.com',
    password: 'Welcome123'

  });
  await User.create({
    firstName: 'Kevin',
    lastName:'Castillo',
    email: 'Kevin@yahoo.com',
    password: 'Welcome123'

  });
  await User.create({
    firstName: 'Me',
    lastName:'You',
    email: 'Me@yahoo.com',
    password: 'Welcome123'

  });
  await User.create({
    firstName: 'You',
    lastName:'Me',
    email: 'You@yahoo.com',
    password: 'Welcome123'

  });
  await User.create({
    firstName: 'I',
    lastName:'They',
    email: 'They@yahoo.com',
    password: 'Welcome123'

  });

  console.log('users seeded');

  process.exit(0);
});