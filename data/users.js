import bcrpt from 'bcryptjs'
const users = [
  {
    name: 'sai myMan',
    email: 'admin@gmail.com',
    password: bcrpt.hashSync('123456', 10),
  },
  {
    name: 'john ukere',
    email: 'john@gmail.com',
    password: bcrpt.hashSync('123456', 10),
  },
  {
    name: 'derry doe',
    email: 'jean@gmail.com',
    password: bcrpt.hashSync('123456', 10),
  },
]

export default users
