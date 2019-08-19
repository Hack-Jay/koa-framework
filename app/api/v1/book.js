const Router = require('koa-router')
const router = new Router()

router.get('/book', (ctx, next) => {
  ctx.body = {
    key: Math.round(Math.random() * 10),
    content: 'book'
  }
  // 在全局错误处理中被捕获
  throw new Error('book exception .')
})

module.exports = router