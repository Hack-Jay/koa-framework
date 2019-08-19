const Router = require('koa-router')
const requireDirectory = require('require-directory')


class InitManger {
  static initCore(app) {
    InitManger.app = app
    InitManger.initLoadRouters()
  }

  static initLoadRouters() {
    // 获取绝对路径 process.cwd()
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: whenLoadModule
    })
    
    function whenLoadModule(obj) {
      if(obj instanceof Router) {
        InitManger.app.use(obj.routes())
      }
    }
  }
}
module.exports = InitManger