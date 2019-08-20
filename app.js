const Koa = require('koa')
const axios = require('axios')
const parser = require('koa-parser')
const InitManger = require('./app/core/init')
const catchError = require('./middlewares/exception')
const app = new Koa()

// 全局错误处理
app.use(catchError)

InitManger.initCore(app)
// app.on('error', (err, ctx) => {
//   console.log('捕获到了!', err.message);
// });
app.use(async(ctx, next) => {
  console.log(1)
  await next()
  // 拿到后面中间件传递过来的值
  // console.log(ctx.r)
})
 
app.use(async(ctx, next) => {
  console.log(2)
  const res = await axios.get('http://7yue.pro')
  // 挂载到ctx传递下去
  ctx.r = res
  await next()
})

app.use(parser())
app.listen(3000)