
const send = require('koa-send');
module.exports = async (ctx, filePath) => {
    const path = `public/${filePath}`;
    ctx.attachment(decodeURI(path));
    await send(ctx, path);
}

// https://zhuanlan.zhihu.com/p/35064819   下载