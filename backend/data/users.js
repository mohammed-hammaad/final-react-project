import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Mohammed Hammad ',
    email: 'Hammad@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Mohammed Ibrahim',
    email: 'Ibrahim@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mohammed Ehab',
    email: 'Ehab@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
