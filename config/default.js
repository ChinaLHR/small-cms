module.exports = {
  port: 3000,
  session: {
    secret: 'small-cms',
    key: 'small-cms',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/smallcms'
}
