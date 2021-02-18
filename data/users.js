import bcrpt from 'bcryptjs'
const users = [
  {
    name: 'sai myMan',
    email: 'admin@gmail.com',
    password: bcrpt.hashSync('123456', 10),
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNTQ1NzhhIiwiaWF0IjoxNjEzNjMzMzYwLCJleHAiOjE2MTM2MzM2NjB9.MAT-3b7HM5YKbDDidvsTRRA_U6zWgosNfLIZ_kYwGq8',
  },
  {
    name: 'john ukere',
    email: 'john@gmail.com',
    password: bcrpt.hashSync('123456', 10),
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNTQ1NzhhIiwiaWF0IjoxNjEzNjMzMzYwLCJleHAiOjE2MTM2MzM2NjB9.MAT-3b7HM5YKbDDidvsTRRA_U6zWgosNfLIZ_kYwGq8',
  },
  {
    name: 'derry doe',
    email: 'jean@gmail.com',
    password: bcrpt.hashSync('123456', 10),
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyNTQ1NzhhIiwiaWF0IjoxNjEzNjMzMzYwLCJleHAiOjE2MTM2MzM2NjB9.MAT-3b7HM5YKbDDidvsTRRA_U6zWgosNfLIZ_kYwGq8',
  },
]

export default users
