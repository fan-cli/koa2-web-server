
const { userModel } = require("../model/index");
class LoginService {
  async signUp(ctx, user) {
    // 注册用户
    let data;
    await userModel.insertData(user).then((result) => (data = result));
    if (!data.affectedRows) {
      return false;
    }
    return true;
  }
  async findUserBypass(user) {
    let data;
    await userModel
      .findUserData(user.name, user.pass)
      .then((result) => (data = result));
    return data;
  }
}
module.exports = new LoginService();
