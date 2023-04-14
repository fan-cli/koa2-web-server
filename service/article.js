
const { articleModel } = require('../model/index');
class ArticleService {
   async Index(article) {
      let data, tags = article[5]
      await articleModel.insertPost(article).then(result => {
         data = result
         articleModel.updateTags(tags) // 更新tags
      })
      return data
   }
   async findTags () {
      let data
      await articleModel.findAllTags().then(result => {
         data = result
      })
      return data
   }
}
module.exports = new ArticleService();