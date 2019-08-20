const Router = require('koa-router')
const router = new Router()
const { HttpException } = require('../../core/http-exception')

router.get('/book', (ctx, next) => {
  ctx.body = {
    key: Math.round(Math.random() * 10),
    content: 'book'
  }
  // 在全局错误处理中被捕获
  const error = new HttpException('something error...', 10001, 400)
  throw error
})

module.exports = router