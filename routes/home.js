
const router = require('koa-router')()
const IndexController = require('../controller/client/home')
const auth = require('../middleware/auth')
const download = require('../utils/download')
router.get('/',  IndexController.Index)
router.get('/tag/:tag', IndexController.ArticleByTags)
router.get('/classify', IndexController.Classify)
router.get('/article/:id', IndexController.Article)

router.get('/string',  IndexController.Strings)

router.get('/json', auth(), async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/download/:name', async (ctx) => {
  const name = ctx.params.name;
  console.log(name);
  await download(ctx, name)
})
module.exports = router
