
const router = require('koa-router')()
const LoginController = require('../controller/admin/login')
router.get('/login', async (ctx) => {
    await ctx.render('admin/login', { title: '注册' })
})
router.post('/signin', LoginController.signIn) // 登录
router.post('/signup', LoginController.signUp) // 注册
router.get('/logout', async (ctx) => {
    ctx.cookies.set('token', '')
    ctx.body = {
        msg: '退出登录'
    }
})
module.exports = router
