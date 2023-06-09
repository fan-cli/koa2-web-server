
const { articleModel } = require('../model/index');
class IndexService {
  static async Index(pageIndex, pageSize) {
    let data = [],total=null
    await articleModel.findPostByPage(pageIndex, pageSize).then(result => data = result)
    await articleModel.findAllSum().then(result => total = result[0].sum)
    return { data, total }
  }
  static async findArticleById(id) {
    let data = []
    await articleModel.findDataById(id).then(result => data = result)
    return data
  }
  static async findArticleByTag(tag) {
    let data = []
    await articleModel.findDataByTag(tag).then(result => data = result)
    return data
  }
  static async findAllTags() {
    let data = []
    await articleModel.findAllTags().then(result => data = result)
    return data
  }
  static async Strings(val) {
    return val + " this is String from Service"
  }
}
module.exports = IndexService;