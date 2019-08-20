const { HttpException } = require('../app/core/http-exception')

const catchError = async(ctx, next) => {
  try {
    await next()
  } catch (error) {
    if(error instanceof HttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
      }
      ctx.status = error.code
    }
  }
}
module.exports = catchError