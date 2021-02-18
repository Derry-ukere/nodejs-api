import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, 'abc123', {
    expiresIn: '5m',
  })
}

export default generateToken
