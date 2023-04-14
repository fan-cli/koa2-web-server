
const router = require('koa-router')()
const ArticleController = require('../controller/admin/article')
router.post('/post/article',  ArticleController.articleCraete)
router.get('/get/tags',  ArticleController.findAllTags)
module.exports = router