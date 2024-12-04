import {User} from '../../models/users.js';

export const seedUsers = async () => {
  await User.bulkCreate([
    {
      username: 'Paul',
      password: 'password'
    },
    {
      username: 'Jae',
      password: 'password'
    },
    {
      username: 'Jessica',
      password: 'password'
    },
    {
      username: 'Jennifer',
      password: 'password'
    }
  ], { individualHooks: true });
};
