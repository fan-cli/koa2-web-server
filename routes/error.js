
const router = require('koa-router')()
router.get('*', async (ctx,next)=>{
    await ctx.render('404/404', {
        title: '404',
        user:'rzx',
        token: ctx.cookies.get('token')
      })
})
module.exports = router
